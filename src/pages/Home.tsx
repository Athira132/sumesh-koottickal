import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ARTIST_DATA } from '../data/artist';
import { BIOGRAPHY_DATA } from '../data/biography';
import { MUSIC_DATA } from '../data/music';
import { EVENTS_DATA } from '../data/events';
import { GALLERY_ITEMS } from '../data/gallery';
import { ProjectCard } from '../components/ProjectCard';
import { GalleryGrid } from '../components/GalleryGrid';
import { SectionHeading } from '../components/SectionHeading';
import { ArrowDown, ArrowUpRight, Calendar, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Sumesh Koottickal — Music Director · Performer · Mentalist';
  }, []);

  return (
    <div className="w-full bg-black text-white">
      {/* ========================================================= */}
      {/* 1. HOMEPAGE HERO (DOMINANT VISUAL PRIORITY)               */}
      {/* ========================================================= */}
      <section
        className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-end overflow-hidden pb-16 md:pb-24 pt-32"
        aria-label="Sumesh Koottickal Main Hero"
      >
        {/* Background Main Hero Photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src={ARTIST_DATA.heroImage.src}
            alt={ARTIST_DATA.heroImage.alt}
            onError={(e) => {
              if (e.currentTarget.src !== ARTIST_DATA.heroImage.fallbackSrc) {
                e.currentTarget.src = ARTIST_DATA.heroImage.fallbackSrc;
              }
            }}
            className="w-full h-full object-cover object-top sm:object-center select-none"
          />

          {/* Cinematic Vignette & Edge Fades for pristine text contrast */}
          <div className="absolute inset-0 hero-top-fade pointer-events-none" />
          <div className="absolute inset-0 hero-bottom-fade pointer-events-none" />
          <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        </div>

        {/* Minimal Artist Identification Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md mb-4 text-xs font-sans tracking-widest text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>OFFICIAL ARTIST PORTFOLIO</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-cinematic text-white uppercase leading-none drop-shadow-2xl">
              {ARTIST_DATA.name}
            </h1>

            <p className="mt-4 md:mt-6 font-display text-base sm:text-xl md:text-2xl tracking-widest text-neutral-300 uppercase">
              {ARTIST_DATA.descriptor}
            </p>

            {/* Quick Actions & Scroll Indicator */}
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <Link
                to="/music"
                className="px-6 py-3 rounded bg-white text-black font-display tracking-widest text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-colors uppercase inline-flex items-center gap-2"
              >
                <span>EXPLORE MUSIC</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                to="/biography"
                className="px-6 py-3 rounded bg-black/70 hover:bg-neutral-900 text-white border border-white/25 hover:border-white/60 font-display tracking-widest text-xs sm:text-sm font-semibold transition-all uppercase inline-flex items-center gap-2 backdrop-blur-md"
              >
                <span>BIOGRAPHY</span>
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <div className="mt-12 md:mt-16 flex items-center gap-2 text-xs font-sans tracking-widest text-neutral-400">
            <span className="w-6 h-[1px] bg-neutral-600" />
            <span className="uppercase text-[11px]">SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 text-neutral-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ARTIST INTRODUCTION                                    */}
      {/* ========================================================= */}
      <section className="py-24 md:py-32 border-t border-white/10 bg-neutral-950">
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
                <div className="absolute bottom-4 left-4 right-4 text-xs text-neutral-400 font-sans">
                  {BIOGRAPHY_DATA.portrait.caption}
                </div>
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
      {/* 3. SELECTED MUSIC PREVIEW                                 */}
      {/* ========================================================= */}
      <section className="py-24 md:py-32 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <SectionHeading
              tag="DISCOGRAPHY & SCORES"
              title="SELECTED WORKS"
              subtitle="Feature film songs, original cinematic scores, and independent releases."
              className="mb-0"
            />
            <Link
              to="/music"
              className="inline-flex items-center gap-2 text-xs font-display tracking-widest text-neutral-300 hover:text-white uppercase shrink-0 py-2"
            >
              <span>VIEW ALL MUSIC</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {MUSIC_DATA.projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. EVENTS PREVIEW                                         */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 border-t border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase mb-3">
            CONCERT TOURS & SHOWCASES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-cinematic text-white uppercase mb-4">
            UPCOMING PERFORMANCES
          </h2>

          <div className="max-w-2xl mx-auto my-8 p-8 md:p-12 rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-md">
            <Calendar className="w-10 h-10 text-neutral-400 mx-auto mb-4" />
            <h3 className="font-display text-xl md:text-2xl font-bold tracking-wider text-white uppercase mb-2">
              {EVENTS_DATA.emptyStateNotice}
            </h3>
            <p className="text-sm text-neutral-400 font-sans leading-relaxed mb-6">
              {EVENTS_DATA.emptyStateDescription}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors"
            >
              <span>REQUEST CONCERT BOOKING</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. MENTALISM PREVIEW (COMING SOON)                        */}
      {/* ========================================================= */}
      <section className="py-24 md:py-32 border-t border-white/10 bg-black relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center relative z-10">
          <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white mb-6">
            <Eye className="w-5 h-5 text-neutral-300" />
          </div>

          <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase mb-3">
            STAGE ILLUSION & PSYCHOLOGICAL ART
          </span>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-cinematic text-white uppercase mb-4">
            MENTALISM
          </h2>

          <div className="inline-block px-5 py-2 rounded-full border border-white/20 bg-neutral-900 text-xs font-display tracking-widest text-white uppercase mb-6">
            COMING SOON
          </div>

          <p className="text-sm md:text-base text-neutral-400 font-sans max-w-xl leading-relaxed mb-8">
            A theatrical exploration of thought perception, telepathic illusion, and mind-reading performance art. Stay tuned for dates and tour announcements.
          </p>

          <Link
            to="/mentalism"
            className="inline-flex items-center gap-2 px-6 py-3 rounded border border-white/20 hover:border-white text-xs font-display tracking-widest text-white uppercase transition-all"
          >
            <span>LEARN MORE ABOUT MENTALISM</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. GALLERY PREVIEW                                        */}
      {/* ========================================================= */}
      <section className="py-24 md:py-32 border-t border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <SectionHeading
              tag="VISUAL ARCHIVE"
              title="STAGE & PORTRAIT GALLERY"
              subtitle="Moments captured across concerts, recording sessions, and live performance art."
              className="mb-0"
            />
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs font-display tracking-widest text-neutral-300 hover:text-white uppercase shrink-0 py-2"
            >
              <span>VIEW FULL GALLERY</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <GalleryGrid items={GALLERY_ITEMS.slice(0, 4)} enableFiltering={false} />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. CONTACT CTA BANNER                                     */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 border-t border-white/10 bg-black text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase mb-3">
            START A CONVERSATION
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-cinematic text-white uppercase mb-6">
            COLLABORATE WITH SUMESH KOOTTICKAL
          </h2>
          <p className="text-sm md:text-base text-neutral-400 font-sans max-w-xl mb-8 leading-relaxed">
            For film score enquiries, live concert bookings, corporate mentalism performances, and music production partnerships.
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
