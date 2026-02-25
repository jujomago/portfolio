import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillsData } from '../data/portfolio';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  const { t } = useLanguage();
  const skillsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className={styles.skillsInner}>
        <div className={styles.skillsHeader}>
          <span className="sectionTag" data-animate="section-element">{t('skills.tag')}</span>
          <h2 className="sectionTitle" data-animate="section-element">{t('skills.title')}</h2>
        </div>

        <div className={styles.skillsGrid} ref={skillsRef}>
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.skillCategory} data-animate="skill-category">
              <div className={styles.skillCatTitle}>
                {t(`skills.${category.title.toLowerCase().split(' ')[0]}`)}
              </div>

              <div className={styles.skillItems}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <div className={styles.skillBarWrap}>
                      <div
                        className={styles.skillBar}
                        data-width={skill.percentage}
                        data-animate="skill-bar"
                      />
                    </div>
                    <span className={styles.skillPct}>{skill.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
