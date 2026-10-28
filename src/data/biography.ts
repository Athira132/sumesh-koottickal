export interface Milestone {
  year: string;
  role: string;
  title: string;
  description: string;
}

export interface FilmWork {
  id: string;
  title: string;
  role: string;
  year?: string;
  image: string;
  fallbackImage: string;
  details: string;
}

export interface ProjectHighlight {
  id: string;
  title: string;
  role: string;
  description: string;
  image: string;
  fallbackImage: string;
  note?: string;
  videoId?: string;
}

export interface AwardItem {
  id: string;
  name: string;
  year: string;
  presentedBy?: string;
  image: string;
  fallbackImage: string;
  details: string;
}

export interface LivePerformanceItem {
  id: string;
  event: string;
  role: string;
  image: string;
  fallbackImage: string;
  details: string;
}

export interface BiographyData {
  name: string;
  professionalTitle: string;
  shortIntro: string;
  headline: string;
  summary: string;
  careerBackgroundFacts: string[];
  paragraphs: string[];
  disciplines: {
    title: string;
    description: string;
  }[];
  selectedFilmMusic: FilmWork[];
  majorProjects: ProjectHighlight[];
  awardsAndRecognition: AwardItem[];
  livePerformances: LivePerformanceItem[];
  careerMilestones: Milestone[];
  classicCruise: {
    title: string;
    description: string;
    startDate: string;
  };
  portrait: {
    src: string;
    fallbackSrc: string;
    alt: string;
    caption: string;
  };
  theevraBand: {
    name: string;
    description: string;
    image: string;
    alt: string;
  };
  notableSingles: string[];
}

