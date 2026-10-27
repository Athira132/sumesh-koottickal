export interface Milestone {
  year: string;
  role: string;
  title: string;
  description: string;
}

export interface BiographyData {
  headline: string;
  summary: string;
  paragraphs: string[];
  disciplines: {
    title: string;
    description: string;
  }[];
  careerMilestones: Milestone[];
  verifiedWorks: {
    category: string;
    title: string;
    details: string;
    year?: string;
  }[];
  portrait: {
    src: string;
    fallbackSrc: string;
    alt: string;
    caption: string;
  };
  keyAchievements: {
    cinemaDirection: {
      film: string;
      year?: string;
      details: string;
    }[];
    theevraBand: {
      name: string;
      description: string;
      image: string;
      alt: string;
    };
    notableSingles: string[];
    stagePerformances: {
      event: string;
      type: string;
    }[];
  };
}

export const BIOGRAPHY_DATA: BiographyData = {
  headline: "ARCHITECT OF SOUND, MASTER OF THE STAGE, EXPLORER OF THE MIND.",
  summary: "Sumesh Koottickal is a versatile Indian Music Director, live performer, and mentalist hailing from Kerala. Renowned for his electrifying keytar performances, symphonic arrangements, and cinematic film compositions, he bridges the worlds of classical musical nuance, contemporary stage spectacle, and psychological illusion.",
  paragraphs: [
    "Rooted in the rich cultural and musical landscape of Kerala, Sumesh Koottickal has carved an individualistic niche in contemporary Indian music. As a composer and music director, his sonic signature balances sweeping melodic resonance with modern rhythmic drive.",
    "His film composition credits include notable contributions to Malayalam cinema, such as composing the celebrated composition 'Shishiravaanil Pranayamukilaay' for the 2016 film Chinna Dada—an evocative track rendered by the legendary Padma Vibhushan Dr. K.J. Yesudas alongside Sharon Joseph, penned by lyricist Subhash Cherthala. His compositional repertoire also features the score for Salam P. Shaji's feature film Idukki Blasters alongside independent devotional and contemporary singles distributed across international streaming platforms like Apple Music.",
    "Beyond the studio, Sumesh transforms the live stage into an explosive arena of musical expression. Armed with his signature electric blue keytar and multi-tier synthesizer rigs, he delivers high-voltage stage shows that blend blistering synth leads, traditional melodic contours, and interactive crowd engagement.",
    "Complementing his musical craft is his dedication to Mentalism and psychological performance art. Blending keen observation, intuitive psychology, and stage illusion, his upcoming mentalism projects present audiences with a rare fusion of sound and psychological wonder."
  ],
  disciplines: [
    {
      title: "MUSIC DIRECTION & COMPOSITION",
      description: "Film scoring, orchestral arrangements, theme compositions, and contemporary studio productions with an emphasis on rich melodic hooks and acoustic-electronic fusion."
    },
    {
      title: "LIVE KEYTAR & KEYBOARD PERFORMANCE",
      description: "Dynamic live concert showcases featuring energetic keytar solos, complex multi-keyboard soundscaping, and synchronized audiovisual concert experiences."
    },
    {
      title: "MENTALISM & PERFORMANCE ART",
      description: "Intriguing mind-reading, psychological influence, and interactive stage presentations designed to challenge perception and ignite astonishment."
    }
  ],
  careerMilestones: [
    {
      year: "2016",
      role: "Film Music Composer",
      title: "Chinna Dada — 'Shishiravaanil Pranayamukilaay'",
      description: "Composed the soulful romantic melody featuring vocal performances by Dr. K.J. Yesudas and Sharon Joseph with lyrics by Subhash Cherthala."
    },
    {
      year: "2017",
      role: "Film Music Director",
      title: "Idukki Blasters",
      description: "Handled full music direction for director Salam P. Shaji's Malayalam feature film project."
    },
    {
      year: "2018+",
      role: "Independent Recording Artist",
      title: "Apple Music & Digital Streaming Releases",
      description: "Released independent projects including the devotional single 'Swargam Thurannu Nee Irangeedane', expanding digital listenership across international music platforms."
    },
    {
      year: "Ongoing",
      role: "Concert Performer & Mentalist",
      title: "Arena Shows & Stage Tours",
      description: "Leading dynamic stage performances, festival headliners, and developing next-generation psychological illusion presentations."
    }
  ],
  verifiedWorks: [
    {
      category: "Feature Film Song",
      title: "Shishiravaanil Pranayamukilaay (Chinna Dada)",
      details: "Music: Sumesh Koottickal | Singers: Dr. K.J. Yesudas & Sharon Joseph | Lyrics: Subhash Cherthala",
      year: "2016"
    },
    {
      category: "Feature Film Score",
      title: "Idukki Blasters",
      details: "Music Director: Sumesh Koottickal | Director: Salam P. Shaji",
      year: "2017"
    },
    {
      category: "Streaming Single",
      title: "Swargam Thurannu Nee Irangeedane",
      details: "Official release available on Apple Music, Spotify, and digital streaming outlets.",
      year: "2018"
    }
  ],
  portrait: {
    src: "/images/artist-portrait-1.jpg",
    fallbackSrc: "https://i.ibb.co/ZR4TCXkh/dd93e88d-f105-43d1-af6d-b5d7a29ba1c3.jpg",
    alt: "Sumesh Koottickal, music director and keyboard artist",
    caption: "Sumesh Koottickal — Music Director, Performer, and Mentalist"
  },
  keyAchievements: {
    cinemaDirection: [
      {
        film: "Vishudha Pusthakam",
        year: "2019",
        details: "Music direction and film score composition for the Malayalam feature film."
      },
      {
        film: "Mr. Hacker",
        details: "Music direction and composition, including the notable songs 'Manjuthulli Pole' and 'Chankinu Chanke'."
      }
    ],
    theevraBand: {
      name: "Theevra",
      description: "Association with Theevra, a musical group known for live performances and keytar-driven fusion music.",
      image: "/images/theevra-band.jpg",
      alt: "Theevra band"
    },
    notableSingles: [
      "Ore Oru Rajavu Messi",
      "Swargam Thurannu Nee Irangeedane",
      "Kalyani",
      "Amsham",
      "Nishani"
    ],
    stagePerformances: [
      {
        event: "5th Anand TV Film Awards",
        type: "Featured Performance"
      },
      {
        event: "ZEPHYR 2025",
        type: "Live Concert Appearance"
      },
      {
        event: "Star and Success Awards 2025",
        type: "Event Appearance & Performance"
      },
      {
        event: "Asian Paints Darbar Awards 2023",
        type: "Stage Performance"
      },
      {
        event: "CSM Community Social Marketing Grand Achievers Award Ceremony 2026",
        type: "Event Performance Participation"
      }
    ]
  }
};
