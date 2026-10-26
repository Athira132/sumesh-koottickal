export interface MusicProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'Feature Film' | 'Single' | 'Devotional' | 'Concert Piece' | 'Upcoming Production';
  year: string;
  credits: {
    musicDirector: string;
    singers?: string;
    lyrics?: string;
    director?: string;
    production?: string;
  };
  description: string;
  streamingLinks?: {
    appleMusic?: string;
    youtube?: string;
    spotify?: string;
  };
  isVerified: boolean;
  isPlaceholder?: boolean;
  badge?: string;
}

export interface CompositionCollaboration {
  title: string;
  artist: string;
  role: string;
  significance: string;
}

export const MUSIC_DATA = {
  headline: "CINEMATIC SCORES, SOULFUL MELODIES & HIGH-OCTANE LIVE COMPOSITIONS",
  intro: "From feature film soundscapes to devotional arrangements and live keytar orchestrations, Sumesh Koottickal's music bridges emotional depth with stage-commanding energy.",
  
  featuredTrack: {
    title: "Shishiravaanil Pranayamukilaay",
    project: "Chinna Dada (Feature Film Soundtrack)",
    year: "2016",
    composedBy: "Sumesh Koottickal",
    singers: "Dr. K.J. Yesudas & Sharon Joseph",
    lyrics: "Subhash Cherthala",
    genre: "Malayalam Film Romantic Classic",
    description: "A landmark composition featuring the timeless voice of Padma Vibhushan Dr. K.J. Yesudas. Blending lush acoustic orchestration with tender romantic phrasing, this song stands as a highlight of Sumesh Koottickal's film composing repertoire.",
    isVerified: true
  },

  projects: [
    {
      id: "chinna-dada",
      title: "Chinna Dada",
      subtitle: "Feature Film Song — Shishiravaanil Pranayamukilaay",
      category: "Feature Film",
      year: "2016",
      credits: {
        musicDirector: "Sumesh Koottickal",
        singers: "Dr. K.J. Yesudas & Sharon Joseph",
        lyrics: "Subhash Cherthala"
      },
      description: "Film soundtrack release that captured listeners through its rich vocal performance and melodic arrangement.",
      isVerified: true,
      badge: "K.J. Yesudas Vocal"
    },
    {
      id: "idukki-blasters",
      title: "Idukki Blasters",
      subtitle: "Feature Film Original Score & Soundtrack",
      category: "Feature Film",
      year: "2017",
      credits: {
        musicDirector: "Sumesh Koottickal",
        director: "Salam P. Shaji"
      },
      description: "Original cinematic background score and feature film tracks directed by Salam P. Shaji.",
      isVerified: true,
      badge: "Feature Film Score"
    },
    {
      id: "swargam-thurannu",
      title: "Swargam Thurannu Nee Irangeedane",
      subtitle: "Independent Single",
      category: "Single",
      year: "2018",
      credits: {
        musicDirector: "Sumesh Koottickal",
        production: "Digital Release"
      },
      description: "Devotional and regional single distributed across international digital channels including Apple Music.",
      streamingLinks: {
        appleMusic: "https://music.apple.com/us/artist/sumesh-koottickal/1412084049"
      },
      isVerified: true,
      badge: "Apple Music Release"
    },
    {
      id: "upcoming-single-1",
      title: "[Upcoming Studio Single]",
      subtitle: "Original Production — In Progress",
      category: "Upcoming Production",
      year: "2026",
      credits: {
        musicDirector: "Sumesh Koottickal",
        production: "Koottickal Studios"
      },
      description: "Placeholder for upcoming original single. Replace this record in src/data/music.ts when official track title and links are ready.",
      isVerified: false,
      isPlaceholder: true,
      badge: "Coming Soon"
    },
    {
      id: "upcoming-concert-set",
      title: "[Keytar Live Fusion Suite]",
      subtitle: "Live Concert Arrangement",
      category: "Concert Piece",
      year: "2026",
      credits: {
        musicDirector: "Sumesh Koottickal",
        production: "Live Tour Series"
      },
      description: "Electrifying live stage suite featuring synths, Indian percussion, and lead keytar solo breakdowns.",
      isVerified: false,
      isPlaceholder: true,
      badge: "Stage Repertoire"
    }
  ] as MusicProject[],

  collaborations: [
    {
      title: "Vocal Recording Collaboration",
      artist: "Dr. K.J. Yesudas",
      role: "Music Director / Composer",
      significance: "Composed and arranged the vocal lines for one of Indian music's greatest living icons in 'Chinna Dada'."
    },
    {
      title: "Duet & Vocal Production",
      artist: "Sharon Joseph",
      role: "Composer & Arranger",
      significance: "Harmonized vocal duets with Dr. K.J. Yesudas on the song 'Shishiravaanil Pranayamukilaay'."
    },
    {
      title: "Lyricist Partnership",
      artist: "Subhash Cherthala",
      role: "Composer & Melodist",
      significance: "Musical partnership crafting poetic Malayalam film songs with rich imagery and rhythm."
    },
    {
      title: "Feature Film Direction",
      artist: "Salam P. Shaji",
      role: "Music Director",
      significance: "Collaborative scoring on the full-length feature film 'Idukki Blasters'."
    }
  ] as CompositionCollaboration[],

  videoSpotlight: {
    title: "Live Keytar & Keyboard Showcases",
    subtitle: "Official YouTube Channel Video Stream",
    channelUrl: "https://www.youtube.com/@Sumeshkoottickal",
    placeholderMessage: "YouTube video embeds will be activated as you supply direct video links. Visit the official channel for live concert clips and studio recordings.",
    // Sample / upcoming embed support:
    youtubeEmbedUrl: "" // Add direct video ID or embed URL when provided (e.g. "https://www.youtube.com/embed/VIDEO_ID")
  }
};
