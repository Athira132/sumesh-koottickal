import { HeroBanner } from '../components/HeroBanner';
import { GalleryGrid } from '../components/GalleryGrid';
import { VideoCard } from '../components/VideoCard';
import { GALLERY_ITEMS } from '../data/gallery';
import { VIDEO_ITEMS, VIDEO_SECTION_CONFIG } from '../data/videos';
import { SEO } from '../components/SEO';
import { SEO_DATA, getPersonSchema, getBreadcrumbSchema } from '../data/seo';
import { ArrowUpRight } from 'lucide-react';

export const Gallery: React.FC = () => {
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
        {/* SECTION A: PHOTOGRAPHY (NO CAPTIONS / DESCRIPTIONS)       */}
        {/* ========================================================= */}
        <section aria-labelledby="photography-heading" className="mb-20 md:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-14">
            <h2
              id="photography-heading"
              className="font-display text-xl sm:text-3xl md:text-4xl font-bold tracking-wider sm:tracking-cinematic text-white uppercase mb-3"
            >
              SUMESH KOOTTICKAL GALLERY
            </h2>
          </div>

          {/* Clean Uniform 4:3 Grid without captions or text overlays — Two Columns on Mobile */}
          <GalleryGrid items={GALLERY_ITEMS} enableFiltering={false} />
        </section>

        {/* ========================================================= */}
        {/* SECTION B: VIDEOS (ALL SIX YOUTUBE VIDEOS)                */}
        {/* ========================================================= */}
        <section
          aria-labelledby="videos-heading"
          className="border-t border-white/10 pt-16 sm:pt-20 md:pt-28"
        >
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <h2
              id="videos-heading"
              className="font-display text-xl sm:text-3xl md:text-4xl font-bold tracking-wider sm:tracking-cinematic text-white uppercase"
            >
              VIDEOS
            </h2>
          </div>

          {/* Uniform 16:9 Video Grid: Exactly Two Columns on Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {VIDEO_ITEMS.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          {/* Centered WATCH MORE Button */}
          <div className="mt-12 md:mt-16 text-center">
            <a
              href={VIDEO_SECTION_CONFIG.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors shadow-lg"
            >
              <span>{VIDEO_SECTION_CONFIG.watchMoreLabel}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Documentation notice for user to easily update */}
        <div className="mt-24 p-6 rounded-xl bg-neutral-950 border border-white/10 text-center max-w-xl mx-auto">
          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            Photographs can be managed in <code>src/data/gallery.ts</code>. YouTube video links can be added or adjusted in <code>src/data/videos.ts</code>.
          </p>
        </div>
      </div>
    </div>
  );
};
