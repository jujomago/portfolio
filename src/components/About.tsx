import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from '../styles/About.module.css';
import mifoto from '../assets/mifoto.jpg';

const About = () => {
  const { t } = useLanguage();
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
            <span className={styles.certBadge}>
              🏅 EF SET English Certificate · 2023
            </span>
            <span className={styles.certBadge}>
              🏅 Scrum Master Certificate · 2022
            </span>
          </div>
        </div>

        <div className={styles.aboutVisual} data-animate="section-element">
          <div className={styles.aboutImgWrap}>
            <div className={styles.aboutImgContainer}>
              <img src={mifoto} alt="Josue Mancilla" className={styles.aboutImg} />
            </div>
            <div className={styles.aboutImgDeco}></div>
            <div className={styles.aboutImgDeco2}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
