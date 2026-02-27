import { LanguageProvider } from './context/LanguageContext';

import { useLanguage } from './context/LanguageContext';
import { useCursor } from './hooks/useCursor';
import Navigation from './components/Navigation';
import HeroNew from './components/HeroNew';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import SEO from './components/SEO';
import { useGSAPAnimations } from './hooks/useGSAPAnimations';
import styles from './styles/global.module.css';

function AppContent() {

  const { language } = useLanguage();
  const { cursorDot, canvasRef } = useCursor();

  useGSAPAnimations();

  return (
    <div className={styles.app}>
      <SEO />
      <div ref={cursorDot} className={styles.cursor}></div>
      <canvas ref={canvasRef} className={styles.trailCanvas}></canvas>

      <Navigation />
      <HeroNew />
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
