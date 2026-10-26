# Sumesh Koottickal — Project References & Asset Registry

This file documents all verified public sources, biography leads, image assets, and configuration points used for the official website of **Sumesh Koottickal** (Music Director · Performer · Mentalist).

---

## 1. Official Profiles & Leads

| Source | Description | URL | Verified Information |
| :--- | :--- | :--- | :--- |
| **VKARD PRO** | Official Digital Business Card | [https://www.vkard.pro/sumesh-koottickal](https://www.vkard.pro/sumesh-koottickal) | Established artist title (*Music Director / Performer & Mentalist*), primary phone (`+91 8113070209` / `+91 9656727367`), email (`koottickalsumesh@gmail.com`), address in Elamakkara, Ernakulam, and verified social links. |
| **Apple Music** | Official Artist Catalog | [https://music.apple.com/us/artist/sumesh-koottickal/1412084049](https://music.apple.com/us/artist/sumesh-koottickal/1412084049) | Catalog artist ID `1412084049`, verified releases including *"Swargam Thurannu Nee Irangeedane - Single"*, regional Indian music distributions. |
| **Filmibeat Malayalam** | Malayalam Cinema Database | [https://malayalam.filmibeat.com/celebs/sumesh-kuttikkal/biography.html](https://malayalam.filmibeat.com/celebs/sumesh-kuttikkal/biography.html) | Verified credits as Music Director for the song *"Shishiravaanil Pranayamukilaay"* in the 2016 film *Chinna Dada* (sung by Dr. K.J. Yesudas & Sharon Joseph, lyrics by Subhash Cherthala), and music direction for *Idukki Blasters* directed by Salam P. Shaji. |
| **YouTube** | Official Video Channel | [https://www.youtube.com/@Sumeshkoottickal](https://www.youtube.com/@Sumeshkoottickal) | Official video presence for live concert keytar performances and stage showcases. |
| **Instagram** | Official Social Profile | [https://www.instagram.com/sumeshkoottickal/](https://www.instagram.com/sumeshkoottickal/) | Stage highlights, announcements, and mentalism performance teasers. |
| **Facebook** | Official Facebook Page | [https://www.facebook.com/share/1CE5V8tXRq/](https://www.facebook.com/share/1CE5V8tXRq/) | Concert announcements and event media. |

---

## 2. Artist Photograph Registry

All supplied photographs have been extracted directly from the provided links and downloaded to `public/images/`. Remote fallback URLs are also preserved in `src/data/artist.ts` and `src/data/gallery.ts`.

| Asset ID | Local File | Original Link | Direct Image Link | Description / Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Image** | `public/images/hero-keytar.png` | `https://ibb.co/Zpj1YM51` | `https://i.ibb.co/q3SFWrKF/Electric-Blue-Keytar-Performance.png` | Main homepage hero image featuring Sumesh Koottickal performing live with custom electric blue keytar. |
| **Artist Photo 1** | `public/images/artist-portrait-1.jpg` | `https://ibb.co/mrZz7TMH` | `https://i.ibb.co/ZR4TCXkh/dd93e88d-f105-43d1-af6d-b5d7a29ba1c3.jpg` | Formal studio artist portrait (featured on Biography page). |
| **Artist Photo 2** | `public/images/artist-portrait-2.jpg` | `https://ibb.co/jPC2gKNq` | `https://i.ibb.co/B5hxqDpv/9c328fdb-036a-4e68-94ab-3bc3128fc66c.jpg` | Promotional profile headshot (featured in Gallery). |
| **Artist Photo 3** | `public/images/artist-stage-1.jpg` | `https://ibb.co/gF4WTkKn` | `https://i.ibb.co/rfdp6DrW/Whats-App-Image-2026-10-24-at-4-07-12-PM-1.jpg` | Stage performance concert lighting (featured in Gallery). |
| **Artist Photo 4** | `public/images/artist-performance-1.jpg` | `https://ibb.co/S4gcN5Jq` | `https://i.ibb.co/MxHfnZ9q/Whats-App-Image-2026-10-24-at-4-07-12-PM.jpg` | Live keytar momentum on stage (featured in Gallery). |
| **Artist Photo 5** | `public/images/artist-performance-2.jpg` | `https://ibb.co/Mx5Kr9Tv` | `https://i.ibb.co/W4p7Zs9h/Whats-App-Image-2026-10-24-at-4-07-11-PM-1.jpg` | Audience and stage interaction (featured in Gallery). |
| **Artist Photo 6** | `public/images/artist-stage-2.jpg` | `https://ibb.co/x8JQshhv` | `https://i.ibb.co/KzFHG66Z/Whats-App-Image-2026-10-24-at-4-07-11-PM.jpg` | Concert stage finale (featured in Gallery). |

---

## 3. How to Update Content

All content is centralized in `src/data/` so that you do not have to edit React components directly:

1. **General Artist & Contact Information**:
   - File: `src/data/artist.ts`
   - Edit phone, email, address, tagline, or social links.

2. **Biography & Career Milestones**:
   - File: `src/data/biography.ts`
   - Edit paragraphs, career milestones, or verified works.

3. **Music Projects & Streaming Links**:
   - File: `src/data/music.ts`
   - Add new tracks, album releases, YouTube video URLs, or Apple Music/Spotify links.

4. **Events & Concert Dates**:
   - File: `src/data/events.ts`
   - Add upcoming or past tour dates. If `upcomingEvents` is empty, it automatically shows the elegant *"UPCOMING PERFORMANCES WILL BE ANNOUNCED SOON"* notice.

5. **Gallery Photographs**:
   - File: `src/data/gallery.ts`
   - Add new items, assign categories (*Live Performances*, *Portraits*, *Music & Studio*, *Behind the Scenes*), and provide captions.
