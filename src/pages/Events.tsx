import { useEffect } from 'react';
import { HeroBanner } from '../components/HeroBanner';
import { SectionHeading } from '../components/SectionHeading';
import { EventCard } from '../components/EventCard';
import { EVENTS_DATA } from '../data/events';
import { Calendar, Sparkles, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ARTIST_DATA } from '../data/artist';

export const Events: React.FC = () => {
  useEffect(() => {
    document.title = 'Events — Sumesh Koottickal | Live Concerts & Shows';
  }, []);

  const hasUpcoming = EVENTS_DATA.upcomingEvents.length > 0;
  const hasPast = EVENTS_DATA.pastEvents.length > 0;

  return (
    <div className="w-full bg-black text-white">
      {/* Required Hero Banner */}
      <HeroBanner
        title="EVENTS"
        subtitle="Concert appearances, festival sets, college headliners, and stage illusion shows."
        category="TOUR & PERFORMANCES"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        {/* ========================================================= */}
        {/* 1. UPCOMING EVENTS SECTION                                */}
        {/* ========================================================= */}
        <section className="mb-24">
          <SectionHeading
            tag="CALENDAR"
            title="UPCOMING PERFORMANCES"
            subtitle="Catch Sumesh Koottickal live in action across music festivals and arena stages."
          />

          {hasUpcoming ? (
            <div className="space-y-6">
              {EVENTS_DATA.upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            /* Refined Empty State as instructed */
            <div className="p-10 md:p-16 rounded-2xl border border-white/10 bg-surface-card text-center flex flex-col items-center max-w-3xl mx-auto shadow-2xl">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                <Calendar className="w-6 h-6 text-neutral-400" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-cinematic text-white uppercase mb-3">
                {EVENTS_DATA.emptyStateNotice}
              </h3>

              <p className="text-sm text-neutral-300 font-sans leading-relaxed max-w-lg mb-8">
                {EVENTS_DATA.emptyStateDescription}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
                >
                  <span>BOOK AN EVENT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${ARTIST_DATA.contact.phone}`}
                  className="px-6 py-3 rounded border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black font-display tracking-widest text-xs font-bold uppercase transition-all"
                >
                  <span>CALL DIRECT</span>
                </a>
              </div>
            </div>
          )}
        </section>

        {/* ========================================================= */}
        {/* 2. PAST EVENTS SECTION (ONLY WHEN VERIFIED DATA SUPPLIED)  */}
        {/* ========================================================= */}
        {hasPast && (
          <section className="mb-24 border-t border-white/10 pt-20">
            <SectionHeading
              tag="ARCHIVE"
              title="PAST EVENTS & PERFORMANCES"
              subtitle="Highlights from previous concert tours and festival headliners."
            />

            <div className="space-y-6">
              {EVENTS_DATA.pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* 3. EVENT POSTER & PROMOTIONAL ASSETS AREA                 */}
        {/* ========================================================= */}
        <section className="mb-24 border-t border-white/10 pt-20">
          <SectionHeading
            tag="STAGE COLLATERAL"
            title="TOUR POSTERS & ASSETS"
            subtitle="Official promotional posters, rider specs, and stage visual assets."
          />

          <div className="p-8 md:p-12 rounded-2xl bg-surface-card border border-dashed border-neutral-700 text-center flex flex-col items-center">
            <Sparkles className="w-8 h-8 text-neutral-400 mb-3" />
            <h3 className="font-display text-xl font-bold tracking-wider text-white uppercase mb-2">
              EVENT POSTER ARCHIVE (READY FOR ASSETS)
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 font-sans max-w-lg mb-6 leading-relaxed">
              Official tour posters, stage tech riders, and event flyers will be added to this section when final verified promotional graphics are provided.
            </p>
            <span className="text-[11px] font-mono text-neutral-400">
              Configurable via src/data/events.ts
            </span>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. BOOKING ENQUIRY CTA                                    */}
        {/* ========================================================= */}
        <section className="border-t border-white/10 pt-20">
          <div className="p-8 md:p-14 rounded-2xl bg-neutral-950 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase block mb-2">
                ORGANIZERS & FESTIVAL PROMOTERS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-white uppercase mb-3">
                {EVENTS_DATA.bookingInfo.title}
              </h3>
              <p className="text-sm text-neutral-300 font-sans max-w-2xl leading-relaxed">
                {EVENTS_DATA.bookingInfo.description}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>BOOKING ENQUIRY</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
