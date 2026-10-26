import { Link } from 'react-router-dom';
import { ARTIST_DATA } from '../data/artist';
import { NAV_LINKS } from './Header';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-neutral-900 text-white pt-16 md:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          {/* Identity Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-block group focus:outline-none">
                <h2 className="font-display text-2xl md:text-3xl font-bold tracking-cinematic text-white group-hover:text-neutral-300 transition-colors">
                  {ARTIST_DATA.name}
                </h2>
                <p className="text-xs tracking-widest text-neutral-400 mt-1 uppercase font-sans">
                  {ARTIST_DATA.descriptor}
                </p>
              </Link>
              <p className="mt-6 text-sm text-neutral-400 max-w-sm leading-relaxed">
                {ARTIST_DATA.tagline}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-900/80 text-xs text-neutral-400 font-sans">
              <p className="font-semibold text-neutral-300 mb-1">Studio & Base:</p>
              <p>{ARTIST_DATA.location.fullFormatted}</p>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm tracking-widest text-neutral-400 uppercase mb-6">
              NAVIGATION
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="font-display text-sm tracking-wider text-neutral-400 hover:text-white transition-colors block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4">
            <h3 className="font-display text-sm tracking-widest text-neutral-400 uppercase mb-6">
              CONNECT & BOOKINGS
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <span className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                  Email
                </span>
                <a
                  href={`mailto:${ARTIST_DATA.contact.email}`}
                  className="text-white hover:underline transition-all block break-all font-mono text-sm"
                >
                  {ARTIST_DATA.contact.email}
                </a>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                  Phone
                </span>
                <a
                  href={`tel:${ARTIST_DATA.contact.phone}`}
                  className="text-white hover:underline transition-all block font-mono text-sm"
                >
                  {ARTIST_DATA.contact.displayPhone}
                </a>
              </div>

              <div className="pt-2">
                <span className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                  Social Channels
                </span>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-display tracking-widest">
                  <a
                    href={ARTIST_DATA.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>INSTAGRAM</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                  <a
                    href={ARTIST_DATA.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>YOUTUBE</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                  <a
                    href={ARTIST_DATA.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>FACEBOOK</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                  <a
                    href={ARTIST_DATA.socials.vcard}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>VCARD</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {currentYear} {ARTIST_DATA.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Official Artist Portfolio</span>
            <span>Kerala, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
