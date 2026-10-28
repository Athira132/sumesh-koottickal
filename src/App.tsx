import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyContact } from './components/StickyContact';
import { Home } from './pages/Home';
import { Biography } from './pages/Biography';
import { Music } from './pages/Music';
import { Events } from './pages/Events';
import { Mentalism } from './pages/Mentalism';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

import { videoPlaybackManager } from './utils/videoPlaybackManager';

// Scroll to top and pause playing videos on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    videoPlaybackManager.pauseAll();
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-white selection:text-black">
      <ScrollToTop />
      
      {/* Shared Minimalist Hamburger Header across all pages */}
      <Header />

      {/* Main Routed Content */}
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/music" element={<Music />} />
          <Route path="/events" element={<Events />} />
          <Route path="/mentalism" element={<Mentalism />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Persistent Contact Shortcut Button */}
      <StickyContact />

      {/* Shared Minimalist Footer across all pages */}
      <Footer />
    </div>
  );
}

export default App;
