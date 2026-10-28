import React, { useState } from 'react';
import type { VideoItem } from '../data/videos';
import { Play } from 'lucide-react';

interface VideoCardProps {
  video: VideoItem;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(!video.customThumbnail);

  return (
    <div className="relative w-full aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-xl group">
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
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
            onClick={() => setIsPlaying(true)}
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
