export interface EventItem {
  id: string;
  title: string;
  date: string;
  venue: string;
  city?: string;
  description?: string;
  image?: string;
  status: 'upcoming' | 'past';
  type?: string;
  externalLink?: string;
}

/**
 * CENTRALIZED EVENTS DATA
 * Add your verified events below.
 * - Set `status: 'upcoming'` for future shows.
 * - Set `status: 'past'` for past concerts/shows.
 * If there are no upcoming events, the page automatically presents the elegant
 * "STAY TUNED - NEW PERFORMANCES WILL BE ANNOUNCED SOON" state.
 */
export const EVENTS_LIST: EventItem[] = [
  // When real events are announced, add them here:
  /*
  {
    id: 'concert-1',
    title: 'Live Keytar Concert Showcase',
    date: 'To Be Announced',
    venue: 'Arena Stage',
    city: 'Kochi, Kerala',
    description: 'Electrifying live concert with multi-tier keyboard arrangements.',
    status: 'upcoming',
    type: 'Live Concert'
  }
  */
];

export const EVENTS_PAGE_CONFIG = {
  heroTitle: 'EVENTS',
  pastHeading: 'PAST EVENTS',
  pastEmptyNotice: 'PAST EVENT ARCHIVE WILL BE UPDATED SHORTLY.',
  upcomingHeading: 'UPCOMING EVENTS',
  stayTunedHeading: 'STAY TUNED',
  stayTunedMessage: 'NEW PERFORMANCES WILL BE ANNOUNCED SOON.',
  stayTunedSubtext: 'Tour dates, college festivals, and arena appearances are currently being scheduled for the upcoming season. For performance bookings and private event enquiries, please reach out via the contact desk.',
  bookingNoticeTitle: 'BOOK SUMESH KOOTTICKAL FOR YOUR EVENT',
  bookingNoticeDescription: 'Available for live music festivals, college fests, corporate events, and specialized performance art shows across India and worldwide.',
};
