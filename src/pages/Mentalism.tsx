import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Mentalism: React.FC = () => {
  useEffect(() => {
    document.title = 'Mentalism — Sumesh Koottickal | Something Extraordinary Is Coming';
  }, []);

  return (
    <main
      className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-32 overflow-hidden select-none"
      aria-label="Mentalism Announcement"
    >
      {/* ========================================================= */}
      {/* THEATRICAL STAGE ATMOSPHERE (MONOCHROME LIGHTING & HAZE)   */}
      {/* ========================================================= */}
      {/* Deep dark backdrop with vignette */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      {/* Narrow Overhead Theatrical Spotlight Beam */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[320px] sm:w-[480px] md:w-[620px] h-[90vh] pointer-events-none opacity-40 mix-blend-screen"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 0%, rgba(255,255,255,0.35) 0deg, rgba(255,255,255,0.08) 18deg, transparent 38deg, transparent 322deg, rgba(255,255,255,0.08) 342deg, rgba(255,255,255,0.35) 360deg)',
          filter: 'blur(28px)',
        }}
      />

      {/* Atmospheric Stage Haze Floor Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[340px] pointer-events-none opacity-25"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.05) 45%, transparent 75%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Abstract Stage Silhouette Backdrop Illusion */}
      <div
        aria-hidden="true"
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-72 sm:h-96 pointer-events-none opacity-20 flex items-end justify-center"
      >
        <div className="w-24 sm:w-32 h-64 sm:h-80 bg-neutral-900 rounded-t-full filter blur-xl transform scale-y-110" />
      </div>

      {/* Ambient Deep Vignette Edge Shadows */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />

      {/* ========================================================= */}
      {/* PROMINENT MESSAGE CONTENT (NO EYE ICONS)                  */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Prominent Message 1: SOMETHING EXTRAORDINARY IS COMING. */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-cinematic text-white uppercase leading-[1.05] drop-shadow-2xl">
            SOMETHING EXTRAORDINARY
            <br />
            <span className="text-neutral-300">IS COMING.</span>
          </h1>

          {/* Minimal Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-20 sm:w-28 h-[1px] bg-white/30 my-8 sm:my-12 origin-center"
          />

          {/* Prominent Message 2: MENTALISM — COMING SOON. */}
          <h2 className="font-display text-base sm:text-xl md:text-2xl lg:text-3xl tracking-[0.25em] text-neutral-200 uppercase font-medium">
            MENTALISM — COMING SOON.
          </h2>

          {/* Contact Enquiry Action */}
          <div className="mt-12 sm:mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded border border-white/20 bg-black/60 hover:bg-white text-white hover:text-black font-display tracking-widest text-xs font-semibold uppercase transition-all duration-300 backdrop-blur-md shadow-2xl"
            >
              <span>ENQUIRE FOR PREVIEW SHOWS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};
