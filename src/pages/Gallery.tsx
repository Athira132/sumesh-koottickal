import React, { useState } from 'react';
import { HeroBanner } from '../components/HeroBanner';
import { GalleryGrid } from '../components/GalleryGrid';
import { VideoCard } from '../components/VideoCard';
import { GALLERY_ITEMS } from '../data/gallery';
import {
  FEATURED_POPULAR_VIDEOS,
  REMAINING_GALLERY_VIDEOS,
  VIDEO_SECTION_CONFIG,
} from '../data/videos';
import { SEO } from '../components/SEO';
import { SEO_DATA, getPersonSchema, getBreadcrumbSchema } from '../data/seo';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [showMoreVideos, setShowMoreVideos] = useState(false);
  const hasAdditionalVideos = REMAINING_GALLERY_VIDEOS.length > 0;

  return (
    <div className="w-full bg-black text-white">
      {/* Dynamic Search Engine Optimization & Structured Data */}
      <SEO
        title={SEO_DATA.gallery.title}
        description={SEO_DATA.gallery.description}
        canonicalPath={SEO_DATA.gallery.canonicalPath}
        schema={[
          getPersonSchema(),
          getBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Gallery', path: '/gallery' },
          ]),
        ]}
      />

      {/* Standard Reusable Hero Banner */}
      <HeroBanner title="GALLERY" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24">
        {/* ========================================================= */}
        {/* SECTION 1: POPULAR MUSIC & COMPOSITIONS (TOP OF GALLERY)  */}
        {/* ========================================================= */}
        <section
          id="popular-music"
          aria-labelledby="popular-music-heading"
          className="mb-20 md:mb-32 scroll-mt-28"
        >
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <h2
              id="popular-music-heading"
              className="font-display text-xl sm:text-3xl md:text-4xl font-bold tracking-wider sm:tracking-cinematic text-white uppercase mb-3"
            >
              {VIDEO_SECTION_CONFIG.heading}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans tracking-wider uppercase">
              {VIDEO_SECTION_CONFIG.subtitle}
            </p>
          </div>

          {/* 6 Featured Videos: 2 columns on mobile (repeat(2, minmax(0, 1fr))), 3 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {FEATURED_POPULAR_VIDEOS.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          {/* Revealed Remaining Existing Gallery Videos */}
          {showMoreVideos && (
            <div className="mt-4 sm:mt-6 md:mt-8 pt-6 sm:pt-8 border-t border-white/10">
              <h3 className="text-xs font-sans tracking-[0.2em] text-neutral-400 uppercase mb-6 text-center">
                ADDITIONAL GALLERY ARCHIVES
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                {REMAINING_GALLERY_VIDEOS.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          )}

          {/* LOAD MORE Button / External Watch More */}
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            {hasAdditionalVideos && !showMoreVideos && (
              <button
                type="button"
                onClick={() => setShowMoreVideos(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors shadow-lg cursor-pointer"
              >
                <span>LOAD MORE</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            )}

            <a
              href={VIDEO_SECTION_CONFIG.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded border border-white/20 bg-neutral-900/60 hover:bg-white hover:text-black text-white font-display tracking-widest text-xs font-bold uppercase transition-all shadow-md"
            >
              <span>{VIDEO_SECTION_CONFIG.watchMoreLabel}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: PHOTOGRAPHY (NO CAPTIONS / DESCRIPTIONS)       */}
        {/* ========================================================= */}
        <section
          aria-labelledby="photography-heading"
          className="border-t border-white/10 pt-16 sm:pt-20 md:pt-28"
        >
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-14">
            <h2
              id="photography-heading"
              className="font-display text-xl sm:text-3xl md:text-4xl font-bold tracking-wider sm:tracking-cinematic text-white uppercase mb-3"
            >
              PHOTOGRAPHY ARCHIVE
            </h2>
          </div>

          {/* Clean Uniform 4:3 Grid without captions — Two Columns on Mobile */}
          <GalleryGrid items={GALLERY_ITEMS} enableFiltering={false} />
        </section>
      </div>
    </div>
  );
};
