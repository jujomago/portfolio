import { useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useTypingEffect } from '../hooks/useTypingEffect';
import Particles from './Particles';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  const { t } = useLanguage();
  const { text } = useTypingEffect('es');
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section id="hero" className={styles.hero} ref={heroRef}>
      <Particles />

      <div className={styles.heroContent}>
        <span className={styles.heroLabel} data-animate="hero-label">
          {t('hero.label')}
        </span>

        <h1 className={styles.heroName} data-animate="hero-name">
          <span className={styles.line}>Josue</span>
          <span className={`${styles.line} ${styles.accentWord}`}>Mancilla</span>
        </h1>

        <p className={styles.heroSubtitle} data-animate="hero-subtitle">
          <span id="typing-text">{text}</span>
          <span className={styles.typingCursor}>|</span>
        </p>

        <a href="#projects" className={styles.heroCta} data-animate="hero-cta">
          {t('hero.cta')}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      <div className={styles.scrollIndicator} id="scroll-ind" data-animate="scroll-indicator">
        <span>{t('hero.scroll')}</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
};

export default Hero;
