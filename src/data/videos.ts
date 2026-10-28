export interface VideoItem {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
  customThumbnail?: string;
}

/**
 * 6 FEATURED POPULAR MUSIC & COMPOSITION VIDEOS
 * Strictly in user's specified order:
 * 1. S01yMutUGxk
 * 2. 2dGwbDnfmu4 (Uruki Uruki Theernnidaam - with custom cover)
 * 3. PUjf7OxZi0A
 * 4. LoM3U4wEXZE
 * 5. Ii88MEL76d0
 * 6. hYkZIQdZLsk
 */
export const FEATURED_POPULAR_VIDEOS: VideoItem[] = [
  {
    id: 'featured-1',
    youtubeId: 'S01yMutUGxk',
    youtubeUrl: 'https://www.youtube.com/embed/S01yMutUGxk',
  },
  {
    id: 'featured-2',
    youtubeId: '2dGwbDnfmu4',
    youtubeUrl: 'https://www.youtube.com/embed/2dGwbDnfmu4',
    customThumbnail: '/images/cover-uruki-uruki.jpg',
  },
  {
    id: 'featured-3',
    youtubeId: 'PUjf7OxZi0A',
    youtubeUrl: 'https://www.youtube.com/embed/PUjf7OxZi0A',
  },
  {
    id: 'featured-4',
    youtubeId: 'LoM3U4wEXZE',
    youtubeUrl: 'https://www.youtube.com/embed/LoM3U4wEXZE',
  },
  {
    id: 'featured-5',
    youtubeId: 'Ii88MEL76d0',
    youtubeUrl: 'https://www.youtube.com/embed/Ii88MEL76d0',
  },
  {
    id: 'featured-6',
    youtubeId: 'hYkZIQdZLsk',
    youtubeUrl: 'https://www.youtube.com/embed/hYkZIQdZLsk',
  },
];

/**
 * REMAINING EXISTING GALLERY VIDEOS
 * Revealed when visitor clicks LOAD MORE
 */
export const REMAINING_GALLERY_VIDEOS: VideoItem[] = [
  {
    id: 'remaining-1',
    youtubeId: 'j2u4JqdjVng',
    youtubeUrl: 'https://www.youtube.com/embed/j2u4JqdjVng',
  },
  {
    id: 'remaining-2',
    youtubeId: 'ekw_Cr10n4Y',
    youtubeUrl: 'https://www.youtube.com/embed/ekw_Cr10n4Y',
  },
  {
    id: 'remaining-3',
    youtubeId: 'ZZ5X6iXg3Ak',
    youtubeUrl: 'https://www.youtube.com/embed/ZZ5X6iXg3Ak',
  },
  {
    id: 'remaining-4',
    youtubeId: 'dg_GBq7O1-o',
    youtubeUrl: 'https://www.youtube.com/embed/dg_GBq7O1-o',
  },
  {
    id: 'remaining-5',
    youtubeId: 'sFRtAS0KaRw',
    youtubeUrl: 'https://www.youtube.com/embed/sFRtAS0KaRw',
  },
  {
    id: 'remaining-6',
    youtubeId: 'htAUAnAmxD8',
    youtubeUrl: 'https://www.youtube.com/embed/htAUAnAmxD8',
  },
];

export const VIDEO_ITEMS: VideoItem[] = FEATURED_POPULAR_VIDEOS;

export const VIDEO_SECTION_CONFIG = {
  heading: 'POPULAR MUSIC & COMPOSITIONS',
  subtitle: 'FEATURED TRACKS · CONCERT RECORDINGS · REPERTOIRE',
  watchMoreLabel: 'WATCH MORE ON YOUTUBE',
  channelUrl: 'https://www.youtube.com/@SumeshKoottickal',
};
