export interface PastEventImage {
  id: string;
  src: string;
  fallbackSrc: string;
  alt: string;
}

export interface UpcomingEventItem {
  id: string;
  title: string;
  date: string;
  venue: string;
  city?: string;
  description?: string;
  image?: string;
  status?: string;
  type?: string;
  externalLink?: string;
}

export type EventItem = UpcomingEventItem;

/**
 * FOURTEEN VERIFIED PAST EVENT PHOTOGRAPHS
 * Displayed in a uniform, attractive grid without captions or invented details.
 */
export const PAST_EVENT_IMAGES: PastEventImage[] = [
  {
    id: 'past-event-1',
    src: '/images/events/event-01.jpg',
    fallbackSrc: 'https://i.ibb.co/PGF3Y2zt/Whats-App-Image-2026-10-27-at-11-58-21-AM-2.jpg',
    alt: 'Sumesh Koottickal live keyboard performance on stage',
  },
  {
    id: 'past-event-2',
    src: '/images/events/event-02.jpg',
    fallbackSrc: 'https://i.ibb.co/TM45d0Fx/Whats-App-Image-2026-10-27-at-11-58-21-AM-1.jpg',
    alt: 'Sumesh Koottickal performing live with keyboard setup',
  },
  {
    id: 'past-event-3',
    src: '/images/events/event-03.jpg',
    fallbackSrc: 'https://i.ibb.co/sp6gCxfT/Whats-App-Image-2026-10-27-at-11-58-21-AM.jpg',
    alt: 'Theevra band live music concert performance',
  },
  {
    id: 'past-event-4',
    src: '/images/events/event-04.jpg',
    fallbackSrc: 'https://i.ibb.co/b9jF5RW/Whats-App-Image-2026-10-27-at-11-58-20-AM-3.jpg',
    alt: 'Sumesh Koottickal keytar live performance on stage',
  },
  {
    id: 'past-event-5',
    src: '/images/events/event-05.jpg',
    fallbackSrc: 'https://i.ibb.co/23bkWQv1/Whats-App-Image-2026-10-27-at-11-58-20-AM-2.jpg',
    alt: 'Sumesh Koottickal live concert stage performance',
  },
  {
    id: 'past-event-6',
    src: '/images/events/event-06.jpg',
    fallbackSrc: 'https://i.ibb.co/21CqR3QG/Whats-App-Image-2026-10-27-at-11-58-20-AM-1.jpg',
    alt: 'Sumesh Koottickal performing music on stage',
  },
  {
    id: 'past-event-7',
    src: '/images/events/event-07.jpg',
    fallbackSrc: 'https://i.ibb.co/hx5p5YHG/Whats-App-Image-2026-10-27-at-11-58-20-AM.jpg',
    alt: 'Live music performance by Sumesh Koottickal',
  },
  {
    id: 'past-event-8',
    src: '/images/events/event-08.jpg',
    fallbackSrc: 'https://i.ibb.co/dwHfL5t1/Whats-App-Image-2026-10-27-at-11-58-19-AM.jpg',
    alt: 'Sumesh Koottickal on stage during live concert',
  },
  {
    id: 'past-event-9',
    src: '/images/events/event-09.jpg',
    fallbackSrc: 'https://i.ibb.co/tppqzMwt/Whats-App-Image-2026-10-27-at-11-58-17-AM-1.jpg',
    alt: 'Sumesh Koottickal performing keyboard solo on stage',
  },
  {
    id: 'past-event-10',
    src: '/images/events/event-10.jpg',
    fallbackSrc: 'https://i.ibb.co/KxKfv2xF/Whats-App-Image-2026-10-27-at-11-58-17-AM.jpg',
    alt: 'Sumesh Koottickal and live band stage performance',
  },
  {
    id: 'past-event-11',
    src: '/images/events/event-11.jpg',
    fallbackSrc: 'https://i.ibb.co/j95GsGRv/Whats-App-Image-2026-10-27-at-12-05-57-PM-3.jpg',
    alt: 'Sumesh Koottickal live keytar stage performance',
  },
  {
    id: 'past-event-12',
    src: '/images/events/event-12.jpg',
    fallbackSrc: 'https://i.ibb.co/TxfTDfgy/Whats-App-Image-2026-10-27-at-12-05-57-PM-2.jpg',
    alt: 'Sumesh Koottickal keyboard and synthesizer stage performance',
  },
  {
    id: 'past-event-13',
    src: '/images/events/event-13.jpg',
    fallbackSrc: 'https://i.ibb.co/cc9m7bwP/Whats-App-Image-2026-10-27-at-12-05-57-PM-1.jpg',
    alt: 'Sumesh Koottickal musical performance at live event',
  },
  {
    id: 'past-event-14',
    src: '/images/events/event-14.jpg',
    fallbackSrc: 'https://i.ibb.co/XxRs1Dsm/Whats-App-Image-2026-10-27-at-12-05-57-PM.jpg',
    alt: 'Sumesh Koottickal concert performance moments',
  },
];

/**
 * EDITABLE UPCOMING EVENTS
 * Add future performances when officially announced.
 * If empty, the page automatically presents the elegant "STAY TUNED" state.
 */
export const UPCOMING_EVENTS: UpcomingEventItem[] = [];

export const EVENTS_PAGE_CONFIG = {
  heroTitle: 'EVENTS',
  pastHeading: 'PAST EVENTS',
  andMoreText: 'AND MORE...',
  upcomingHeading: 'UPCOMING EVENTS',
  stayTunedHeading: 'STAY TUNED',
  stayTunedMessage: 'NEW PERFORMANCES WILL BE ANNOUNCED SOON.',
};
