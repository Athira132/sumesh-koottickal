import { useState, useEffect } from 'react';
import { HeroBanner } from '../components/HeroBanner';
import { PAST_EVENT_IMAGES, UPCOMING_EVENTS, EVENTS_PAGE_CONFIG, type PastEventImage } from '../data/events';
import { SEO } from '../components/SEO';
import { SEO_DATA, getPersonSchema, getBreadcrumbSchema } from '../data/seo';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Events: React.FC = () => {
  const [activeImage, setActiveImage] = useState<PastEventImage | null>(null);

  // Keyboard navigation for image lightbox
  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = PAST_EVENT_IMAGES.findIndex((i) => i.id === activeImage.id);
        const nextIndex = (currentIndex + 1) % PAST_EVENT_IMAGES.length;
        setActiveImage(PAST_EVENT_IMAGES[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = PAST_EVENT_IMAGES.findIndex((i) => i.id === activeImage.id);
        const prevIndex = (currentIndex - 1 + PAST_EVENT_IMAGES.length) % PAST_EVENT_IMAGES.length;
        setActiveImage(PAST_EVENT_IMAGES[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeImage]);

  return (
    <div className="w-full bg-black text-white">
      {/* Dynamic Search Engine Optimization & Structured Data */}
      <SEO
        title={SEO_DATA.events.title}
        description={SEO_DATA.events.description}
        canonicalPath={SEO_DATA.events.canonicalPath}
        schema={[
          getPersonSchema(),
          getBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Events', path: '/events' },
          ]),
        ]}
      />

      {/* Standard Reusable Hero Banner */}
      <HeroBanner title={EVENTS_PAGE_CONFIG.heroTitle} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* ========================================================= */}
        {/* SECTION A: PAST EVENTS (14 VERIFIED IMAGES + AND MORE...) */}
        {/* ========================================================= */}
        <section aria-labelledby="past-events-heading" className="mb-24 md:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <h2
              id="past-events-heading"
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-cinematic text-white uppercase mb-3"
            >
              {EVENTS_PAGE_CONFIG.pastHeading}
            </h2>
          </div>

          {/* Consistent, Attractive 4:3 Grid for all 14 images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PAST_EVENT_IMAGES.map((img) => (
              <div
                key={img.id}
                tabIndex={0}
                role="button"
                aria-label={`View photograph: ${img.alt}`}
                onClick={() => setActiveImage(img)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveImage(img);
                  }
                }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  onError={(e) => {
                    if (e.currentTarget.src !== img.fallbackSrc) {
                      e.currentTarget.src = img.fallbackSrc;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Hover expand icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* AND MORE... text after the final event image */}
          <div className="mt-14 sm:mt-16 text-center">
            <p className="font-display text-xl sm:text-2xl md:text-3xl tracking-[0.25em] text-neutral-300 uppercase font-light">
              {EVENTS_PAGE_CONFIG.andMoreText}
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION B: UPCOMING EVENTS (STAY TUNED)                   */}
        {/* ========================================================= */}
        <section
          aria-labelledby="upcoming-events-heading"
          className="border-t border-white/10 pt-20 md:pt-28"
        >
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2
              id="upcoming-events-heading"
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-cinematic text-white uppercase mb-3"
            >
              {EVENTS_PAGE_CONFIG.upcomingHeading}
            </h2>
          </div>

          {UPCOMING_EVENTS.length > 0 ? (
            /* If upcoming events are added in the future */
            <div className="space-y-6">
              {UPCOMING_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="p-6 md:p-8 rounded-xl bg-neutral-900 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-wider text-white uppercase mb-1">
                      {event.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-sans">
                      {event.date} · {event.venue} {event.city ? `, ${event.city}` : ''}
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="px-5 py-2.5 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors"
                  >
                    ENQUIRE
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            /* Required Minimal Elegant "STAY TUNED" Announcement */
            <div className="max-w-2xl mx-auto p-12 md:p-16 rounded-2xl bg-neutral-950 border border-white/10 text-center flex flex-col items-center">
              <span className="text-[11px] font-sans tracking-[0.25em] text-neutral-400 uppercase mb-3">
                PERFORMANCE SCHEDULE
              </span>

              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-cinematic text-white uppercase mb-3">
                {EVENTS_PAGE_CONFIG.stayTunedHeading}
              </h3>

              <p className="font-sans text-xs sm:text-sm tracking-widest text-neutral-300 uppercase mb-8">
                {EVENTS_PAGE_CONFIG.stayTunedMessage}
              </p>

              <div className="w-12 h-[1px] bg-white/20 mb-8" />

              <Link
                to="/contact"
                className="px-8 py-3.5 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
              >
                <span>BOOKINGS & ENQUIRIES</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </section>

        {/* Centralized config instructions note */}
        <div className="mt-24 p-6 rounded-xl bg-neutral-950 border border-white/10 text-center max-w-xl mx-auto">
          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            Past event photographs and upcoming show schedules can be updated in <code>src/data/events.ts</code>.
          </p>
        </div>
      </div>

      {/* Lightbox for Past Event Photos (No captions or descriptions) */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Event photograph lightbox"
          >
            {/* Top Close Button */}
            <div className="flex items-center justify-end text-white z-10">
              <button
                onClick={() => setActiveImage(null)}
                className="p-2.5 rounded-full border border-white/20 bg-neutral-900/80 hover:bg-white hover:text-black text-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close image lightbox (Escape)"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Center Image Container */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <button
                onClick={() => {
                  const idx = PAST_EVENT_IMAGES.findIndex((i) => i.id === activeImage.id);
                  const prevIdx = (idx - 1 + PAST_EVENT_IMAGES.length) % PAST_EVENT_IMAGES.length;
                  setActiveImage(PAST_EVENT_IMAGES[prevIdx]);
                }}
                className="absolute left-2 md:left-6 z-10 p-2.5 md:p-3 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 transition-all focus:outline-none"
                aria-label="Previous image (Left arrow)"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <motion.div
                key={activeImage.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="max-h-full max-w-full flex items-center justify-center p-2"
              >
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  onError={(e) => {
                    if (e.currentTarget.src !== activeImage.fallbackSrc) {
                      e.currentTarget.src = activeImage.fallbackSrc;
                    }
                  }}
                  className="max-h-[82vh] md:max-h-[88vh] max-w-full object-contain rounded-md shadow-2xl select-none"
                />
              </motion.div>

              <button
                onClick={() => {
                  const idx = PAST_EVENT_IMAGES.findIndex((i) => i.id === activeImage.id);
                  const nextIdx = (idx + 1) % PAST_EVENT_IMAGES.length;
                  setActiveImage(PAST_EVENT_IMAGES[nextIdx]);
                }}
                className="absolute right-2 md:right-6 z-10 p-2.5 md:p-3 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 transition-all focus:outline-none"
                aria-label="Next image (Right arrow)"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
