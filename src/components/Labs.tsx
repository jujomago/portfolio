import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { labsData } from '../data/portfolio';
import styles from '../styles/Labs.module.css';

const Labs = () => {
    const { t, language } = useLanguage();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="labs" className={styles.labs}>
            <div className={styles.labsInner}>
                <div className={`${styles.toggleContainer} ${isExpanded ? styles.expanded : ''}`}>
                    <button
                        className={`${styles.expandBtn} ${isExpanded ? styles.active : ''}`}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                            <path d="M12 5v14M5 12l7 7 7-7" />
                        </svg>
                        {isExpanded ? t('labs.hide') : t('labs.show')}
                    </button>
                </div>

                <div className={`${styles.expandableContent} ${isExpanded ? styles.active : ''}`}>
                    <div className={styles.contentInner}>
                        <div className={styles.labsHeader}>
                            <span className="sectionTag">{t('labs.tag')}</span>
                            <h2 className="sectionTitle">{t('labs.title')}</h2>
                        </div>

                        <div className={styles.labsGrid}>
                            {labsData.map((lab) => (
                                <div key={lab.id} className={styles.labCard}>
                                    <h3 className={styles.labTitle}>{lab.title[language]}</h3>
                                    <p className={styles.labDesc}>{lab.description[language]}</p>

                                    <div className={styles.labTags}>
                                        {lab.tags.map((tag) => (
                                            <span key={tag} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>

                                    <div className={styles.labLinks}>
                                        {lab.githubUrl && lab.githubUrl !== '#' && (
                                            <a
                                                href={lab.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                            >
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                </svg>
                                                GitHub
                                            </a>
                                        )}
                                        {lab.demoUrl && lab.demoUrl !== '#' && (
                                            <a
                                                href={lab.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                            >
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                                Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Labs;
