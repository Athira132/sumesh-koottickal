import { useEffect } from 'react';
import { HeroBanner } from '../components/HeroBanner';
import { GalleryGrid } from '../components/GalleryGrid';
import { GALLERY_ITEMS } from '../data/gallery';

export const Gallery: React.FC = () => {
  useEffect(() => {
    document.title = 'Gallery — Sumesh Koottickal | Artist Photographs & Stage Archive';
  }, []);

  return (
    <div className="w-full bg-black text-white">
      {/* Required Hero Banner */}
      <HeroBanner
        title="GALLERY"
        subtitle="Visual archive spanning live concert arenas, keytar performances, and promotional portraits."
        category="PHOTOGRAPHIC ARCHIVE"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Gallery Grid with Category Filters and Lightbox */}
        <GalleryGrid items={GALLERY_ITEMS} enableFiltering={true} />

        {/* Documentation notice for user to easily replace/add images */}
        <div className="mt-20 p-6 md:p-8 rounded-xl bg-neutral-950 border border-white/10 text-center max-w-2xl mx-auto">
          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            All photographs displayed are from official artist archives. Additional high-resolution concert photos, studio sessions, and event graphics can be added or replaced anytime via <code>src/data/gallery.ts</code>.
          </p>
        </div>
      </div>
    </div>
  );
};
