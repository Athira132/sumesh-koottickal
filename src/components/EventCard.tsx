import React from 'react';
import type { EventItem } from '../data/events';
import { Calendar, MapPin, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  event: EventItem;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <article className="p-6 md:p-8 rounded-xl bg-surface-card border border-white/10 hover:border-white/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        {/* Poster / Image if provided */}
        {event.image ? (
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-white/15 bg-neutral-900 shrink-0">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          /* Date block */
          <div className="flex sm:flex-col items-center justify-center w-20 h-20 rounded-lg bg-white/5 border border-white/10 text-center shrink-0">
            <Calendar className="w-5 h-5 text-neutral-400 mb-1 hidden sm:block" />
            <span className="font-display text-sm tracking-wider text-white font-bold">
              {event.date}
            </span>
          </div>
        )}

        {/* Info */}
        <div>
          <div className="flex items-center gap-3 mb-1">
            {event.type && (
              <span className="text-[10px] uppercase font-sans tracking-widest px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                {event.type}
              </span>
            )}
            <span className="text-xs uppercase font-mono tracking-wider text-neutral-400">
              {event.status}
            </span>
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold tracking-wider text-white uppercase">
            {event.title}
          </h3>
          <div className="flex items-center gap-2 mt-2 text-xs md:text-sm text-neutral-400 font-sans">
            <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <span>
              {event.venue}
              {event.city ? `, ${event.city}` : ''}
            </span>
          </div>
          {event.description && (
            <p className="mt-3 text-xs md:text-sm text-neutral-400 font-sans max-w-xl leading-relaxed">
              {event.description}
            </p>
          )}
        </div>
      </div>

      {/* Action CTA */}
      <div className="shrink-0 flex items-center gap-3 pt-2 sm:pt-0">
        {event.externalLink ? (
          <a
            href={event.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-white/20 bg-white/5 hover:bg-white text-xs font-display tracking-widest text-white hover:text-black transition-all"
          >
            <span>EVENT LINK</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-white/20 bg-white/5 hover:bg-white text-xs font-display tracking-widest text-white hover:text-black transition-all"
          >
            <span>ENQUIRE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </article>
  );
};
