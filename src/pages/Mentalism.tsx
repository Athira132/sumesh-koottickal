import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Mentalism: React.FC = () => {
  useEffect(() => {
    document.title = 'Mentalism — Sumesh Koottickal | Coming Soon';
  }, []);

  return (
    <main
      className="w-full min-h-[85vh] bg-black text-white flex flex-col items-center justify-center px-6 py-32 text-center"
      aria-label="Mentalism Coming Soon Page"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto flex flex-col items-center"
      >
        {/* Subtle Icon */}
        <div className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white mb-8">
          <Eye className="w-6 h-6 text-neutral-300" />
        </div>

        {/* Primary Page Heading */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-cinematic text-white uppercase">
          MENTALISM
        </h1>

        {/* Directly Underneath: COMING SOON */}
        <div className="mt-6 md:mt-8 inline-block">
          <span className="font-display text-xl sm:text-2xl md:text-3xl tracking-widest text-neutral-400 uppercase font-semibold">
            COMING SOON
          </span>
        </div>

        {/* Generous whitespace divider */}
        <div className="w-16 h-[1px] bg-white/20 my-10 md:my-14" />

        <p className="text-xs md:text-sm text-neutral-400 font-sans tracking-widest uppercase max-w-md leading-relaxed mb-10">
          AN ENIGMATIC FUSION OF AUDITORY ARTISTRY AND MIND ILLUSION.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black font-display tracking-widest text-xs uppercase font-semibold transition-all"
        >
          <span>ENQUIRE FOR PREVIEW SHOWS</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </motion.div>
    </main>
  );
};
