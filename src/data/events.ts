export interface EventItem {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  time?: string;
  venue: string;
  city: string;
  status: 'Announced' | 'Sold Out' | 'Completed' | 'Upcoming';
  type: 'Concert' | 'College Fest' | 'Private Gala' | 'Festival' | 'Stage Performance';
  description?: string;
  posterUrl?: string;
  bookingUrl?: string;
}

export const EVENTS_DATA = {
  headline: "LIVE ON STAGE",
  subheadline: "EXPERIENCE THE HIGH-VOLTAGE AUDITORY ENERGY AND MENTALISM FEATS IN PERSON",
  
  // Empty state active until artist supplies verified tour dates
  upcomingEvents: [] as EventItem[],
  
  emptyStateNotice: "UPCOMING PERFORMANCES WILL BE ANNOUNCED SOON.",
  emptyStateDescription: "Tour dates, college festivals, and arena appearances are currently being scheduled for the upcoming season. For festival bookings, corporate performances, and live stage appearances, please submit an enquiry.",
  
  // Past events data template (can be populated when user provides historical concert data)
  pastEvents: [] as EventItem[],
  
  bookingInfo: {
    title: "BOOK SUMESH KOOTTICKAL",
    description: "Available for live music festivals, college fests, corporate events, and specialized performance art / mentalism shows across India and worldwide.",
    directContact: "+91 8113070209",
    email: "koottickalsumesh@gmail.com"
  }
};
