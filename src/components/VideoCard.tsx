import React from 'react';
import type { VideoItem } from '../data/videos';

interface VideoCardProps {
  video: VideoItem;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-xl">
      <iframe
        src={`https://www.youtube.com/embed/${video.youtubeId}`}
        title={`YouTube Video ${video.youtubeId}`}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};
