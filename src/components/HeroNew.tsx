import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import Particles from './Particles';
import avatar from '../assets/avatar.png';
import styles from '../styles/HeroNew.module.css';

type CodePartType = 'kw' | 'fn' | 'str' | 'cm' | 'acc' | 'tx';
type CodePart = { type: CodePartType; text: string };
type CodeLine = { parts: CodePart[]; indent?: number };

const stackItems = ['React', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'];



const colorStyles: Record<CodePartType, React.CSSProperties> = {
  kw: { color: 'var(--code-kw)' },
  fn: { color: 'var(--code-fn)' },
  str: { color: 'var(--code-str)' },
  cm: { color: 'var(--code-cm)', fontStyle: 'italic' },
  acc: { color: 'var(--accent)' },
  tx: { color: 'var(--code-tx)' },
};

const HeroNew = () => {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const codeBodyRef = useRef<HTMLDivElement>(null);
  const heroCodeRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState('');

  const codeLines: CodeLine[] = [
    { parts: [{ type: 'kw', text: 'const' }, { type: 'tx', text: ' ' }, { type: 'acc', text: t('hero.code.developer') }, { type: 'tx', text: ' = ' }, { type: 'tx', text: '{' }] },
    { parts: [{ type: 'fn', text: t('hero.code.name') }, { type: 'tx', text: ': ' }, { type: 'str', text: '"Josue Mancilla"' }, { type: 'tx', text: ',' }], indent: 1 },
    { parts: [{ type: 'fn', text: t('hero.code.role') }, { type: 'tx', text: ': ' }, { type: 'str', text: '"Senior Fullstack Dev"' }, { type: 'tx', text: ',' }], indent: 1 },
    { parts: [{ type: 'fn', text: t('hero.code.experience') }, { type: 'tx', text: ': ' }, { type: 'acc', text: '10' }, { type: 'tx', text: ',' }], indent: 1 },
    { parts: [{ type: 'fn', text: 'stack' }, { type: 'tx', text: ': [' }, { type: 'str', text: '"React"' }, { type: 'tx', text: ', ' }, { type: 'str', text: '"TS"' }, { type: 'tx', text: ', ' }, { type: 'str', text: '"Node"' }, { type: 'tx', text: '],' }], indent: 1 },
    { parts: [{ type: 'fn', text: t('hero.code.location') }, { type: 'tx', text: ': ' }, { type: 'str', text: '"Bolivia 🇧🇴"' }, { type: 'tx', text: ',' }], indent: 1 },
    { parts: [{ type: 'fn', text: t('hero.code.available') }, { type: 'tx', text: ': ' }, { type: 'kw', text: 'true' }, { type: 'tx', text: ',' }], indent: 1 },
    { parts: [{ type: 'tx', text: '};' }] },
    { parts: [] },
    { parts: [{ type: 'cm', text: `// ${t('hero.code.learning')} 🚀` }] },
  ];

  const fullText = language === 'es'
    ? 'Creo experiencias digitales con código limpio, arquitectura escalable y atención al detalle.'
    : 'I craft digital experiences with clean code, scalable architecture, and attention to detail.';

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setTypedText('');
    let index = 0;
    const interval = window.setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        window.clearInterval(interval);
      }
    }, 30);
    return () => window.clearInterval(interval);
  }, [language, fullText]);

  useEffect(() => {
    if (hasAnimated) return;

    const ctx = gsap.context(() => {
      // 1. Final Block entry (delay 1.2s already handled by CSS/Parent but letting's be explicit)
      gsap.fromTo(heroCodeRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 1.2, ease: 'power2.out' }
      );

      // 2. Lines typing (staggered)
      // Overall delay: 1.2s (block) + 1.5s (lines start) = 2.7s
      gsap.fromTo(`.${styles.codeLine}`,
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          duration: 0.2,
          stagger: 0.08,
          delay: 2.7,
          ease: 'power2.out',
          onComplete: () => setHasAnimated(true)
        }
      );
    }, heroCodeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className={styles.hero} ref={heroRef}>
      <Particles />

      <div className={styles.heroInner}>
        {/* LEFT */}
        <div className={styles.heroLeft}>
          <span className={styles.heroGreeting} data-animate="hero-greeting">
            {t('hero.greeting')}
          </span>

          <h1 className={styles.heroRole} data-animate="hero-role">
            <span>{t('hero.role1')}</span>
            <br />
            <span className={styles.accentWord}>{t('hero.role2')}</span>
          </h1>

          <p className={styles.heroDesc} data-animate="hero-desc">
            <span>{typedText}</span>
            <span className={styles.typingCursor}>|</span>
          </p>

          <div className={styles.heroActions} data-animate="hero-actions">
            <a href="#projects" className={styles.heroCta}>
              {t('hero.cta')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#contact" className={styles.heroCtaGhost}>
              {t('hero.ctaContact')}
            </a>
          </div>

          <div className={styles.heroStack} data-animate="hero-stack">
            {stackItems.map((tech) => (
              <span key={tech} className={styles.heroStackBadge}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.heroRight} data-animate="hero-right">
          <div className={styles.heroAvatarWrap}>
            <div className={styles.heroAvatar}>
              <img src={avatar} alt="Josue Mancilla" className={styles.avatarImg} />
            </div>
            <div className={styles.heroAvatarRing}></div>
          </div>

          <div className={styles.heroCode} ref={heroCodeRef}>
            <div className={styles.codeHeader}>
              <span className={`${styles.codeDot} ${styles.codeDotRed}`}></span>
              <span className={`${styles.codeDot} ${styles.codeDotYellow}`}></span>
              <span className={`${styles.codeDot} ${styles.codeDotGreen}`}></span>
              <span className={styles.codeFilename}>josue.ts</span>
            </div>
            <div className={styles.codeBody} ref={codeBodyRef}>
              {codeLines.map((line, lIdx) => (
                <div
                  key={lIdx}
                  className={styles.codeLine}
                  style={{
                    paddingLeft: line.indent ? `${line.indent * 20}px` : 0,
                    opacity: hasAnimated ? 1 : 0
                  }}
                >
                  <span className={styles.ln}>{lIdx + 1}</span>
                  {line.parts.map((part, pIdx) => (
                    <span key={pIdx} style={{ color: colorStyles[part.type]?.color || 'inherit' }}>
                      {part.text}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} id="scroll-ind" data-animate="scroll-indicator">
        <span>{t('hero.scroll')}</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
};

export default HeroNew;
