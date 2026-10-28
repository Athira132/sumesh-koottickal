export interface MusicProject {
  id: string;
  projectTitle: string;
  filmOrAlbum: string;
  category: 'Feature Film' | 'Single' | 'Devotional' | 'Concert Piece' | 'Theme Music';
  year?: string;
  musicCredits: {
    musicDirector: string;
    singers?: string;
    lyrics?: string;
    director?: string;
  };
  description: string;
  youtubeUrl?: string;
  audioUrl?: string;
  artwork?: string;
  isVerified: boolean;
}

export const MUSIC_PAGE_DATA = {
  heroTitle: 'MUSIC',
  introHeading: 'SELECTED FILM MUSIC & COMPOSITIONS',
  introDescription:
    'Sumesh Koottickal has composed more than 600 songs across diverse languages, scoring feature films in Malayalam cinema, viral independent tracks, and sports theme anthems.',
  
  projects: [
    {
      id: 'chinna-dada',
      projectTitle: 'Shishiravaanil Pranayamukilaay',
      filmOrAlbum: 'Chinnadhadha / Chinna Dada',
      category: 'Feature Film',
      year: '2016',
      musicCredits: {
        musicDirector: 'Sumesh Koottickal',
        singers: 'Dr. K.J. Yesudas & Sharon Joseph',
        lyrics: 'Subhash Cherthala',
      },
      description:
        'Soulful romantic melody featuring vocal performances by Dr. K.J. Yesudas and Sharon Joseph with lyrics penned by Subhash Cherthala.',
      artwork: '/images/films/film-chinnadhadha.jpg',
      isVerified: true,
    },
    {
      id: 'vishudha-pusthakam',
      projectTitle: 'Vishudha Pusthakam Original Soundtrack',
      filmOrAlbum: 'Vishudha Pusthakam',
      category: 'Feature Film',
      year: '2019',
      musicCredits: {
        musicDirector: 'Sumesh Koottickal',
      },
      description:
        'Feature film original songs and background score for Malayalam cinema.',
      artwork: '/images/films/film-vishudha-pusthakam.jpg',
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
      artwork: '/images/films/film-idukki-blasters.jpg',
      isVerified: true,
    },
    {
      id: 'mr-hacker',
      projectTitle: 'Mr. Hacker Soundtrack',
      filmOrAlbum: 'Mr. Hacker',
      category: 'Feature Film',
      musicCredits: {
        musicDirector: 'Sumesh Koottickal',
      },
      description:
        'Original songs including "Manjuthulli Pole" and "Chankinu Chanke".',
      artwork: '/images/films/film-mr-hacker.jpg',
      isVerified: true,
    },
    {
      id: 'uruki-uruki',
      projectTitle: 'Uruki Uruki Theernnidaam',
      filmOrAlbum: 'Uruki Uruki Theernnidaam',
      category: 'Single',
      musicCredits: {
        musicDirector: 'Sumesh Koottickal',
      },
      description:
        'Celebrated composition that crossed more than 50 million YouTube views according to the supplied resume.',
      youtubeUrl: 'https://youtu.be/2dGwbDnfmu4',
      artwork: '/images/achievements/song-uruki-uruki.jpg',
      isVerified: true,
    },
    {
      id: 'indian-cricket-team',
      projectTitle: 'Twenty20 World Cup 2021 Anthem',
      filmOrAlbum: 'Indian Cricket Team',
      category: 'Theme Music',
      year: '2021',
      musicCredits: {
        musicDirector: 'Sumesh Koottickal',
      },
      description:
        'Theme music composed for the Indian Cricket Team for the Twenty20 World Cup 2021, according to the supplied resume.',
      artwork: '/images/achievements/indian-cricket-t20.jpg',
      isVerified: true,
    },
    {
      id: 'kerala-blasters',
      projectTitle: 'Kerala Blasters Football Theme',
      filmOrAlbum: 'Kerala Blasters',
      category: 'Theme Music',
      musicCredits: {
        musicDirector: 'Sumesh Koottickal',
      },
      description:
        'Official theme music composed for Kerala Blasters football club, according to the supplied resume.',
      artwork: '/images/achievements/kerala-blasters.jpg',
      isVerified: true,
    },
    {
      id: 'swargam-thurannu',
      projectTitle: 'Swargam Thurannu Nee Irangeedane',
      filmOrAlbum: 'Swargam Thurannu Nee Irangeedane - Single',
      category: 'Devotional',
      year: '2018',
      musicCredits: {
        musicDirector: 'Sumesh Koottickal',
      },
      description:
        'Independent devotional single release distributed on digital platforms including Apple Music and Spotify.',
      audioUrl: 'https://music.apple.com/us/artist/sumesh-koottickal/1412084049',
      isVerified: true,
    },
  ] as MusicProject[],
};
