import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import MediaModal from './MediaModal';
import styles from '../styles/About.module.css';
import mifoto from '../assets/mifoto.jpg';

const About = () => {
  const { t, language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState<{
    url: string;
    title: string;
    type: 'pdf' | 'image';
    showDownload: boolean;
  } | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [language]);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { target: 10, label: 'about.stat1' },
    { target: 15, label: 'about.stat2' },
    { target: 20, label: 'about.stat3' }
  ];

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={styles.aboutInner}>
        <div>
          <span className="sectionTag" data-animate="section-element">{t('about.tag')}</span>
          <h2 className="sectionTitle" data-animate="section-element">{t('about.title')}</h2>

          <p className={styles.aboutText} data-animate="section-element">{t('about.p1')}</p>
          <p className={styles.aboutText} data-animate="section-element">{t('about.p2')}</p>
          <p className={styles.aboutText} data-animate="section-element">{t('about.p3')}</p>

          <div className={styles.aboutStats} ref={statsRef} data-animate="section-element">
            {stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <span className={styles.statNum} data-target={stat.target} data-animate="stat-num">
                  0
                </span>
                <span className={styles.statLabel}>
                  {t(stat.label)}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.langBadge} data-animate="section-element">
            🇺🇸 &nbsp;<strong>English B2+</strong>&nbsp; · &nbsp;
            <span>{t('about.english')}</span>
          </div>

          <div className={styles.certBadges} data-animate="section-element">
            <button
              className={styles.certBadge}
              onClick={() => setActiveMedia({
                url: '/efset.pdf',
                title: 'EF SET English Certificate',
                type: 'pdf',
                showDownload: true
              })}
              title="Click to view certificate"
            >
              🏅 EF SET English Certificate · 2023
            </button>
            <button
              className={styles.certBadge}
              onClick={() => setActiveMedia({
                url: '/scrummaster.jpg', // Ejemplo de imagen
                title: 'Scrum Master Certificate',
                type: 'image',
                showDownload: false // Opcional
              })}
            >
              🏅 Scrum Master Certificate · 2022
            </button>
          </div>
        </div>

        <div className={styles.aboutVisual} data-animate="section-element">
          <div className={styles.aboutImgWrap}>
            <div className={`${styles.aboutImgContainer} ${isPlaying ? styles.videoActive : ''}`}>
              <img src={mifoto} alt="Josue Mancilla" className={styles.aboutImg} />
              <video
                ref={videoRef}
                className={styles.aboutVideo}
                onEnded={() => setIsPlaying(false)}
                playsInline
              >
                <source src={`/presentation-${language}.mp4`} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>

              <button
                className={`${styles.playButton} ${isPlaying ? styles.isPlaying : ''}`}
                onClick={handlePlay}
                aria-label={isPlaying ? "Pausar video" : "Reproducir video de presentación"}
              >
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
            <div className={styles.aboutImgDeco}></div>
            <div className={styles.aboutImgDeco2}></div>
          </div>

          <div className={styles.aboutActions} data-animate="section-element">
            <button
              className={styles.resumeBtn}
              onClick={() => setIsResumeOpen(true)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              {t('about.resume')}
            </button>
          </div>
        </div>
      </div>

      <MediaModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        fileUrl="/resume.pdf"
        title="Resume / CV"
        type="pdf"
      />

      <MediaModal
        isOpen={activeMedia !== null}
        onClose={() => setActiveMedia(null)}
        fileUrl={activeMedia?.url || ''}
        title={activeMedia?.title || ''}
        type={activeMedia?.type}
        showDownload={activeMedia?.showDownload}
      />
    </section>
  );
};

export default About;
