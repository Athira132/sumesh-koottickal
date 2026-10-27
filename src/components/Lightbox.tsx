import { useEffect } from 'react';
import type { GalleryItem } from '../data/gallery';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const nextIndex = (currentIndex + 1) % items.length;
        onNavigate(items[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onNavigate(items[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8"
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
      >
        {/* Top bar with Close button only */}
        <div className="flex items-center justify-end text-white z-10">
          <button
            onClick={onClose}
            className="p-2.5 rounded-full border border-white/20 bg-neutral-900/80 hover:bg-white hover:text-black text-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close image lightbox (Escape)"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Center image container */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          {/* Prev Button */}
          <button
            onClick={() => {
              const prevIndex = (currentIndex - 1 + items.length) % items.length;
              onNavigate(items[prevIndex]);
            }}
            className="absolute left-2 md:left-6 z-10 p-2.5 md:p-3 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 transition-all focus:outline-none"
            aria-label="Previous image (Left arrow)"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Image */}
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="max-h-full max-w-full flex items-center justify-center p-2"
          >
            <img
              src={item.src}
              alt={item.alt}
              onError={(e) => {
                if (e.currentTarget.src !== item.fallbackSrc) {
                  e.currentTarget.src = item.fallbackSrc;
                }
              }}
              className="max-h-[82vh] md:max-h-[88vh] max-w-full object-contain rounded-md shadow-2xl select-none"
            />
          </motion.div>

          {/* Next Button */}
          <button
            onClick={() => {
              const nextIndex = (currentIndex + 1) % items.length;
              onNavigate(items[nextIndex]);
            }}
            className="absolute right-2 md:right-6 z-10 p-2.5 md:p-3 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 transition-all focus:outline-none"
            aria-label="Next image (Right arrow)"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
