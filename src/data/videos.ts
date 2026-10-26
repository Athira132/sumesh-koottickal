export interface VideoItem {
  id: string;
  title: string;
  category: 'Performances' | 'Music' | 'Behind the Scenes';
  youtubeUrl: string; // e.g., 'https://www.youtube.com/watch?v=VIDEO_ID' or 'https://www.youtube.com/embed/VIDEO_ID'
  description?: string;
  isPlaceholder?: boolean;
}

/**
 * EDITABLE VIDEO ARCHIVE
 * Add your verified YouTube video links here.
 * If this array is empty or contains only placeholders, a minimal "VIDEOS COMING SOON"
 * section will be displayed automatically without broken embeds or fake thumbnails.
 */
export const VIDEO_ITEMS: VideoItem[] = [
  // Example future video entries (leave youtubeUrl empty or commented until real links are provided):
  /*
  {
    id: 'keytar-live-solo',
    title: 'Live Keytar Concert Solo',
    category: 'Performances',
    youtubeUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
    description: 'High-voltage live stage keytar solo from festival tour.'
  }
  */
];

export const VIDEO_SECTION_CONFIG = {
  heading: 'VIDEOS',
  subtitle: 'PERFORMANCES · MUSIC · BEHIND THE SCENES',
  emptyStateTitle: 'VIDEOS COMING SOON',
  emptyStateDescription: 'Official concert video recordings, live performance streams, and behind-the-scenes studio sessions are currently being curated for release.',
  channelUrl: 'https://www.youtube.com/@Sumeshkoottickal',
};
