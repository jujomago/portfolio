import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/portfolio';
import ProjectSlider from './ProjectSlider';
import TechBadge from './TechBadge';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const { t } = useLanguage();
  const projectsRef = useRef<HTMLDivElement>(null);

  const hasAnyImages = projectsData.some(p => p.images && p.images.length > 0);

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className={styles.projectsInner}>
        <div className={styles.projectsHeader}>
          <span className="sectionTag" data-animate="section-element">{t('projects.tag')}</span>
          <h2 className="sectionTitle" data-animate="section-element">{t('projects.title')}</h2>
        </div>

        <div className={styles.projectsGrid} ref={projectsRef}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.projectCard} data-animate="project-card">
              {hasAnyImages && <ProjectSlider images={project.images} />}

              <div className={styles.projectNum}>
                {String(project.id).padStart(2, '0')}
              </div>

              <h3 className={styles.projectTitle}>
                {t(`projects.p${project.id}.title`)}
              </h3>

              <p className={styles.projectDesc}>
                {t(`projects.p${project.id}.desc`)}
              </p>

              <div className={styles.projectStack}>
                {project.stack.map((tech, techIndex) => (
                  <TechBadge key={techIndex} tech={tech} />
                ))}
              </div>

              <div className={styles.projectLinks}>
                <a
                  href={project.demoUrl}
                  className={styles.btnPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('projects.demo')}
                </a>
                <a
                  href={project.githubUrl}
                  className={styles.btnGhost}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