export const BIOGRAPHY_DATA: BiographyData = {
  name: "SUMESH KOOTTICKAL",
  professionalTitle: "Music Director, Composer & Keyboard Artist",
  shortIntro:
    "An experienced Indian music director, film music composer, music arranger, and professional keyboard artist with a rich career spanning Malayalam cinema, multi-lingual productions, and international stage performances.",
  headline: "ARCHITECT OF SOUND, MASTER OF THE STAGE, EXPLORER OF THE MIND.",
  summary:
    "Sumesh Koottickal is a versatile Indian Music Director, film music composer, keyboard artist, and mentalist from Kerala. Renowned for his electrifying keytar performances, symphonic arrangements, and cinematic film compositions, he bridges the worlds of classical musical nuance, contemporary stage spectacle, and psychological illusion.",
  
  careerBackgroundFacts: [
    "Began his professional career as a music director in 2006.",
    "Emerged as a prominent keyboard artist and keytar performer in 2017.",
    "Has composed more than 600 original songs in various languages.",
    "Has directed music and composed background scores for Malayalam cinema.",
    "Has performed live as a keyboard and keytar artist across international stages.",
    "Leading keytar performer at Classic Imperial Cruise since January 2024 (supplied resume)."
  ],

  paragraphs: [
    "Rooted in the rich cultural and musical landscape of Kerala, Sumesh Koottickal has carved an individualistic niche in contemporary Indian music. As a film music director, composer, and music arranger, his sonic signature balances sweeping melodic resonance with modern rhythmic drive and rich orchestral nuance.",
    "His film score composition credits include notable contributions to Malayalam cinema, such as composing the celebrated composition 'Shishiravaanil Pranayamukilaay' for the film Chinna Dada—an evocative track rendered by the legendary Padma Vibhushan Dr. K.J. Yesudas alongside Sharon Joseph, penned by lyricist Subhash Cherthala. His compositional repertoire also features full music direction and original scores for Vishudha Pusthakam, Salam P. Shaji's feature film Idukki Blasters, and Mr. Hacker, alongside independent singles distributed across international streaming platforms like Apple Music and Spotify.",
    "Beyond the recording studio, Sumesh transforms the live stage into an explosive arena of musical expression. As an accomplished keyboard artist and professional keytar player, he commands multi-tier synthesizer rigs and electric keytars, delivering high-voltage stage shows that blend blistering synth leads, traditional melodic contours, and interactive concert engagement.",
    "Complementing his musical craft is his dedication to Mentalism and psychological performance art. Blending keen observation, intuitive psychology, and stage illusion, his performance art presents audiences with a rare fusion of sound and psychological wonder."
  ],

  disciplines: [
    {
      title: "MUSIC DIRECTION & COMPOSITION",
      description:
        "Film scoring, orchestral arrangements, theme compositions, and contemporary studio productions with an emphasis on rich melodic hooks and acoustic-electronic fusion."
    },
    {
      title: "LIVE KEYTAR & KEYBOARD PERFORMANCE",
      description:
        "Dynamic live concert showcases featuring energetic keytar solos, complex multi-keyboard soundscaping, and synchronized audiovisual concert experiences."
    },
    {
      title: "MENTALISM & PERFORMANCE ART",
      description:
        "Intriguing mind-reading, psychological influence, and interactive stage presentations designed to challenge perception and ignite astonishment."
    }
  ],

  selectedFilmMusic: [
    {
      id: "chinnadhadha",
      title: "Chinnadhadha / Chinna Dada",
      role: "Music Direction & Film Score",
      year: "2016",
      image: "/images/films/film-chinnadhadha.jpg",
      fallbackImage: "https://i.ibb.co/6cBHB7h4/image.png",
      details:
        "Composed celebrated track 'Shishiravaanil Pranayamukilaay' rendered by Dr. K.J. Yesudas and Sharon Joseph with lyrics by Subhash Cherthala."
    },
    {
      id: "vishudha-pusthakam",
      title: "Vishudha Pusthakam",
      role: "Music Direction & Original Score",
      year: "2019",
      image: "/images/films/film-vishudha-pusthakam.jpg",
      fallbackImage: "https://i.ibb.co/8n1rxr14/image.png",
      details:
        "Original music direction and soundtrack composition for the Malayalam feature film project."
    },
    {
      id: "idukki-blasters",
      title: "Idukki Blasters",
      role: "Film Music Direction",
      year: "2017",
      image: "/images/films/film-idukki-blasters.jpg",
      fallbackImage: "https://i.ibb.co/fYksm4QS/image.png",
      details:
        "Full music direction and original feature film score for director Salam P. Shaji's production."
    },
    {
      id: "mr-hacker",
      title: "Mr. Hacker",
      role: "Music Direction & Songs",
      image: "/images/films/film-mr-hacker.jpg",
      fallbackImage: "https://i.ibb.co/M5VL8GW5/image.png",
      details:
        "Music direction and soundtrack composition, including popular tracks 'Manjuthulli Pole' and 'Chankinu Chanke'."
    }
  ],

  majorProjects: [
    {
      id: "indian-cricket-team",
      title: "Indian Cricket Team — Twenty20 World Cup 2021",
      role: "Official Theme Music Composer",
      description:
        "Composed theme music for the Indian Cricket Team for the Twenty20 World Cup 2021, according to the supplied resume.",
      image: "/images/achievements/indian-cricket-t20.jpg",
      fallbackImage: "https://i.ibb.co/8nQPxbqM/image.png"
    },
    {
      id: "kerala-blasters",
      title: "Kerala Blasters Football Club",
      role: "Theme Music Composer",
      description:
        "Composed theme music for Kerala Blasters, capturing the club's passionate football spirit and stadium energy, according to the supplied resume.",
      image: "/images/achievements/kerala-blasters.jpg",
      fallbackImage: "https://i.ibb.co/rBr0Nyk/image.png"
    },
    {
      id: "uruki-uruki",
      title: "Uruki Uruki Theernnidaam",
      role: "Popular Music Composition",
      description:
        "Celebrated composition that crossed more than 50 million YouTube views according to the supplied resume.",
      image: "/images/achievements/song-uruki-uruki.jpg",
      fallbackImage: "https://i.ibb.co/W48YX2xT/image.png",
      note: "Crossed 50+ Million YouTube views (supplied resume)",
      videoId: "2dGwbDnfmu4"
    }
  ],

  awardsAndRecognition: [
    {
      id: "urf-icon-award-2016",
      name: "Universal Record Forum — Icon Award",
      year: "2016",
      presentedBy: "Padma Shri Dr. K. J. Yesudas",
      image: "/images/awards/award-urf-icon-2016.jpg",
      fallbackImage: "https://i.ibb.co/WWMGxQXf/image.png",
      details:
        "Received the Universal Record Forum's Icon Award in 2016 from legendary playback singer Padma Shri Dr. K. J. Yesudas, according to the supplied resume."
    },
    {
      id: "jc-daniel-award-2013",
      name: "J. C. Daniel Film Welfare Award",
      year: "2013",
      image: "/images/awards/award-jc-daniel-2013.jpg",
      fallbackImage: "https://i.ibb.co/sdDNhWnb/image.png",
      details:
        "Awarded the prestigious J. C. Daniel Film Welfare Award in 2013 for excellence in musical and cinematic contribution."
    },
    {
      id: "illusion-artist-award-2010",
      name: "Illusion Artist Award — Best Music Director",
      year: "2010",
      image: "/images/awards/award-illusion-artist-2010.jpg",
      fallbackImage: "https://i.ibb.co/BH9rPXqK/image.png",
      details:
        "Conferred the Illusion Artist Award for Best Music Director in 2010, recognizing outstanding compositional skill."
    }
  ],

  livePerformances: [
    {
      id: "djibouti-prime-minister",
      event: "Performance Before the Prime Minister of Djibouti",
      role: "Indian Music Fusion Performer",
      image: "/images/performances/perf-djibouti-pm.jpg",
      fallbackImage: "https://i.ibb.co/chL8Xqy8/image.png",
      details:
        "Performed Indian Music Fusion before the Prime Minister of Djibouti, according to the supplied resume."
    },
    {
      id: "pepsi-award-night",
      event: "Pepsi Award Night",
      role: "Live Stage Performer",
      image: "/images/performances/perf-pepsi-award-night.jpg",
      fallbackImage: "https://i.ibb.co/1G4zVcrL/image.png",
      details:
        "Delivered a live stage performance at the prestigious Pepsi Award Night event."
    },
    {
      id: "asian-paints-award-night",
      event: "Asian Paints Award Night",
      role: "Concert Showcase Performer",
      image: "/images/performances/perf-asian-paints-darbar.jpg",
      fallbackImage: "https://i.ibb.co/SXNry05Z/image.png",
      details:
        "Performed high-energy musical set at Asian Paints Award Night (Asian Paints Darbar Awards)."
    }
  ],

  classicCruise: {
    title: "Classic Imperial Cruise",
    description:
      "Began working as a leading keytar performer at Classic Imperial Cruise in January 2024, delivering live instrumental performances for guests.",
    startDate: "January 2024"
  },

  careerMilestones: [
    {
      year: "2006",
      role: "Music Director",
      title: "Began Career as Music Director",
      description: "Commenced professional journey composing music for cinema, media, and recording projects."
    },
    {
      year: "2010",
      role: "Award Winner",
      title: "Illusion Artist Award — Best Music Director",
      description: "Honored with the Illusion Artist Award for Best Music Director."
    },
    {
      year: "2013",
      role: "Award Winner",
      title: "J. C. Daniel Film Welfare Award",
      description: "Received the prestigious J. C. Daniel Film Welfare Award for musical contributions."
    },
    {
      year: "2016",
      role: "Award Winner",
      title: "Universal Record Forum Icon Award",
      description: "Received the URF Icon Award from legendary playback singer Dr. K. J. Yesudas."
    },
    {
      year: "2017",
      role: "Keytar Performer",
      title: "Became Popular as a Keytar Performer",
      description: "Rose to widespread acclaim for electrifying live keytar performances and synth solos."
    },
    {
      year: "2021",
      role: "Theme Music Composer",
      title: "Indian Cricket Team — Twenty20 World Cup 2021",
      description: "Composed theme music for the Indian Cricket Team for the Twenty20 World Cup 2021, according to the supplied resume."
    },
    {
      year: "Jan 2024",
      role: "Keytar Artist",
      title: "Classic Imperial Cruise",
      description: "Began working as a keytar performer at Classic Imperial Cruise in January 2024, according to the supplied resume."
    }
  ],

  portrait: {
    src: "/images/artist-portrait-1.jpg",
    fallbackSrc: "https://i.ibb.co/ZR4TCXkh/dd93e88d-f105-43d1-af6d-b5d7a29ba1c3.jpg",
    alt: "Sumesh Koottickal, Music Director and Keytar Performer",
    caption: "Sumesh Koottickal — Music Director & Keytar Performer"
  },

  theevraBand: {
    name: "Theevra",
    description: "Association with Theevra, a musical group known for live performances and keytar-driven fusion music.",
    image: "/images/theevra-band.jpg",
    alt: "Theevra band"
  },

  notableSingles: [
    "Uruki Uruki Theernnidaam (50M+ Views)",
    "Ore Oru Rajavu Messi",
    "Swargam Thurannu Nee Irangeedane",
    "Kalyani",
    "Amsham",
    "Nishani"
  ]
};
