  import { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import { useCursor } from './hooks/useCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import { useGSAPAnimations } from './hooks/useGSAPAnimations';
import styles from './styles/global.module.css';

function App() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { cursorDot, canvasRef } = useCursor();

  useGSAPAnimations();

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@300;400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className={styles.app}>
      {/* Custom Cursor */}
      <div ref={cursorDot} className={styles.cursor}></div>
      <canvas ref={canvasRef} className={styles.trailCanvas}></canvas>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Marquee */}
      <Marquee />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Timeline Section */}
      <Timeline />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer>
        <div className={styles.footerName}>Josue Mancilla</div>
        <div className={styles.footerTagline}>{language === 'es' ? 'Construido con pasión y café ☕' : 'Built with passion & caffeine ☕'}</div>
        <div className={styles.footerCopy}>© 2026 · All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
