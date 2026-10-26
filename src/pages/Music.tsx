import { useEffect } from 'react';
import { HeroBanner } from '../components/HeroBanner';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { MUSIC_DATA } from '../data/music';
import { Disc3, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const Music: React.FC = () => {
  useEffect(() => {
    document.title = 'Music — Sumesh Koottickal | Music Director & Composer';
  }, []);

  return (
    <div className="w-full bg-black text-white">
      {/* Required Hero Banner */}
      <HeroBanner
        title="MUSIC"
        subtitle="Soundscapes crafted for feature cinema, studio releases, and energetic live keytar performance."
        category="DISCOGRAPHY & COMPOSITIONS"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        {/* ========================================================= */}
        {/* 1. FEATURED MUSIC SECTION                                 */}
        {/* ========================================================= */}
        <section className="mb-24">
          <SectionHeading
            tag="FEATURED RELEASE"
            title="LANDMARK COMPOSITION"
            subtitle="Highlighted cinematic work featuring legendary vocalists."
          />

          <div className="p-8 md:p-12 rounded-2xl bg-surface-card border border-white/15 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-sans tracking-wider text-neutral-300 uppercase">
                    {MUSIC_DATA.featuredTrack.project}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {MUSIC_DATA.featuredTrack.year}
                  </span>
                  <span className="text-xs text-neutral-400">
                    · {MUSIC_DATA.featuredTrack.genre}
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider text-white uppercase mb-4 leading-tight">
                  {MUSIC_DATA.featuredTrack.title}
                </h3>

                <p className="text-sm md:text-base text-neutral-300 font-sans leading-relaxed mb-6">
                  {MUSIC_DATA.featuredTrack.description}
                </p>

                {/* Credits details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs font-sans">
                  <div>
                    <span className="text-neutral-400 block mb-0.5">Composed By</span>
                    <span className="text-white font-medium">{MUSIC_DATA.featuredTrack.composedBy}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block mb-0.5">Vocals</span>
                    <span className="text-white font-medium">{MUSIC_DATA.featuredTrack.singers}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block mb-0.5">Lyrics</span>
                    <span className="text-white font-medium">{MUSIC_DATA.featuredTrack.lyrics}</span>
                  </div>
                </div>
              </div>

              {/* Vinyl / Audio Graphic Display */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-black/60 border border-white/10 text-center">
                <div className="relative w-36 h-36 rounded-full bg-neutral-900 border-4 border-neutral-800 flex items-center justify-center mb-6 shadow-inner">
                  <div className="w-12 h-12 rounded-full bg-neutral-950 border border-white/20 flex items-center justify-center">
                    <Disc3 className="w-6 h-6 text-white animate-spin-slow" />
                  </div>
                </div>
                <span className="text-xs font-display tracking-widest text-neutral-400 uppercase mb-2">
                  MALAYALAM FILM CLASSIC
                </span>
                <span className="text-xs text-neutral-400 font-sans">
                  Filmibeat & Public Record Verified
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. MUSIC PROJECTS SECTION                                 */}
        {/* ========================================================= */}
        <section className="mb-24 border-t border-white/10 pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <SectionHeading
              tag="PROJECT REPERTOIRE"
              title="MUSIC PROJECTS & RELEASES"
              subtitle="Explore official catalog projects and works in progress. Easily editable via src/data/music.ts."
              className="mb-0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {MUSIC_DATA.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. COMPOSITIONS & COLLABORATIONS SECTION                 */}
        {/* ========================================================= */}
        <section className="mb-24 border-t border-white/10 pt-20">
          <SectionHeading
            tag="ARTISTIC ENGAGEMENT"
            title="COMPOSITIONS & COLLABORATIONS"
            subtitle="Working alongside iconic Indian vocalists, lyricists, and visionary film directors."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {MUSIC_DATA.collaborations.map((collab, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-surface-card border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-widest text-neutral-400 block mb-2">
                    {collab.role}
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-wider text-white uppercase mb-1">
                    {collab.artist}
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans mb-4">
                    {collab.title}
                  </p>
                  <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                    {collab.significance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. VIDEO & AUDIO SECTION (NO AUTOPLAY)                   */}
        {/* ========================================================= */}
        <section className="mb-24 border-t border-white/10 pt-20">
          <SectionHeading
            tag="AUDITORY & VISUAL ARCHIVE"
            title="VIDEO & PERFORMANCE STREAMS"
            subtitle="Live stage recordings, keytar showcases, and musical sessions."
          />

          <div className="p-8 md:p-12 rounded-2xl bg-surface-card border border-white/10 text-center flex flex-col items-center">
            <YoutubeIcon className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-wider text-white uppercase mb-2">
              {MUSIC_DATA.videoSpotlight.title}
            </h3>
            <p className="text-sm text-neutral-300 font-sans max-w-xl leading-relaxed mb-6">
              {MUSIC_DATA.videoSpotlight.placeholderMessage}
            </p>

            <a
              href={MUSIC_DATA.videoSpotlight.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
            >
              <span>VISIT YOUTUBE CHANNEL</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. SELECTED WORKS SUMMARY GRID                            */}
        {/* ========================================================= */}
        <section className="border-t border-white/10 pt-20">
          <SectionHeading
            tag="AT A GLANCE"
            title="CATALOG INDEX"
            subtitle="Quick overview of verified releases and compositions."
          />

          <div className="overflow-x-auto rounded-xl border border-white/10 bg-neutral-950">
            <table className="w-full text-left text-sm font-sans" aria-label="Music catalog table">
              <thead className="bg-white/5 border-b border-white/10 text-xs font-display tracking-widest text-neutral-400 uppercase">
                <tr>
                  <th scope="col" className="px-6 py-4">Title</th>
                  <th scope="col" className="px-6 py-4">Category</th>
                  <th scope="col" className="px-6 py-4">Key Artists</th>
                  <th scope="col" className="px-6 py-4">Year</th>
                  <th scope="col" className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-neutral-300">
                {MUSIC_DATA.projects.map((proj) => (
                  <tr key={proj.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-medium text-white font-display tracking-wider uppercase">
                      {proj.title}
                    </td>
                    <td className="px-6 py-4 text-xs text-neutral-400">
                      {proj.category}
                    </td>
                    <td className="px-6 py-4 text-xs">
                      {proj.credits.singers || proj.credits.musicDirector}
                    </td>
                    <td className="px-6 py-4 font-mono text-xs text-neutral-400">
                      {proj.year}
                    </td>
                    <td className="px-6 py-4">
                      {proj.isVerified ? (
                        <span className="inline-block px-2 py-0.5 text-[10px] rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-sans">
                          Verified
                        </span>
                      ) : (
                        <span className="inline-block px-2 py-0.5 text-[10px] rounded bg-neutral-800 text-neutral-400 border border-neutral-700 font-sans">
                          Editable
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-display tracking-widest text-neutral-300 hover:text-white uppercase"
            >
              <span>INTERESTED IN COMMISSIONING A SCORE OR THEME? ENQUIRE HERE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
