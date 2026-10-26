export interface MusicProject {
  id: string;
  projectTitle: string;
  filmOrAlbum: string;
  category: 'Feature Film' | 'Single' | 'Devotional' | 'Concert Piece';
  year: string;
  musicCredits: {
    musicDirector: string;
    singers?: string;
    lyrics?: string;
    director?: string;
  };
  description: string;
  youtubeUrl?: string; // Add real YouTube link when available
  audioUrl?: string; // Add streaming/audio link when available (e.g. Apple Music)
  artwork?: string; // Optional artwork image path
  isVerified: boolean;
}

export const MUSIC_PAGE_DATA = {
  heroTitle: 'MUSIC',
  introHeading: 'MUSIC DIRECTION & COMPOSITIONS',
  introDescription:
    'Sumesh Koottickal is an Indian Music Director and Performer known for his cinematic compositions, feature film songs, and energetic stage musicianship.',
  
  // Real projects based strictly on verified and supplied records
  projects: [
    {
      id: 'chinna-dada',
      projectTitle: 'Shishiravaanil Pranayamukilaay',
      filmOrAlbum: 'Chinna Dada',
      category: 'Feature Film',
      year: '2016',
      musicCredits: {
        musicDirector: 'Sumesh Koottickal',
        singers: 'Dr. K.J. Yesudas & Sharon Joseph',
        lyrics: 'Subhash Cherthala',
      },
      description:
        'Soulful romantic melody featuring vocal performances by Dr. K.J. Yesudas and Sharon Joseph with lyrics penned by Subhash Cherthala.',
      isVerified: true,
    },
    {
      id: 'idukki-blasters',
      projectTitle: 'Idukki Blasters Original Score',
      filmOrAlbum: 'Idukki Blasters',
      category: 'Feature Film',
      year: '2017',
      musicCredits: {
        musicDirector: 'Sumesh Koottickal',
        director: 'Salam P. Shaji',
      },
      description:
        'Feature film original score and songs directed by Salam P. Shaji.',
      isVerified: true,
    },
    {
      id: 'swargam-thurannu',
      projectTitle: 'Swargam Thurannu Nee Irangeedane',
      filmOrAlbum: 'Swargam Thurannu Nee Irangeedane - Single',
      category: 'Single',
      year: '2018',
      musicCredits: {
        musicDirector: 'Sumesh Koottickal',
      },
      description:
        'Independent devotional single release distributed on digital platforms including Apple Music.',
      audioUrl: 'https://music.apple.com/us/artist/sumesh-koottickal/1412084049',
      isVerified: true,
    },
  ] as MusicProject[],
};
