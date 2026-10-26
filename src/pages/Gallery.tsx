import { useEffect } from 'react';
import { HeroBanner } from '../components/HeroBanner';
import { GalleryGrid } from '../components/GalleryGrid';
import { VideoCard } from '../components/VideoCard';
import { GALLERY_ITEMS } from '../data/gallery';
import { VIDEO_ITEMS, VIDEO_SECTION_CONFIG } from '../data/videos';
import { Play, ExternalLink } from 'lucide-react';

export const Gallery: React.FC = () => {
  useEffect(() => {
    document.title = 'Gallery — Sumesh Koottickal | Photography & Videos';
  }, []);

  const hasVideos = VIDEO_ITEMS.some((v) => !v.isPlaceholder && Boolean(v.youtubeUrl));

  return (
    <div className="w-full bg-black text-white">
      {/* Standard Reusable Hero Banner */}
      <HeroBanner title="GALLERY" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* ========================================================= */}
        {/* SECTION A: PHOTOGRAPHY                                    */}
        {/* ========================================================= */}
        <section aria-labelledby="photography-heading" className="mb-24 md:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <h2
              id="photography-heading"
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-cinematic text-white uppercase mb-3"
            >
              PHOTOGRAPHY
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans tracking-wide">
              Uniform visual archive across concerts, promotional portraits, and stage appearances.
            </p>
          </div>

          {/* Uniform 4:3 Photography Grid */}
          <GalleryGrid items={GALLERY_ITEMS} enableFiltering={true} />
        </section>

        {/* ========================================================= */}
        {/* SECTION B: VIDEOS                                         */}
        {/* ========================================================= */}
        <section
          aria-labelledby="videos-heading"
          className="border-t border-white/10 pt-20 md:pt-28"
        >
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2
              id="videos-heading"
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-cinematic text-white uppercase mb-2"
            >
              {VIDEO_SECTION_CONFIG.heading}
            </h2>
            <p className="text-xs sm:text-sm font-sans tracking-widest text-neutral-400 uppercase">
              {VIDEO_SECTION_CONFIG.subtitle}
            </p>
          </div>

          {hasVideos ? (
            /* Responsive 16:9 Video Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {VIDEO_ITEMS.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            /* Minimal Restrained Empty State as specified: "VIDEOS COMING SOON" */
            <div className="max-w-2xl mx-auto p-10 md:p-14 rounded-2xl bg-neutral-950 border border-white/10 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white mb-5">
                <Play className="w-5 h-5 text-neutral-300 ml-0.5" />
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white uppercase mb-3">
                {VIDEO_SECTION_CONFIG.emptyStateTitle}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-lg mb-8">
                {VIDEO_SECTION_CONFIG.emptyStateDescription}
              </p>

              <a
                href={VIDEO_SECTION_CONFIG.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
              >
                <span>VISIT YOUTUBE CHANNEL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </section>

        {/* Documentation notice for user to easily update */}
        <div className="mt-24 p-6 rounded-xl bg-neutral-950 border border-white/10 text-center max-w-xl mx-auto">
          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            Photographs can be added or adjusted in <code>src/data/gallery.ts</code>. YouTube video links can be added in <code>src/data/videos.ts</code>.
          </p>
        </div>
      </div>
    </div>
  );
};
