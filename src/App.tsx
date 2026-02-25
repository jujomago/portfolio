  import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './context/LanguageContext';
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

function AppContent() {
  const {  } = useTheme();
  const { language } = useLanguage();
  const { cursorDot, canvasRef } = useCursor();

  useGSAPAnimations();

  useEffect(() => {
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
      <div ref={cursorDot} className={styles.cursor}></div>
      <canvas ref={canvasRef} className={styles.trailCanvas}></canvas>

      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />

      <footer>
        <div className={styles.footerName}>Josue Mancilla</div>
        <div className={styles.footerTagline}>{language === 'es' ? 'Construido con pasión y café ☕' : 'Built with passion & caffeine ☕'}</div>
        <div className={styles.footerCopy}>© 2026 · All rights reserved</div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
