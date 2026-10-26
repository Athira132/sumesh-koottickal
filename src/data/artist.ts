export interface SocialLinks {
  instagram: string;
  youtube: string;
  facebook: string;
  vcard: string;
  appleMusic: string;
  email: string;
  phone: string;
  displayPhone: string;
}

export interface ArtistInfo {
  name: string;
  shortName: string;
  title: string;
  descriptor: string;
  tagline: string;
  location: {
    address: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullFormatted: string;
    googleMapsUrl: string;
  };
  contact: {
    email: string;
    phone: string;
    displayPhone: string;
  };
  socials: SocialLinks;
  heroImage: {
    src: string;
    fallbackSrc: string;
    alt: string;
    title: string;
  };
  pageHeroImage: {
    src: string;
    fallbackSrc: string;
    alt: string;
    title: string;
  };
}

export const ARTIST_DATA: ArtistInfo = {
  name: "SUMESH KOOTTICKAL",
  shortName: "SK",
  title: "Music Director · Performer · Mentalist",
  descriptor: "MUSIC DIRECTOR · PERFORMER · MENTALIST",
  tagline: "Sonic narratives, explosive live keytar performances, and hypnotic stage presence.",
  location: {
    address: "Bhadra 49/82D, Vivekananda Nagar, VNRA 26, Elamakkara SO",
    city: "Ernakulam",
    state: "Kerala",
    pincode: "682026",
    country: "India",
    fullFormatted: "Bhadra 49/82D, Vivekananda Nagar, VNRA 26, Elamakkara SO, Ernakulam, Kerala, India – 682026.",
    googleMapsUrl: "https://maps.google.com/?q=Vivekananda+Nagar,+Elamakkara,+Ernakulam,+Kerala+682026"
  },
  contact: {
    email: "koottickalsumesh@gmail.com",
    phone: "+918113070209",
    displayPhone: "+91 8113070209"
  },
  socials: {
    instagram: "https://www.instagram.com/sumeshkoottickal/",
    youtube: "https://www.youtube.com/@Sumeshkoottickal",
    facebook: "https://www.facebook.com/share/1CE5V8tXRq/",
    vcard: "https://www.vkard.pro/sumesh-koottickal",
    appleMusic: "https://music.apple.com/us/artist/sumesh-koottickal/1412084049",
    email: "koottickalsumesh@gmail.com",
    phone: "+918113070209",
    displayPhone: "+91 8113070209"
  },
  heroImage: {
    src: "/images/hero-keytar.png",
    fallbackSrc: "https://i.ibb.co/q3SFWrKF/Electric-Blue-Keytar-Performance.png",
    alt: "Sumesh Koottickal performing live with custom electric blue keytar",
    title: "Electric Blue Keytar Live Performance"
  },
  pageHeroImage: {
    src: "/images/page-hero.jpg",
    fallbackSrc: "https://i.ibb.co/DPwR983z/image.png",
    alt: "Sumesh Koottickal stage lighting atmospheric hero banner",
    title: "Sumesh Koottickal Stage Atmospheric Banner"
  }
};
