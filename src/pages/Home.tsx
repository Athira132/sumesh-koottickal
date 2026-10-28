import React from 'react';
import { Link } from 'react-router-dom';
import { ARTIST_DATA } from '../data/artist';
import { GALLERY_ITEMS } from '../data/gallery';
import { FEATURED_POPULAR_VIDEOS } from '../data/videos';
import { VideoCard } from '../components/VideoCard';
import { SEO } from '../components/SEO';
import { SEO_DATA, getPersonSchema, getWebSiteSchema } from '../data/seo';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  // First 3 featured popular music videos for compact homepage preview
  const homepageVideos = FEATURED_POPULAR_VIDEOS.slice(0, 3);

  // Gallery items for preview: 4 images in uniform 4:3 ratio (2 per row on mobile)
  const homepageGalleryImages = GALLERY_ITEMS.slice(0, 4);

  // 3 Selected films for homepage showcase
  const homepageFilms = [
    {
      id: 'film-chinnadhadha',
      title: 'Chinnadhadha',
      image: '/images/films/film-chinnadhadha.jpg',
      fallbackImage: 'https://i.ibb.co/LD5x5XwC/image.png',
    },
    {
      id: 'film-vishudha-pusthakam',
      title: 'Vishudha Pusthakam',
      image: '/images/films/film-vishudha-pusthakam.jpg',
      fallbackImage: 'https://i.ibb.co/hx3BdB31/image.png',
    },
    {
      id: 'film-idukki-blasters',
      title: 'Idukki Blasters',
      image: '/images/films/film-idukki-blasters.jpg',
      fallbackImage: 'https://i.ibb.co/5WrPqB29/image.png',
    },
  ];

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
      {/* 2. ARTIST INTRODUCTION SECTION (USES SUPPLIED PHOTO)      */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 md:py-24 border-t border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Visual Column: Supplied Artist Intro Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 group aspect-[3/4] shadow-2xl max-w-sm sm:max-w-md mx-auto lg:max-w-none">
                <img
                  src="/images/home-artist-intro.jpg"
                  alt="Sumesh Koottickal — Music Director & Keytar Performer"
                  onError={(e) => {
                    if (e.currentTarget.src !== 'https://i.ibb.co/whGt8HGp/image.png') {
                      e.currentTarget.src = 'https://i.ibb.co/whGt8HGp/image.png';
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-neutral-300 font-sans font-medium">
                  Sumesh Koottickal — Music Director & Keytar Performer
                </div>
              </div>
            </div>

            {/* Introduction Text Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase mb-2">
                MEET THE ARTIST
              </span>

              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white uppercase leading-tight mb-2">
                SUMESH KOOTTICKAL
              </h2>

              <p className="font-display text-sm sm:text-base text-neutral-300 font-semibold uppercase tracking-wider mb-5">
                Music Director & Keytar Performer
              </p>

              <p className="text-sm sm:text-base text-white font-sans leading-relaxed mb-4 font-medium bg-black/60 p-4 rounded-xl border border-white/10">
                An experienced music director, composer, and live keytar performer with a career spanning multiple languages and musical projects.
              </p>

              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mb-6">
                Sumesh Koottickal has composed more than 600 songs across diverse languages, directed music for Malayalam cinema, and captivated international audiences with electrifying live keytar performances and psychological mentalism.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to="/biography"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors shadow-lg"
                >
                  <span>EXPLORE BIOGRAPHY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black font-display tracking-widest text-xs font-bold uppercase transition-all"
                >
                  <span>GET IN TOUCH</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SELECTED FILM MUSIC (CONCISE HOMEPAGE SHOWCASE)         */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[11px] font-sans tracking-[0.25em] text-neutral-400 uppercase block mb-2">
              CINEMATIC SCORES & SOUNDTRACKS
            </span>
            <h3 className="font-display text-xl sm:text-3xl md:text-4xl font-bold tracking-wider sm:tracking-cinematic text-white uppercase">
              SELECTED FILM MUSIC
            </h3>
          </div>

          {/* Consistent Cinematic Poster Grid: 3 columns on desktop, 2 images per row on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
            {homepageFilms.map((film, index) => (
              <div
                key={film.id}
                className={`group rounded-xl overflow-hidden bg-neutral-950 border border-white/10 hover:border-white/30 transition-all flex flex-col ${
                  index === 2 ? 'col-span-2 md:col-span-1 max-w-[calc(50%-6px)] md:max-w-none mx-auto md:mx-0 w-full' : ''
                }`}
              >
                <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                  <img
                    src={film.image}
                    alt={`${film.title} film poster`}
                    onError={(e) => {
                      if (e.currentTarget.src !== film.fallbackImage) {
                        e.currentTarget.src = film.fallbackImage;
                      }
                    }}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                  />
                </div>
                <div className="p-3 sm:p-4 text-center">
                  <h4 className="font-display text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase">
                    {film.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* VIEW BIOGRAPHY Button linking to Biography page */}
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              to="/biography"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors shadow-lg"
            >
              <span>VIEW BIOGRAPHY</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. HOMEPAGE ACHIEVEMENTS PREVIEW (COMPACT HIGHLIGHTS)      */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[11px] font-sans tracking-[0.25em] text-neutral-400 uppercase block mb-2">
              DISTINCTIONS AT A GLANCE
            </span>
            <h3 className="font-display text-xl sm:text-3xl font-bold tracking-wider text-white uppercase">
              CAREER HIGHLIGHTS & ACHIEVEMENTS
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            <div className="p-4 sm:p-5 rounded-xl bg-neutral-950 border border-white/10 flex flex-col justify-between">
              <span className="font-mono text-xl sm:text-2xl font-bold text-white mb-2 block">2006</span>
              <div>
                <h4 className="font-display text-xs sm:text-sm font-bold text-white uppercase mb-1">
                  Music Director
                </h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                  Began professional career as a music director.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-neutral-950 border border-white/10 flex flex-col justify-between">
              <span className="font-mono text-xl sm:text-2xl font-bold text-white mb-2 block">600+</span>
              <div>
                <h4 className="font-display text-xs sm:text-sm font-bold text-white uppercase mb-1">
                  Compositions
                </h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                  Composed over 600 songs across various languages.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-neutral-950 border border-white/10 flex flex-col justify-between">
              <span className="font-mono text-xl sm:text-2xl font-bold text-white mb-2 block">2016</span>
              <div>
                <h4 className="font-display text-xs sm:text-sm font-bold text-white uppercase mb-1">
                  URF Icon Award
                </h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                  Presented by Padma Shri Dr. K. J. Yesudas.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-neutral-950 border border-white/10 flex flex-col justify-between">
              <span className="font-mono text-xl sm:text-2xl font-bold text-white mb-2 block">T20</span>
              <div>
                <h4 className="font-display text-xs sm:text-sm font-bold text-white uppercase mb-1">
                  Cricket Theme
                </h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                  Theme music for the Indian Cricket Team (T20 World Cup).
                </p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 p-4 sm:p-5 rounded-xl bg-neutral-950 border border-white/10 flex flex-col justify-between">
              <span className="font-mono text-xl sm:text-2xl font-bold text-white mb-2 block">2024</span>
              <div>
                <h4 className="font-display text-xs sm:text-sm font-bold text-white uppercase mb-1">
                  Classic Imperial
                </h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                  Keytar performer at Classic Imperial Cruise since Jan 2024.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. POPULAR MUSIC & COMPOSITIONS PREVIEW (FIRST 3 VIDEOS)   */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 md:py-24 border-t border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[11px] font-sans tracking-[0.25em] text-neutral-400 uppercase block mb-2">
              FEATURED TRACKS & CONCERTS
            </span>
            <h3 className="font-display text-xl sm:text-3xl md:text-4xl font-bold tracking-wider sm:tracking-cinematic text-white uppercase">
              POPULAR MUSIC & COMPOSITIONS
            </h3>
          </div>

          {/* First 3 featured videos: 2 columns on mobile, 3 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {homepageVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          {/* Centered Button to view all videos in Gallery */}
          <div className="mt-8 sm:mt-12 text-center">
            <Link
              to="/gallery#popular-music"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors shadow-lg"
            >
              <span>VIEW ALL VIDEOS</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. GALLERY PREVIEW (TWO PER ROW ON MOBILE, UNIFORM 4:3)    */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 md:py-24 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[11px] font-sans tracking-[0.25em] text-neutral-400 uppercase block mb-2">
              VISUAL ARCHIVE
            </span>
            <h3 className="font-display text-xl sm:text-3xl md:text-4xl font-bold tracking-wider sm:tracking-cinematic text-white uppercase">
              GALLERY
            </h3>
          </div>

          {/* Exactly 2 images per row on mobile (grid-cols-2), 4 on desktop, 4:3 ratio, no captions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {homepageGalleryImages.map((item) => (
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
          <div className="mt-8 sm:mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors shadow-lg"
            >
              <span>VIEW MORE</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CONTACT CTA                                            */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 md:py-28 border-t border-white/10 bg-neutral-950 text-center">
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
