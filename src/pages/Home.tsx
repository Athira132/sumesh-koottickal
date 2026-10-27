import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ARTIST_DATA } from '../data/artist';
import { BIOGRAPHY_DATA } from '../data/biography';
import { GALLERY_ITEMS } from '../data/gallery';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Sumesh Koottickal — Music Director · Performer · Mentalist';
  }, []);

  return (
    <div className="w-full bg-black text-white">
      {/* ========================================================= */}
      {/* 1. HOMEPAGE HERO (CINEMATIC, MINIMAL, NO OVERSIZED NAME)   */}
      {/* ========================================================= */}
      <section
        className="relative w-full h-screen min-h-[600px] flex flex-col justify-end overflow-hidden pb-10 sm:pb-14"
        aria-label="Sumesh Koottickal Main Hero"
      >
        {/* Background Main Hero Photograph — Bright, Crisp & Clear */}
        <div className="absolute inset-0 z-0">
          <img
            src={ARTIST_DATA.heroImage.src}
            alt={ARTIST_DATA.heroImage.alt}
            onError={(e) => {
              if (e.currentTarget.src !== ARTIST_DATA.heroImage.fallbackSrc) {
                e.currentTarget.src = ARTIST_DATA.heroImage.fallbackSrc;
              }
            }}
            className="w-full h-full object-cover object-[center_30%] select-none"
          />

          {/* Ultra-subtle header shadow solely for navbar contrast */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/45 to-transparent pointer-events-none" />
          
          {/* Subtle bottom edge gradient solely behind the tagline */}
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Elegant Minimal Line Near Bottom */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 border-t border-white/10 pt-6"
          >
            <p className="font-sans text-xs sm:text-sm md:text-base tracking-[0.25em] text-white uppercase font-light text-center sm:text-left drop-shadow-lg">
              MUSIC DIRECTOR · PERFORMER · MENTALIST
            </p>

            {/* Subtle Scroll Indicator */}
            <div className="flex items-center gap-2 text-xs font-sans tracking-widest text-neutral-400">
              <span className="w-5 h-[1px] bg-neutral-600 hidden sm:inline-block" />
              <span className="uppercase text-[10px] tracking-[0.2em] text-neutral-400">SCROLL</span>
              <ArrowDown className="w-3.5 h-3.5 text-neutral-400 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. BRIEF ARTIST INTRODUCTION                              */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 border-t border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Portrait column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 group aspect-[4/5] shadow-2xl">
                <img
                  src={BIOGRAPHY_DATA.portrait.src}
                  alt={BIOGRAPHY_DATA.portrait.alt}
                  onError={(e) => {
                    if (e.currentTarget.src !== BIOGRAPHY_DATA.portrait.fallbackSrc) {
                      e.currentTarget.src = BIOGRAPHY_DATA.portrait.fallbackSrc;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Intro text column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase mb-3">
                MEET THE ARTIST
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white uppercase leading-tight mb-6">
                MUSIC DIRECTION, ELECTRIFYING STAGE PERFORMANCE & MENTALISM
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed mb-6">
                {BIOGRAPHY_DATA.summary}
              </p>
              <p className="text-sm text-neutral-400 font-sans leading-relaxed mb-8">
                From landmark film vocal collaborations with legendary playback singers to high-energy keytar concerts commanding festival grounds, Sumesh Koottickal presents a singular vision of sound and performance.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/biography"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors"
                >
                  <span>READ FULL BIOGRAPHY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black font-display tracking-widest text-xs font-bold uppercase transition-all"
                >
                  <span>BOOKINGS & ENQUIRIES</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. GALLERY PREVIEW (EXACTLY THREE IMAGES, NO CAPTIONS)    */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase block mb-3">
              VISUAL ARCHIVE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-cinematic text-white uppercase mb-4">
              GALLERY
            </h2>
          </div>

          {/* Exactly 3 uniform 4:3 images without captions, titles, or text overlays */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {GALLERY_ITEMS.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                to="/gallery"
                className="group block relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  onError={(e) => {
                    if (e.currentTarget.src !== item.fallbackSrc) {
                      e.currentTarget.src = item.fallbackSrc;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </Link>
            ))}
          </div>

          {/* Centered VIEW MORE Button linking to /gallery */}
          <div className="mt-12 md:mt-16 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors shadow-lg"
            >
              <span>VIEW MORE</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. CONTACT CTA                                            */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 border-t border-white/10 bg-neutral-950 text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase mb-3">
            START A CONVERSATION
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-cinematic text-white uppercase mb-6">
            COLLABORATE WITH SUMESH KOOTTICKAL
          </h2>
          <p className="text-sm md:text-base text-neutral-400 font-sans max-w-xl mb-8 leading-relaxed">
            For film score commissions, live concert bookings, corporate mentalism performances, and music production partnerships.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${ARTIST_DATA.contact.phone}`}
              className="px-8 py-3.5 rounded border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black font-display tracking-widest text-xs font-bold uppercase transition-all"
            >
              <span>CALL {ARTIST_DATA.contact.displayPhone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
