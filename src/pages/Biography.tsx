import React from 'react';
import { Link } from 'react-router-dom';
import { HeroBanner } from '../components/HeroBanner';
import { SectionHeading } from '../components/SectionHeading';
import { BIOGRAPHY_DATA } from '../data/biography';
import { RESEARCH_REFERENCES } from '../data/references';
import { SEO } from '../components/SEO';
import { SEO_DATA, getProfilePageSchema, getBreadcrumbSchema } from '../data/seo';
import {
  ArrowUpRight,
  Compass,
  ExternalLink,
  Award,
  Music,
  CheckCircle2,
  Ship
} from 'lucide-react';

export const Biography: React.FC = () => {
  return (
    <div className="w-full bg-black text-white">
      {/* Dynamic Search Engine Optimization & Structured Data */}
      <SEO
        title={SEO_DATA.biography.title}
        description={SEO_DATA.biography.description}
        canonicalPath={SEO_DATA.biography.canonicalPath}
        schema={[
          getProfilePageSchema('/biography', 'Biography'),
          getBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Biography', path: '/biography' },
          ]),
        ]}
        ogType="profile"
      />

      {/* Standard Reusable Hero Banner */}
      <HeroBanner title="BIOGRAPHY" />

      {/* Main Editorial Biography Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-12">
          {/* Top Editorial Row: Portrait & Professional Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16 md:mb-24">
            {/* Portrait Area */}
            <div className="lg:col-span-5">
              <div className="relative lg:sticky lg:top-28 rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 group aspect-[4/5] shadow-2xl max-w-md mx-auto lg:max-w-none">
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
                <div className="absolute bottom-4 left-4 right-4 text-xs text-neutral-300 font-sans font-medium">
                  {BIOGRAPHY_DATA.portrait.caption}
                </div>
              </div>
            </div>

            {/* Biography Text Area */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase mb-2">
                ARTIST PROFILE
              </span>

              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white uppercase leading-tight mb-2">
                {BIOGRAPHY_DATA.name}
              </h1>

              <p className="font-display text-sm sm:text-lg text-neutral-300 font-semibold uppercase tracking-wider mb-4">
                {BIOGRAPHY_DATA.professionalTitle}
              </p>

              <p className="text-base sm:text-lg text-white font-sans leading-relaxed mb-6 font-medium bg-neutral-900/60 p-4 sm:p-5 rounded-xl border border-white/10">
                {BIOGRAPHY_DATA.shortIntro}
              </p>

              <h2 className="font-display text-lg sm:text-2xl font-bold tracking-wide text-white uppercase leading-snug mb-4">
                {BIOGRAPHY_DATA.headline}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                {BIOGRAPHY_DATA.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Career Background Highlights */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-xs font-sans tracking-widest text-neutral-400 uppercase mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>CAREER BACKGROUND & FACTS</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-neutral-300 font-sans">
                  {BIOGRAPHY_DATA.careerBackgroundFacts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-neutral-950 p-3 rounded-lg border border-white/5">
                      <span className="text-neutral-500 font-mono mt-0.5">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Page Action Links */}
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap items-center gap-3 sm:gap-4">
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

          {/* ========================================================= */}
          {/* SECTION 1: SELECTED FILM MUSIC                            */}
          {/* ========================================================= */}
          <div className="py-14 sm:py-20 border-t border-white/10">
            <SectionHeading
              tag="CINEMATIC REPERTOIRE"
              title="SELECTED FILM MUSIC"
              subtitle="Feature film soundtracks, background scores, and original compositions for Malayalam cinema."
            />

            {/* Consistent grid: Exactly 2 images per row on mobile, 4 on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {BIOGRAPHY_DATA.selectedFilmMusic.map((film) => (
                <div
                  key={film.id}
                  className="group rounded-xl overflow-hidden bg-neutral-950 border border-white/10 hover:border-white/30 transition-all flex flex-col"
                >
                  <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                    <img
                      src={film.image}
                      alt={`${film.title} film music poster`}
                      onError={(e) => {
                        if (e.currentTarget.src !== film.fallbackImage) {
                          e.currentTarget.src = film.fallbackImage;
                        }
                      }}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {film.year && (
                      <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-mono text-white border border-white/15">
                        {film.year}
                      </span>
                    )}
                  </div>
                  <div className="p-3.5 sm:p-4 flex flex-col flex-grow">
                    <h4 className="font-display text-sm sm:text-base font-bold tracking-wider text-white uppercase mb-1">
                      {film.title}
                    </h4>
                    <span className="text-[10px] sm:text-xs font-sans tracking-widest text-neutral-400 uppercase mb-2">
                      {film.role}
                    </span>
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed line-clamp-3">
                      {film.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* SECTION 2: IMPORTANT COMPOSITIONS & PROJECTS              */}
          {/* ========================================================= */}
          <div className="py-14 sm:py-20 border-t border-white/10">
            <SectionHeading
              tag="CAREER HIGHLIGHTS"
              title="IMPORTANT COMPOSITIONS & PROJECTS"
              subtitle="Landmark sports theme anthems, viral compositions, and high-impact musical commissions."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BIOGRAPHY_DATA.majorProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl overflow-hidden bg-surface-card border border-white/10 hover:border-white/25 transition-all flex flex-col"
                >
                  <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={(e) => {
                        if (e.currentTarget.src !== project.fallbackImage) {
                          e.currentTarget.src = project.fallbackImage;
                        }
                      }}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    {project.note && (
                      <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-black/85 backdrop-blur-sm text-[10px] font-sans font-semibold text-white border border-white/20">
                        {project.note}
                      </span>
                    )}
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <span className="text-[10px] font-sans tracking-widest text-neutral-400 uppercase mb-1">
                      {project.role}
                    </span>
                    <h4 className="font-display text-lg sm:text-xl font-bold tracking-wider text-white uppercase mb-3">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* SECTION 3: AWARDS & RECOGNITION (SINGLE AWARDS SECTION)    */}
          {/* ========================================================= */}
          <div className="py-14 sm:py-20 border-t border-white/10">
            <SectionHeading
              tag="HONORS & FELICITATIONS"
              title="AWARDS & RECOGNITION"
              subtitle="Industry honors recognizing contributions to music direction, cinematic scoring, and performance art."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BIOGRAPHY_DATA.awardsAndRecognition.map((award) => (
                <div
                  key={award.id}
                  className="rounded-xl overflow-hidden bg-surface-card border border-white/10 hover:border-white/25 transition-all flex flex-col"
                >
                  <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                    <img
                      src={award.image}
                      alt={`${award.name} ceremony`}
                      onError={(e) => {
                        if (e.currentTarget.src !== award.fallbackImage) {
                          e.currentTarget.src = award.fallbackImage;
                        }
                      }}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-white text-black font-display font-bold text-xs tracking-wider">
                      {award.year}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-2 text-neutral-400">
                      <Award className="w-4 h-4" />
                      <span className="text-xs font-mono">{award.year} OFFICIAL AWARD</span>
                    </div>
                    <h4 className="font-display text-lg sm:text-xl font-bold tracking-wider text-white uppercase mb-2">
                      {award.name}
                    </h4>
                    {award.presentedBy && (
                      <p className="text-xs font-sans text-neutral-300 font-medium mb-2">
                        Presented by: {award.presentedBy}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                      {award.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* SECTION 4: LIVE PERFORMANCES & APPEARANCES                */}
          {/* ========================================================= */}
          <div className="py-14 sm:py-20 border-t border-white/10">
            <SectionHeading
              tag="INTERNATIONAL & ARENA STAGES"
              title="LIVE PERFORMANCES & APPEARANCES"
              subtitle="Keytar fusion showcases, state dignitary appearances, and high-profile corporate award nights."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BIOGRAPHY_DATA.livePerformances.map((perf) => (
                <div
                  key={perf.id}
                  className="rounded-xl overflow-hidden bg-surface-card border border-white/10 hover:border-white/25 transition-all flex flex-col"
                >
                  <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                    <img
                      src={perf.image}
                      alt={perf.event}
                      onError={(e) => {
                        if (e.currentTarget.src !== perf.fallbackImage) {
                          e.currentTarget.src = perf.fallbackImage;
                        }
                      }}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <span className="text-[10px] font-sans tracking-widest text-neutral-400 uppercase mb-1">
                      {perf.role}
                    </span>
                    <h4 className="font-display text-lg sm:text-xl font-bold tracking-wider text-white uppercase mb-2">
                      {perf.event}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                      {perf.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* SECTION 5: CLASSIC IMPERIAL CRUISE & THEEVRA BAND         */}
          {/* ========================================================= */}
          <div className="py-14 sm:py-20 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Classic Imperial Cruise Card */}
              <div className="p-6 sm:p-8 rounded-xl bg-surface-card border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-sans tracking-widest text-neutral-400 uppercase mb-3">
                    <Ship className="w-4 h-4 text-white" />
                    <span>MARITIME RESIDENCY</span>
                  </div>
                  <h4 className="font-display text-2xl font-bold tracking-wider text-white uppercase mb-3">
                    {BIOGRAPHY_DATA.classicCruise.title}
                  </h4>
                  <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-4">
                    {BIOGRAPHY_DATA.classicCruise.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                  <span>Commenced: {BIOGRAPHY_DATA.classicCruise.startDate}</span>
                  <span className="font-mono text-white">ACTIVE ARTIST</span>
                </div>
              </div>

              {/* Theevra Live Band Card */}
              <div className="p-6 sm:p-8 rounded-xl bg-surface-card border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-sans tracking-widest text-neutral-400 uppercase mb-3">
                    <Music className="w-4 h-4 text-white" />
                    <span>LIVE FUSION ENSEMBLE</span>
                  </div>
                  <h4 className="font-display text-2xl font-bold tracking-wider text-white uppercase mb-3">
                    {BIOGRAPHY_DATA.theevraBand.name}
                  </h4>
                  <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-4">
                    {BIOGRAPHY_DATA.theevraBand.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                  <span>Ensemble Collaborations</span>
                  <span className="font-mono text-white">LIVE BAND</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* SECTION 6: CAREER TIMELINE                                */}
          {/* ========================================================= */}
          <div className="py-14 sm:py-20 border-t border-white/10">
            <SectionHeading
              tag="CHRONOLOGY"
              title="CAREER TIMELINE"
              subtitle="Milestones charting Sumesh Koottickal's professional trajectory from 2006 to present."
            />

            <div className="relative border-l border-white/15 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8 sm:space-y-10">
              {BIOGRAPHY_DATA.careerMilestones.map((milestone, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-4 border-black" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-1">
                    <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-widest">
                      {milestone.year}
                    </span>
                    <span className="text-[11px] font-sans tracking-widest text-neutral-400 uppercase">
                      {milestone.role}
                    </span>
                  </div>

                  <h4 className="font-display text-base sm:text-lg font-bold tracking-wider text-white uppercase mb-1">
                    {milestone.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed max-w-3xl">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* SECTION 7: THREE ARTISTIC PILLARS                         */}
          {/* ========================================================= */}
          <div className="py-14 sm:py-20 border-t border-white/10">
            <SectionHeading
              tag="ARTISTIC PILLARS"
              title="AREAS OF PRACTICE"
              subtitle="Sumesh Koottickal's creative identity spans three interconnected creative disciplines."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BIOGRAPHY_DATA.disciplines.map((item, index) => (
                <div
                  key={index}
                  className="p-6 sm:p-8 rounded-xl bg-surface-card border border-white/10 hover:border-white/25 transition-all"
                >
                  <span className="text-xs font-mono text-neutral-400 mb-4 block">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold tracking-wider text-white uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Source Documentation Reference Area */}
          <div className="mt-14 sm:mt-20 p-6 sm:p-8 rounded-2xl border border-white/10 bg-neutral-950/70">
            <div className="flex items-center gap-2 mb-3 text-xs font-sans tracking-widest text-neutral-400 uppercase">
              <Compass className="w-4 h-4 text-neutral-400" />
              <span>PUBLIC VERIFICATION LEADS & SOURCE REFERENCES</span>
            </div>
            <p className="text-xs text-neutral-400 font-sans mb-6">
              In accordance with project integrity standards, biography content is curated strictly from verifiable public profiles, resumes, and music registries.
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
