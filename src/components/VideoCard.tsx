import React from 'react';
import type { VideoItem } from '../data/videos';
import { ExternalLink, Play } from 'lucide-react';

interface VideoCardProps {
  video: VideoItem;
}

function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  // If already embed URL
  if (url.includes('youtube.com/embed/')) return url;
  
  // youtube.com/watch?v=ID
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
  
  // youtu.be/ID
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  
  return null;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const embedUrl = getYouTubeEmbedUrl(video.youtubeUrl);

  return (
    <article className="rounded-xl overflow-hidden bg-surface-card border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between">
      {/* 16:9 Video container */}
      <div className="relative w-full aspect-video bg-neutral-900 overflow-hidden">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-neutral-950">
            <div className="w-12 h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center mb-3">
              <Play className="w-5 h-5 text-neutral-400" />
            </div>
            <span className="text-xs uppercase font-sans tracking-widest text-neutral-400">
              Future Video Stream
            </span>
          </div>
        )}
      </div>

      {/* Card Info */}
      <div className="p-5 md:p-6 flex flex-col justify-between flex-1">
        <div>
          <span className="text-[10px] md:text-xs font-sans tracking-widest text-neutral-400 uppercase block mb-1">
            {video.category}
          </span>
          <h3 className="font-display text-lg md:text-xl font-bold tracking-wider text-white uppercase mb-2">
            {video.title}
          </h3>
          {video.description && (
            <p className="text-xs text-neutral-400 font-sans leading-relaxed">
              {video.description}
            </p>
          )}
        </div>

        {video.youtubeUrl && !embedUrl && (
          <div className="mt-4 pt-3 border-t border-white/10">
            <a
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-display tracking-wider text-neutral-300 hover:text-white uppercase transition-colors"
            >
              <span>WATCH ON YOUTUBE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
};
