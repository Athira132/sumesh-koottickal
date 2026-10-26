import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeroBanner } from '../components/HeroBanner';
import { SectionHeading } from '../components/SectionHeading';
import { BIOGRAPHY_DATA } from '../data/biography';
import { RESEARCH_REFERENCES } from '../data/references';
import { ArrowUpRight, Compass, ExternalLink } from 'lucide-react';

export const Biography: React.FC = () => {
  useEffect(() => {
    document.title = 'Biography — Sumesh Koottickal | Music Director · Performer · Mentalist';
  }, []);

  return (
    <div className="w-full bg-black text-white">
      {/* Required Hero Banner */}
      <HeroBanner
        title="BIOGRAPHY"
        subtitle="The journey of an artist uniting cinematic soundscapes, live stage virtuosity, and mentalism."
        category="ARTIST PROFILE"
      />

      {/* Main Editorial Biography Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Top Editorial Row: Portrait & Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
            {/* Portrait Area */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 group aspect-[4/5] shadow-2xl">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-neutral-400 font-sans">
                  {BIOGRAPHY_DATA.portrait.caption}
                </div>
              </div>
            </div>

            {/* Biography Text Area */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase mb-3">
                ARTISTIC PHILOSOPHY
              </span>
              
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white uppercase leading-snug mb-8">
                {BIOGRAPHY_DATA.headline}
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                {BIOGRAPHY_DATA.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Direct Page Links Required */}
              <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-4">
                <Link
                  to="/music"
                  className="px-6 py-3 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
                >
                  <span>EXPLORE MUSIC WORKS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-3 rounded border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black font-display tracking-widest text-xs font-bold uppercase transition-all inline-flex items-center gap-2"
                >
                  <span>CONTACT ARTIST</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Three Core Disciplines */}
          <div className="py-16 border-t border-white/10">
            <SectionHeading
              tag="ARTISTIC PILLARS"
              title="AREAS OF PRACTICE"
              subtitle="Sumesh Koottickal's creative identity spans three interconnected creative disciplines."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BIOGRAPHY_DATA.disciplines.map((item, index) => (
                <div
                  key={index}
                  className="p-8 rounded-xl bg-surface-card border border-white/10 hover:border-white/25 transition-all"
                >
                  <span className="text-xs font-mono text-neutral-400 mb-4 block">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-wider text-white uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Career & Achievements Section */}
          <div className="py-16 border-t border-white/10">
            <SectionHeading
              tag="CHRONOLOGY"
              title="CAREER & ACHIEVEMENTS"
              subtitle="Verifiable artistic milestones in music direction, recordings, and performance."
            />

            <div className="space-y-6">
              {BIOGRAPHY_DATA.careerMilestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className="p-6 md:p-8 rounded-xl bg-surface-card border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/25 transition-all"
                >
                  <div className="flex items-start md:items-center gap-6">
                    <span className="w-16 h-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-display text-lg text-white font-bold shrink-0">
                      {milestone.year}
                    </span>
                    <div>
                      <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase block mb-1">
                        {milestone.role}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl font-bold tracking-wider text-white uppercase">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-neutral-300 font-sans mt-2 max-w-3xl leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Verified Works Section */}
          <div className="py-16 border-t border-white/10">
            <SectionHeading
              tag="SELECTED WORKS"
              title="NOTABLE COMPOSITIONS"
              subtitle="Verified highlights from Malayalam cinema releases and studio recordings."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BIOGRAPHY_DATA.verifiedWorks.map((work, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-neutral-950 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs text-neutral-400 font-sans">
                      <span className="uppercase tracking-widest">{work.category}</span>
                      {work.year && <span className="font-mono">{work.year}</span>}
                    </div>
                    <h3 className="font-display text-lg font-bold tracking-wider text-white uppercase mb-2">
                      {work.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                      {work.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Source Documentation Reference Area */}
          <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-neutral-950/70">
            <div className="flex items-center gap-2 mb-4 text-xs font-sans tracking-widest text-neutral-400 uppercase">
              <Compass className="w-4 h-4 text-neutral-400" />
              <span>PUBLIC VERIFICATION LEADS & SOURCE REFERENCES</span>
            </div>
            <p className="text-xs text-neutral-400 font-sans mb-6">
              In accordance with project integrity standards, biography content is curated strictly from verifiable public profiles and music registries. You can inspect or update these references anytime in <code>src/data/references.ts</code>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {RESEARCH_REFERENCES.map((ref) => (
                <a
                  key={ref.id}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-black/60 border border-white/10 hover:border-white/30 text-xs text-neutral-300 hover:text-white transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between font-display tracking-wider text-white uppercase mb-1">
                    <span>{ref.platform}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </div>
                  <p className="text-[11px] text-neutral-400 font-sans line-clamp-2">
                    {ref.verifiedNotes}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
