/**
 * Single Video Playback Manager
 * 
 * Enforces global single-video playback across the entire website.
 * When any video (YouTube embed, HTML5 <video>, or third-party iframe) starts playing,
 * all other actively playing videos are automatically paused or stopped immediately.
 */

// Extend Window interface for YouTube IFrame API
declare global {
  interface Window {
    YT?: {
      Player: any;
      PlayerState: {
        UNSTARTED: number;
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
      loaded?: number;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

class VideoPlaybackManager {
  private iframes: Map<string, HTMLIFrameElement> = new Map();
  private ytPlayers: Map<string, any> = new Map();
  private activeElement: Element | null = null;
  private isInitialized = false;
  private apiReady = false;
  private pendingRegistrations: Array<{ id: string; iframe: HTMLIFrameElement }> = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.init();
    }
  }

  /**
   * Returns the currently active media or iframe element, if any.
   */
  public getActiveElement(): Element | null {
    return this.activeElement;
  }

  /**
   * Initializes global event listeners and loads the YouTube IFrame API if not already present.
   */
  public init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;
    this.isInitialized = true;

    // 1. Capture HTML5 <video> and <audio> play events globally (capture phase)
    document.addEventListener(
      'play',
      (event: Event) => {
        const target = event.target;
        if (target instanceof HTMLMediaElement) {
          this.activeElement = target;
          this.pauseAllExcept(target);
        }
      },
      true
    );

    // 2. Listen to postMessage events from embedded iframes (YouTube, Vimeo, etc.)
    window.addEventListener('message', this.handleWindowMessage);

    // 3. Ensure YouTube IFrame API script is available
    this.ensureYouTubeAPI();
  }

  /**
   * Ensures the YouTube IFrame Player API script is loaded.
   */
  private ensureYouTubeAPI(): void {
    if (window.YT && window.YT.Player) {
      this.apiReady = true;
      this.flushPendingRegistrations();
      return;
    }

    // Set callback if not already defined
    const prevReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      this.apiReady = true;
      if (typeof prevReady === 'function') {
        try {
          prevReady();
        } catch {
          // ignore
        }
      }
      this.flushPendingRegistrations();
    };

    // Check if script tag is already in DOM
    const existingScript = document.querySelector('script[src*="youtube.com/iframe_api"]');
    if (!existingScript) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.async = true;
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
    }
  }

  /**
   * Flushes any iframes that were registered before the YouTube API script finished loading.
   */
  private flushPendingRegistrations(): void {
    const list = [...this.pendingRegistrations];
    this.pendingRegistrations = [];
    list.forEach(({ id, iframe }) => {
      this.bindYouTubePlayer(id, iframe);
    });
  }

  /**
   * Registers a YouTube iframe with the manager.
   */
  public registerIframe(id: string, iframe: HTMLIFrameElement): void {
    this.iframes.set(id, iframe);

    if (this.apiReady && window.YT && window.YT.Player) {
      this.bindYouTubePlayer(id, iframe);
    } else {
      this.pendingRegistrations.push({ id, iframe });
      this.ensureYouTubeAPI();
    }
  }

  /**
   * Unregisters an iframe when it unmounts.
   */
  public unregisterIframe(id: string): void {
    this.iframes.delete(id);
    const player = this.ytPlayers.get(id);
    if (player && typeof player.destroy === 'function') {
      try {
        player.destroy();
      } catch {
        // ignore
      }
    }
    this.ytPlayers.delete(id);
    this.pendingRegistrations = this.pendingRegistrations.filter((item) => item.id !== id);
  }

  /**
   * Binds a YouTube YT.Player instance to an iframe.
   */
  private bindYouTubePlayer(id: string, iframe: HTMLIFrameElement): void {
    if (!window.YT || !window.YT.Player || this.ytPlayers.has(id)) return;

    try {
      const player = new window.YT.Player(iframe, {
        events: {
          onStateChange: (event: any) => {
            // YT.PlayerState.PLAYING (1) or BUFFERING (3)
            if (event && (event.data === 1 || event.data === 3)) {
              this.activeElement = iframe;
              this.pauseAllExcept(iframe);
            }
          },
        },
      });
      this.ytPlayers.set(id, player);
    } catch {
      // In case of any cross-origin wrapper issues, postMessage fallback remains active
    }
  }

  /**
   * Handles postMessage events from YouTube and other video embed iframes.
   */
  private handleWindowMessage = (event: MessageEvent): void => {
    if (!event.data) return;

    let data: any = event.data;
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch {
        return;
      }
    }

    if (!data || typeof data !== 'object') return;

    // Check YouTube postMessage events
    // format A: { event: "infoDelivery", info: { playerState: 1 | 3 } }
    // format B: { event: "onStateChange", info: 1 | 3 }
    const isYouTubePlaying =
      (data.event === 'infoDelivery' &&
        data.info &&
        (data.info.playerState === 1 || data.info.playerState === 3)) ||
      (data.event === 'onStateChange' && (data.info === 1 || data.info === 3));

    if (isYouTubePlaying) {
      let senderIframe: HTMLIFrameElement | null = null;

      // Find which iframe sent this message
      for (const [, iframe] of this.iframes) {
        if (iframe.contentWindow === event.source) {
          senderIframe = iframe;
          break;
        }
      }

      if (!senderIframe && event.source) {
        const allIframes = document.querySelectorAll<HTMLIFrameElement>('iframe');
        for (const iframe of allIframes) {
          if (iframe.contentWindow === event.source) {
            senderIframe = iframe;
            break;
          }
        }
      }

      if (senderIframe) {
        this.activeElement = senderIframe;
        this.pauseAllExcept(senderIframe);
      }
      return;
    }

    // Check Vimeo events: { event: "play" }
    if (data.event === 'play' && event.source) {
      const allIframes = document.querySelectorAll<HTMLIFrameElement>('iframe');
      for (const iframe of allIframes) {
        if (iframe.contentWindow === event.source) {
          this.activeElement = iframe;
          this.pauseAllExcept(iframe);
          break;
        }
      }
    }
  };

  /**
   * Notifies the manager that a video has begun or was requested by the user.
   * Can be invoked directly when a play button is clicked.
   */
  public notifyVideoStarting(id?: string, element?: Element | null): void {
    const el = element || (id ? this.iframes.get(id) : null) || null;
    this.activeElement = el;
    this.pauseAllExcept(el);
  }

  /**
   * Pauses all other playing videos across the website except the specified active element.
   */
  public pauseAllExcept(exceptElement: Element | null): void {
    // 1. Pause all HTML5 <video> and <audio> elements
    if (typeof document !== 'undefined') {
      const mediaElements = document.querySelectorAll<HTMLMediaElement>('video, audio');
      mediaElements.forEach((media) => {
        if (media !== exceptElement && !media.paused) {
          try {
            media.pause();
          } catch {
            // ignore
          }
        }
      });

      // 2. Pause registered YouTube iframes
      this.iframes.forEach((iframe, id) => {
        if (iframe !== exceptElement) {
          this.pauseYouTubeIframe(iframe, id);
        }
      });

      // 3. Pause any other YouTube or Vimeo iframes in the DOM
      const allIframes = document.querySelectorAll<HTMLIFrameElement>('iframe');
      allIframes.forEach((iframe) => {
        if (iframe !== exceptElement) {
          const src = iframe.src || '';
          if (src.includes('youtube.com') || src.includes('youtube-nocookie.com')) {
            this.sendYouTubePauseCommand(iframe);
          } else if (src.includes('vimeo.com')) {
            try {
              iframe.contentWindow?.postMessage('{"method":"pause"}', '*');
            } catch {
              // ignore
            }
          }
        }
      });
    }
  }

  /**
   * Pauses a specific YouTube iframe using YT.Player and postMessage fallback.
   */
  private pauseYouTubeIframe(iframe: HTMLIFrameElement, id?: string): void {
    if (id) {
      const player = this.ytPlayers.get(id);
      if (player && typeof player.pauseVideo === 'function') {
        try {
          player.pauseVideo();
        } catch {
          // ignore
        }
      }
    }
    this.sendYouTubePauseCommand(iframe);
  }

  /**
   * Sends the standard YouTube IFrame API pause command via postMessage.
   */
  private sendYouTubePauseCommand(iframe: HTMLIFrameElement): void {
    try {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
        '*'
      );
    } catch {
      // ignore cross-origin errors
    }
  }

  /**
   * Stops or pauses all videos across the entire website unconditionally.
   * Useful when changing routes or closing modals.
   */
  public pauseAll(): void {
    this.pauseAllExcept(null);
    this.activeElement = null;
  }
}

// Export singleton instance
export const videoPlaybackManager = new VideoPlaybackManager();
