import { useState } from 'react';
import type { GalleryItem, GalleryCategory } from '../data/gallery';
import { GALLERY_CATEGORIES } from '../data/gallery';
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

  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Category Filter Pills (Only show categories with content) */}
      {enableFiltering && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-14">
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-display tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-semibold'
                    : 'bg-surface-subtle text-neutral-400 hover:text-white border border-white/10 hover:border-white/30'
                }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Editorial Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredItems.map((item, index) => (
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
            className={`group relative overflow-hidden rounded-xl bg-surface-card border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/60 aspect-[4/5] ${
              index === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-[16/10]' : ''
            }`}
          >
            {/* Image */}
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

            {/* Dark Gradient Overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

            {/* Hover expand icon */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Card Footer Content */}
            <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 text-white transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[10px] md:text-xs font-sans tracking-widest text-neutral-400 uppercase block mb-1">
                {item.category}
              </span>
              <h3 className="font-display text-lg md:text-xl font-bold tracking-wider uppercase mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-300 line-clamp-2 font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.caption}
              </p>
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
