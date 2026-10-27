import { useState } from 'react';
import type { GalleryItem, GalleryCategory } from '../data/gallery';
import { CANONICAL_GALLERY_CATEGORIES } from '../data/gallery';
import { Lightbox } from './Lightbox';
import { Maximize2 } from 'lucide-react';

interface GalleryGridProps {
  items: GalleryItem[];
  enableFiltering?: boolean;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  items,
  enableFiltering = true,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Only display filters that have relevant content
  const availableCategories = CANONICAL_GALLERY_CATEGORIES.filter(
    (cat) => cat === 'All' || items.some((item) => item.category === cat)
  );

  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Category Filter Pills (Only show categories with real content) */}
      {enableFiltering && availableCategories.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-14">
          {availableCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-display tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/10 hover:border-white/30'
                }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Uniform 4:3 Image Grid: Exactly Two Columns on Mobile, Scaling Responsively to Tablet and Desktop */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            tabIndex={0}
            role="button"
            aria-label={`View photo: ${item.title}`}
            onClick={() => setActiveItem(item)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveItem(item);
              }
            }}
            className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/60 aspect-[4/3] w-full block"
          >
            {/* Image (Uniform 4:3 with object-cover) */}
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              onError={(e) => {
                if (e.currentTarget.src !== item.fallbackSrc) {
                  e.currentTarget.src = item.fallbackSrc;
                }
              }}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out block"
            />

            {/* Hover expand icon */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Component */}
      <Lightbox
        item={activeItem}
        items={filteredItems}
        onClose={() => setActiveItem(null)}
        onNavigate={(newItem) => setActiveItem(newItem)}
      />
    </div>
  );
};
