import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ARTIST_DATA } from '../data/artist';

export const NAV_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'BIOGRAPHY', path: '/biography' },
  { name: 'MUSIC', path: '/music' },
  { name: 'EVENTS', path: '/events' },
  { name: 'MENTALISM', path: '/mentalism' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'CONTACT', path: '/contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            to="/"
            className="group flex flex-col focus:outline-none focus:ring-1 focus:ring-white/40 rounded"
            aria-label="Sumesh Koottickal Homepage"
          >
            <span className="font-display text-xl md:text-2xl font-bold tracking-cinematic text-white group-hover:text-neutral-300 transition-colors">
              {ARTIST_DATA.name}
            </span>
            <span className="text-[10px] md:text-xs text-neutral-400 font-sans tracking-widest hidden sm:block">
              {ARTIST_DATA.descriptor}
            </span>
          </Link>

          {/* Desktop revealed horizontal menu when open, or hamburger toggle */}
          <div className="flex items-center gap-6">
            {/* Hamburger Button (Desktop & Mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center gap-3 px-3.5 py-2 rounded-full border border-white/15 bg-black/60 hover:border-white/40 hover:bg-neutral-900/80 transition-all focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              <span className="text-xs font-display tracking-widest text-neutral-300 group-hover:text-white uppercase hidden sm:inline-block">
                {isOpen ? 'CLOSE' : 'MENU'}
              </span>
              <div className="text-white relative w-5 h-5 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>
        </div>

        {/* Desktop Revealed Horizontal Bar Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
            >
              <nav
                className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between"
                aria-label="Main Desktop Navigation"
              >
                <div className="flex items-center gap-8 xl:gap-10">
                  {NAV_LINKS.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`font-display text-sm xl:text-base tracking-widest relative py-1 transition-colors ${
                          isActive
                            ? 'text-white font-bold'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        {link.name}
                        {isActive && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="absolute -bottom-1 left-0 w-full h-[2px] bg-white"
                          />
                        )}
                      </Link>
                    );
                  })}
                </div>

                <div className="flex items-center gap-4 text-xs font-sans text-neutral-400">
                  <a
                    href={`tel:${ARTIST_DATA.contact.phone}`}
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>{ARTIST_DATA.contact.displayPhone}</span>
                  </a>
                  <span className="text-white/20">|</span>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-1 text-white hover:underline uppercase font-display tracking-widest"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer / Full-Screen Overlay Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-12 px-8"
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`font-display text-3xl sm:text-4xl tracking-wider block py-1.5 transition-colors ${
                        isActive
                          ? 'text-white font-bold border-l-2 border-white pl-4'
                          : 'text-neutral-400 hover:text-white pl-0'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile Navigation Footer Info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="pt-6 border-t border-white/10 flex flex-col gap-3 text-sm text-neutral-400"
            >
              <div className="flex items-center justify-between">
                <span>Direct Contact:</span>
                <a
                  href={`tel:${ARTIST_DATA.contact.phone}`}
                  className="text-white hover:underline"
                >
                  {ARTIST_DATA.contact.displayPhone}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span>Email:</span>
                <a
                  href={`mailto:${ARTIST_DATA.contact.email}`}
                  className="text-white hover:underline"
                >
                  {ARTIST_DATA.contact.email}
                </a>
              </div>
              <div className="flex gap-4 pt-2 text-xs font-display tracking-widest text-neutral-300">
                <a
                  href={ARTIST_DATA.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  INSTAGRAM
                </a>
                <span>·</span>
                <a
                  href={ARTIST_DATA.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  YOUTUBE
                </a>
                <span>·</span>
                <a
                  href={ARTIST_DATA.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  FACEBOOK
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
