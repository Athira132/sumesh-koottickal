export interface VideoItem {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
}

/**
 * EDITABLE VIDEO ARCHIVE
 * Six official YouTube video embeds for the Gallery page.
 */
export const VIDEO_ITEMS: VideoItem[] = [
  {
    id: 'video-1',
    youtubeId: 'j2u4JqdjVng',
    youtubeUrl: 'https://www.youtube.com/embed/j2u4JqdjVng',
  },
  {
    id: 'video-2',
    youtubeId: 'ekw_Cr10n4Y',
    youtubeUrl: 'https://www.youtube.com/embed/ekw_Cr10n4Y',
  },
  {
    id: 'video-3',
    youtubeId: 'ZZ5X6iXg3Ak',
    youtubeUrl: 'https://www.youtube.com/embed/ZZ5X6iXg3Ak',
  },
  {
    id: 'video-4',
    youtubeId: '9lTHRPhr6PI',
    youtubeUrl: 'https://www.youtube.com/embed/9lTHRPhr6PI',
  },
  {
    id: 'video-5',
    youtubeId: 'sFRtAS0KaRw',
    youtubeUrl: 'https://www.youtube.com/embed/sFRtAS0KaRw',
  },
  {
    id: 'video-6',
    youtubeId: 'htAUAnAmxD8',
    youtubeUrl: 'https://www.youtube.com/embed/htAUAnAmxD8',
  },
];

export const VIDEO_SECTION_CONFIG = {
  heading: 'VIDEOS',
  subtitle: 'PERFORMANCES · MUSIC · BEHIND THE SCENES',
  watchMoreLabel: 'WATCH MORE',
  channelUrl: 'https://www.youtube.com/@SumeshKoottickal',
};
