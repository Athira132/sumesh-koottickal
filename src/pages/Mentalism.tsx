import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { SEO_DATA, getPersonSchema, getBreadcrumbSchema } from '../data/seo';

export const Mentalism: React.FC = () => {
  return (
    <div className="w-full bg-black text-white select-none">
      {/* Dynamic Search Engine Optimization & Structured Data */}
      <SEO
        title={SEO_DATA.mentalism.title}
        description={SEO_DATA.mentalism.description}
        canonicalPath={SEO_DATA.mentalism.canonicalPath}
        schema={[
          getPersonSchema(),
          getBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Mentalism', path: '/mentalism' },
          ]),
        ]}
      />
      {/* ========================================================= */}
      {/* 1. DEDICATED HERO BANNER (FIRST SECTION VISITORS SEE)     */}
      {/* ========================================================= */}
      <section
        className="relative w-full h-[40vh] min-h-[300px] md:h-[48vh] md:min-h-[380px] flex items-center justify-center overflow-hidden border-b border-white/10"
        aria-label="Mentalism Dedicated Hero Banner"
      >
        {/* Mysterious, Cinematic Atmosphere (No Face, No Eye Icon, No Homepage Hero Image) */}
        <div className="absolute inset-0 z-0 bg-neutral-950">
          {/* Subtle Ambient Radial Lighting & Stage Vignette */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                'radial-gradient(ellipse at 50% 40%, rgba(255, 255, 255, 0.16) 0%, rgba(20, 20, 20, 0.75) 60%, #000 100%)',
            }}
          />

          {/* Narrow Overhead Theatrical Mystery Spotlight Beam */}
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] md:w-[640px] h-[120%] pointer-events-none opacity-30 mix-blend-screen"
            style={{
              background:
                'conic-gradient(from 180deg at 50% 0%, rgba(255,255,255,0.4) 0deg, rgba(255,255,255,0.06) 16deg, transparent 34deg, transparent 326deg, rgba(255,255,255,0.06) 344deg, rgba(255,255,255,0.4) 360deg)',
              filter: 'blur(32px)',
            }}
          />

          {/* Deep Vignette Edge Shadows */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none" />
        </div>

        {/* Hero Title: MENTALISM */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider sm:tracking-cinematic text-white uppercase drop-shadow-2xl"
          >
            <span className="sr-only">Sumesh Koottickal — </span>
            MENTALISM
          </motion.h1>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. BODY SECTION (ONLY SHORT MESSAGE: SOMETHING BIG IS COMING.) */}
      {/* ========================================================= */}
      <section
        className="w-full min-h-[48vh] flex flex-col items-center justify-center px-4 sm:px-6 py-20 md:py-36 text-center"
        aria-label="Mentalism Announcement"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider sm:tracking-cinematic text-white uppercase leading-tight"
          >
            SOMETHING BIG IS COMING.
          </motion.h2>
        </div>
      </section>
    </div>
  );
};
