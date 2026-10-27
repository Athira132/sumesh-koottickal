import { HeroBanner } from '../components/HeroBanner';
import { ProjectCard } from '../components/ProjectCard';
import { MUSIC_PAGE_DATA } from '../data/music';
import { SEO } from '../components/SEO';
import { SEO_DATA, getPersonSchema, getBreadcrumbSchema } from '../data/seo';
import { Music as MusicIcon, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Music: React.FC = () => {
  const hasProjects = MUSIC_PAGE_DATA.projects.length > 0;

  return (
    <div className="w-full bg-black text-white">
      {/* Dynamic Search Engine Optimization & Structured Data */}
      <SEO
        title={SEO_DATA.music.title}
        description={SEO_DATA.music.description}
        canonicalPath={SEO_DATA.music.canonicalPath}
        schema={[
          getPersonSchema(),
          getBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Music', path: '/music' },
          ]),
        ]}
      />

      {/* Standard Reusable Hero Banner */}
      <HeroBanner title={MUSIC_PAGE_DATA.heroTitle} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* ========================================================= */}
        {/* 1. CLEAN INTRODUCTION SECTION                             */}
        {/* ========================================================= */}
        <section className="mb-20 md:mb-28 max-w-3xl mx-auto text-center">
          <span className="text-[11px] font-sans tracking-[0.25em] text-neutral-400 uppercase block mb-3">
            ARTISTIC REPERTOIRE
          </span>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-cinematic text-white uppercase mb-6 leading-tight">
            {MUSIC_PAGE_DATA.introHeading}
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
            {MUSIC_PAGE_DATA.introDescription}
          </p>
        </section>

        {/* ========================================================= */}
        {/* 2. MUSIC PROJECTS GRID (SMALL CHARCOAL CONTENT BLOCKS)    */}
        {/* ========================================================= */}
        <section aria-labelledby="projects-heading" className="border-t border-white/10 pt-16 md:pt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3
              id="projects-heading"
              className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white uppercase mb-2"
            >
              SELECTED PROJECTS & COMPOSITIONS
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans">
              Feature cinema songs, film background scores, and independent releases.
            </p>
          </div>

          {hasProjects ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {MUSIC_PAGE_DATA.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            /* Restrained empty state */
            <div className="max-w-md mx-auto p-8 rounded-xl bg-neutral-950 border border-white/10 text-center">
              <MusicIcon className="w-8 h-8 text-neutral-500 mx-auto mb-3" />
              <p className="text-xs text-neutral-400 font-sans">
                No music projects have been added yet. Update <code>src/data/music.ts</code> to display releases.
              </p>
            </div>
          )}
        </section>

        {/* Enquiries CTA */}
        <div className="mt-20 pt-16 border-t border-white/10 text-center">
          <p className="text-xs font-sans tracking-widest text-neutral-400 uppercase mb-4">
            COMMISSION SCORES & LIVE CONCERTS
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors shadow-lg"
          >
            <span>COMMISSION OR BOOK AN ENQUIRY</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Centralized config instructions note */}
        <div className="mt-20 p-6 rounded-xl bg-neutral-950 border border-white/10 text-center max-w-xl mx-auto">
          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            Music projects, film details, streaming links, and YouTube URLs can be managed in <code>src/data/music.ts</code>.
          </p>
        </div>
      </div>
    </div>
  );
};
