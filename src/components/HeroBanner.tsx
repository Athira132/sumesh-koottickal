import React from 'react';
import { motion } from 'framer-motion';

interface HeroBannerProps {
  title: string;
  imageSrc?: string;
  imageFallback?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  imageSrc = '/images/page-hero.jpg',
  imageFallback = 'https://i.ibb.co/DPwR983z/image.png',
}) => {
  return (
    <section
      className="relative w-full h-[30vh] min-h-[220px] sm:h-[36vh] sm:min-h-[260px] md:h-[44vh] md:min-h-[340px] flex items-center justify-center overflow-hidden border-b border-white/10"
      aria-label={`${title} Banner`}
    >
      {/* Background Image with Black-and-White treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={`${title} banner atmosphere`}
          onError={(e) => {
            if (e.currentTarget.src !== imageFallback) {
              e.currentTarget.src = imageFallback;
            }
          }}
          className="w-full h-full object-cover object-center grayscale contrast-125 select-none"
        />

        {/* Black contrast overlay */}
        <div className="absolute inset-0 bg-black/65 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70 pointer-events-none" />
      </div>

      {/* Centered Page Title */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider sm:tracking-cinematic text-white uppercase drop-shadow-lg"
        >
          <span className="sr-only">Sumesh Koottickal — </span>
          {title}
        </motion.h1>
      </div>
    </section>
  );
};
