import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const StickyContact: React.FC = () => {
  const location = useLocation();

  // On the contact page itself, we can hide or soften the sticky button so it's not redundant
  if (location.pathname === '/contact') {
    return null;
  }

  return (
    <aside
      aria-label="Contact shortcut"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-40"
    >
      <Link
        to="/contact"
        className="group flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 bg-black/90 hover:bg-white text-white hover:text-black border border-white/20 hover:border-white rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/70"
        aria-label="Go to contact page to enquire or book Sumesh Koottickal"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:bg-emerald-600 transition-colors" />
        <span className="font-display tracking-widest text-[11px] sm:text-xs md:text-sm font-semibold uppercase">
          LET'S TALK
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>
    </aside>
  );
};
