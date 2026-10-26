import { useEffect } from 'react';
import { HeroBanner } from '../components/HeroBanner';
import { EventCard } from '../components/EventCard';
import { EVENTS_LIST, EVENTS_PAGE_CONFIG } from '../data/events';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Events: React.FC = () => {
  useEffect(() => {
    document.title = 'Events — Sumesh Koottickal | Live Concerts & Shows';
  }, []);

  const pastEvents = EVENTS_LIST.filter((e) => e.status === 'past');
  const upcomingEvents = EVENTS_LIST.filter((e) => e.status === 'upcoming');

  return (
    <div className="w-full bg-black text-white">
      {/* Standard Reusable Hero Banner */}
      <HeroBanner title={EVENTS_PAGE_CONFIG.heroTitle} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* ========================================================= */}
        {/* SECTION A: PAST EVENTS                                    */}
        {/* ========================================================= */}
        <section aria-labelledby="past-events-heading" className="mb-24 md:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <h2
              id="past-events-heading"
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-cinematic text-white uppercase mb-3"
            >
              {EVENTS_PAGE_CONFIG.pastHeading}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans tracking-wide">
              Documented concerts, festival headliners, and stage performances.
            </p>
          </div>

          {pastEvents.length > 0 ? (
            <div className="space-y-6">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            /* Minimal empty state when no past events are added */
            <div className="p-8 md:p-12 rounded-xl bg-neutral-950 border border-white/10 text-center max-w-xl mx-auto">
              <Calendar className="w-8 h-8 text-neutral-500 mx-auto mb-3" />
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                {EVENTS_PAGE_CONFIG.pastEmptyNotice}
              </p>
            </div>
          )}
        </section>

        {/* ========================================================= */}
        {/* SECTION B: UPCOMING EVENTS                                */}
        {/* ========================================================= */}
        <section
          aria-labelledby="upcoming-events-heading"
          className="border-t border-white/10 pt-20 md:pt-28"
        >
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2
              id="upcoming-events-heading"
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-cinematic text-white uppercase mb-3"
            >
              {EVENTS_PAGE_CONFIG.upcomingHeading}
            </h2>
          </div>

          {upcomingEvents.length > 0 ? (
            /* STATE 1: Upcoming events exist */
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            /* STATE 2: No upcoming events have been announced -> Elegant "STAY TUNED" */
            <div className="max-w-2xl mx-auto p-12 md:p-16 rounded-2xl bg-neutral-950 border border-white/10 text-center flex flex-col items-center">
              <span className="text-[11px] font-sans tracking-[0.25em] text-neutral-400 uppercase mb-3">
                PERFORMANCE SCHEDULE
              </span>

              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-cinematic text-white uppercase mb-3">
                {EVENTS_PAGE_CONFIG.stayTunedHeading}
              </h3>

              <p className="font-sans text-xs sm:text-sm tracking-widest text-neutral-300 uppercase mb-8">
                {EVENTS_PAGE_CONFIG.stayTunedMessage}
              </p>

              <div className="w-12 h-[1px] bg-white/20 mb-8" />

              <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-md mb-8">
                {EVENTS_PAGE_CONFIG.stayTunedSubtext}
              </p>

              <Link
                to="/contact"
                className="px-8 py-3.5 rounded bg-white text-black font-display tracking-widest text-xs font-bold uppercase hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
              >
                <span>BOOKINGS & ENQUIRIES</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </section>

        {/* Centralized config instructions note */}
        <div className="mt-24 p-6 rounded-xl bg-neutral-950 border border-white/10 text-center max-w-xl mx-auto">
          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            Events can be added or updated with <code>status: 'upcoming'</code> or <code>status: 'past'</code> in <code>src/data/events.ts</code>.
          </p>
        </div>
      </div>
    </div>
  );
};
