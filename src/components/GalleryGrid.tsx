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

      {/* Uniform 4:3 Image Grid (Equally sized containers, no irregular masonry) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
            className="group relative overflow-hidden rounded-xl bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/60 aspect-[4/3]"
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
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Hover expand icon */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 className="w-4 h-4" />
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
