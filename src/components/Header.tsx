import React, { useState, useEffect } from 'react';
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

// Crisp, lightweight official SVG icons for social platforms
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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

  // Lock background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Header Bar */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-3 sm:py-4'
            : 'bg-black/60 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none py-3.5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Artist Wordmark */}
          <Link
            to="/"
            className="group flex flex-col focus:outline-none focus:ring-1 focus:ring-white/40 rounded shrink-0 mr-2"
            aria-label="Sumesh Koottickal Homepage"
          >
            <span className="font-display text-sm sm:text-lg md:text-2xl font-bold tracking-wider sm:tracking-cinematic text-white group-hover:text-neutral-300 transition-colors whitespace-nowrap">
              {ARTIST_DATA.name}
            </span>
            <span className="text-[10px] md:text-xs text-neutral-400 font-sans tracking-widest hidden sm:block">
              {ARTIST_DATA.descriptor}
            </span>
          </Link>

          {/* Right Controls: Social Icons & Hamburger */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 shrink-0">
            {/* Social Media Icons (visible on tablet and desktop, drawer provides full access on mobile) */}
            <div className="hidden sm:flex items-center gap-1.5 sm:gap-2.5">
              <a
                href={ARTIST_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 bg-black/60 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white"
                aria-label="Visit Sumesh Koottickal Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={ARTIST_DATA.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 bg-black/60 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white"
                aria-label="Visit Sumesh Koottickal YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={ARTIST_DATA.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 bg-black/60 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white"
                aria-label="Visit Sumesh Koottickal Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Hamburger Toggle Button (Desktop & Mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 bg-black/80 hover:border-white/50 hover:bg-neutral-900 transition-all focus:outline-none focus:ring-2 focus:ring-white/60 cursor-pointer shrink-0"
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
                      transition={{ duration: 0.18 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* VERTICAL NAVIGATION DRAWER ON THE LEFT                     */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay (Click outside to close) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Left-Side Vertical Navigation Drawer */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 bottom-0 z-50 w-full max-w-[85vw] sm:max-w-sm sm:w-96 bg-black border-r border-white/15 shadow-2xl flex flex-col justify-between p-5 sm:p-8 overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
            >
              <div>
                {/* Drawer Header with Close Button */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                  <div>
                    <span className="font-display text-lg font-bold tracking-wider text-white uppercase block">
                      {ARTIST_DATA.name}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-sans tracking-widest uppercase">
                      PORTFOLIO NAVIGATION
                    </span>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full border border-white/15 bg-neutral-900 hover:bg-white hover:text-black text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white"
                    aria-label="Close navigation panel (Escape)"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Vertical Links in Single Column (Exact required order) */}
                <nav className="flex flex-col space-y-2" aria-label="Vertical navigation list">
                  {NAV_LINKS.map((link, idx) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * idx, duration: 0.25 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`group flex items-center py-3.5 px-3 rounded-lg border-b border-white/5 transition-all ${
                            isActive
                              ? 'text-white font-bold bg-white/5 border-l-2 border-white pl-4'
                              : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60 pl-3'
                          }`}
                        >
                          <span className="font-display text-xl sm:text-2xl tracking-wider uppercase">
                            {link.name}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom: Social Channels & Direct Contact */}
              <div className="pt-8 border-t border-white/10 mt-8 space-y-5">
                <div>
                  <span className="text-[10px] font-sans tracking-widest text-neutral-400 uppercase block mb-3 font-semibold">
                    CONNECT DIRECTLY
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={ARTIST_DATA.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-white/15 bg-neutral-900 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all"
                      aria-label="Sumesh Koottickal Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={ARTIST_DATA.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-white/15 bg-neutral-900 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all"
                      aria-label="Sumesh Koottickal YouTube"
                    >
                      <YoutubeIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={ARTIST_DATA.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-white/15 bg-neutral-900 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all"
                      aria-label="Sumesh Koottickal Facebook"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={ARTIST_DATA.socials.vcard}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full border border-white/15 bg-neutral-900 hover:bg-white hover:text-black text-[11px] font-display tracking-widest text-white transition-all inline-flex items-center gap-1"
                      aria-label="Digital vCard"
                    >
                      <span>VCARD</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="text-xs text-neutral-400 font-sans space-y-1">
                  <p>
                    <a href={`tel:${ARTIST_DATA.contact.phone}`} className="hover:text-white transition-colors">
                      {ARTIST_DATA.contact.displayPhone}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${ARTIST_DATA.contact.email}`} className="hover:text-white transition-colors">
                      {ARTIST_DATA.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
