import React, { useState, useRef, useEffect } from 'react';
import type { VideoItem } from '../data/videos';
import { Play } from 'lucide-react';
import { videoPlaybackManager } from '../utils/videoPlaybackManager';

interface VideoCardProps {
  video: VideoItem;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(!video.customThumbnail);
  const [hasUserStarted, setHasUserStarted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Clean up registration on unmount
  useEffect(() => {
    return () => {
      videoPlaybackManager.unregisterIframe(video.id);
    };
  }, [video.id]);

  // If a video specifies a directWatchUrl (only the second video), redirect directly to YouTube
  if (video.directWatchUrl) {
    return (
      <a
        href={video.directWatchUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Watch video on YouTube"
        className="relative w-full aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-xl group block cursor-pointer"
      >
        <img
          src={video.customThumbnail || '/images/cover-uruki-uruki.jpg'}
          alt="Sumesh Koottickal video cover"
          onError={(e) => {
            if (e.currentTarget.src !== 'https://i.ibb.co/W48YX2xT/image.png') {
              e.currentTarget.src = 'https://i.ibb.co/W48YX2xT/image.png';
            }
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors pointer-events-none" />

        {/* Centered Play Button */}
        <div className="absolute inset-0 m-auto w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/90 group-hover:bg-white text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 pointer-events-none">
          <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-black ml-0.5" />
        </div>
      </a>
    );
  }

  // Construct iframe embed source with enablejsapi=1 for global playback coordination
  // Include autoplay=1 only if the user explicitly triggered playback via the custom play button
  const iframeSrc = `https://www.youtube.com/embed/${video.youtubeId}?enablejsapi=1&rel=0${
    hasUserStarted ? '&autoplay=1' : ''
  }`;

  return (
    <div className="relative w-full aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-xl group">
      {isPlaying ? (
        <iframe
          ref={(el) => {
            iframeRef.current = el;
            if (el) {
              videoPlaybackManager.registerIframe(video.id, el);
            }
          }}
          id={`yt-player-${video.id}`}
          data-video-id={video.id}
          src={iframeSrc}
          title={`Sumesh Koottickal performance video (${video.youtubeId})`}
          className="w-full h-full border-0 block"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <div className="relative w-full h-full">
          <img
            src={video.customThumbnail}
            alt="Sumesh Koottickal — Uruki Uruki Theernnidaam video cover"
            onError={(e) => {
              if (e.currentTarget.src !== 'https://i.ibb.co/W48YX2xT/image.png') {
                e.currentTarget.src = 'https://i.ibb.co/W48YX2xT/image.png';
              }
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
          />
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors pointer-events-none" />

          {/* Centered Play Button */}
          <button
            type="button"
            onClick={() => {
              videoPlaybackManager.notifyVideoStarting(video.id);
              setHasUserStarted(true);
              setIsPlaying(true);
            }}
            aria-label="Play video inside website"
            className="absolute inset-0 m-auto w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/90 hover:bg-white text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
          >
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-black ml-0.5" />
          </button>
        </div>
      )}
    </div>
  );
};
