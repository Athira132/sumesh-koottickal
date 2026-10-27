import { Link } from 'react-router-dom';
import { ARTIST_DATA } from '../data/artist';
import { BIOGRAPHY_DATA } from '../data/biography';
import { GALLERY_ITEMS } from '../data/gallery';
import { SEO } from '../components/SEO';
import { SEO_DATA, getPersonSchema, getWebSiteSchema } from '../data/seo';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  return (
    <div className="w-full bg-black text-white">
      {/* Dynamic Search Engine Optimization & Structured Data */}
      <SEO
        title={SEO_DATA.home.title}
        description={SEO_DATA.home.description}
        canonicalPath={SEO_DATA.home.canonicalPath}
        schema={[getPersonSchema(), getWebSiteSchema()]}
      />

      {/* ========================================================= */}
      {/* 1. HOMEPAGE HERO (~72-74% VIEWPORT HEIGHT ON MOBILE)      */}
      {/* ========================================================= */}
      <section
        className="relative w-full h-[72vh] min-h-[440px] max-h-[640px] md:h-screen md:min-h-[600px] md:max-h-none flex flex-col justify-end overflow-hidden pb-4 sm:pb-6 md:pb-14"
        style={{ height: 'min(74dvh, 640px)' }}
        aria-label="Sumesh Koottickal Main Hero"
      >
        {/* Hero Photograph: Uses vertical mobile poster on mobile (<768px), wide landscape banner on desktop (>=768px) */}
        <div className="absolute inset-0 z-0">
          <picture className="w-full h-full block">
            <source
              media="(max-width: 767px)"
              srcSet={ARTIST_DATA.heroImage.mobileSrc || ARTIST_DATA.heroImage.src}
            />
            <source
              media="(min-width: 768px)"
              srcSet={ARTIST_DATA.heroImage.src}
            />
            <img
              src={ARTIST_DATA.heroImage.src}
              alt={ARTIST_DATA.heroImage.alt}
              loading="eager"
              fetchPriority="high"
              onError={(e) => {
                if (e.currentTarget.src !== ARTIST_DATA.heroImage.fallbackSrc) {
                  e.currentTarget.src = ARTIST_DATA.heroImage.fallbackSrc;
                }
              }}
              className="w-full h-full object-cover object-top md:object-[center_30%] select-none block"
            />
          </picture>

          {/* Top subtle navbar shadow */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

          {/* Subtle bottom gradient ensuring high contrast for tagline & buttons directly on top of photograph */}
          <div className="absolute bottom-0 inset-x-0 h-48 sm:h-64 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content: Bold Tagline & Action Buttons Directly Overlaid on Hero Image */}
        <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3 sm:gap-6 border-t border-white/15 pt-3 sm:pt-6 pb-0.5 sm:pb-1"
          >
            {/* Left: Tagline + Two Action Buttons Overlaid Directly on Photograph */}
            <div className="flex flex-col gap-2.5 sm:gap-3 max-w-2xl w-full">
              <h1 className="font-sans text-[11px] xs:text-xs sm:text-base md:text-lg lg:text-xl font-bold tracking-[0.14em] sm:tracking-[0.22em] text-white uppercase text-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                <span className="sr-only">Sumesh Koottickal — </span>
                MUSIC DIRECTOR · PERFORMER · MENTALIST
              </h1>

              {/* Two Action Buttons Directly Over the Hero Banner */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 pt-0.5 w-full sm:w-auto">
                <Link
                  to="/biography"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded bg-white text-black font-display tracking-widest text-xs sm:text-sm font-bold uppercase hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 shadow-2xl"
                >
                  <span>VISIT BIOGRAPHY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded border-2 border-white bg-black/75 backdrop-blur-sm text-white font-display tracking-widest text-xs sm:text-sm font-bold uppercase hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 shadow-2xl"
                >
                  <span>CONTACT ME</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Subtle Scroll Indicator (Desktop) */}
            <div className="hidden md:flex items-center gap-2 text-xs font-sans tracking-widest text-neutral-300 shrink-0">
              <span className="w-6 h-[1px] bg-neutral-500 inline-block" />
              <span className="uppercase text-[10px] tracking-[0.2em] text-neutral-300 font-medium">SCROLL</span>
              <ArrowDown className="w-3.5 h-3.5 text-neutral-300 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. BRIEF ARTIST INTRODUCTION                              */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 md:py-28 border-t border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Portrait column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 group aspect-[4/5] shadow-2xl max-w-md mx-auto lg:max-w-none">
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
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white uppercase leading-tight mb-6">
                MUSIC DIRECTION, ELECTRIFYING STAGE PERFORMANCE & MENTALISM
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed mb-6">
                {BIOGRAPHY_DATA.summary}
              </p>
              <p className="text-sm text-neutral-400 font-sans leading-relaxed mb-8">
                From landmark film vocal collaborations with legendary playback singers to high-energy keytar concerts commanding festival grounds, Sumesh Koottickal presents a singular vision of sound and performance.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
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
      <section className="py-16 md:py-28 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase block mb-3">
              VISUAL ARCHIVE
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider sm:tracking-cinematic text-white uppercase mb-4">
              GALLERY
            </h2>
          </div>

          {/* Exactly 3 uniform 4:3 images without captions, titles, or text overlays */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
          <div className="mt-10 md:mt-16 text-center">
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
      <section className="py-16 md:py-28 border-t border-white/10 bg-neutral-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase mb-3">
            START A CONVERSATION
          </span>
          <h2 className="font-display text-2xl sm:text-5xl md:text-6xl font-bold tracking-wider sm:tracking-cinematic text-white uppercase mb-6 leading-tight">
            COLLABORATE WITH SUMESH KOOTTICKAL
          </h2>
          <p className="text-sm md:text-base text-neutral-400 font-sans max-w-xl mb-8 leading-relaxed">
            For film score commissions, live concert bookings, corporate mentalism performances, and music production partnerships.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
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
