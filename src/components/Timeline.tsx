import { useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { timelineData } from '../data/portfolio';
import styles from '../styles/Timeline.module.css';

const Timeline = () => {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);

  const renderTimelineItems = () => {
    const items = [];
    let itemIndex = 0;

    for (let i = 0; i < timelineData.length * 2 - 1; i++) {
      if (i % 2 === 0 && itemIndex < timelineData.length) {
        // Timeline item
        const item = timelineData[itemIndex];
        items.push(
          <div key={`item-${itemIndex}`} className={`${styles.timelineItem} ${styles[item.position]}`} data-animate="timeline-item">
            <span className={styles.timelineDate}>
              {t(`timeline.e${item.id}.date`)}
            </span>
            <h3 className={styles.timelineEvent} data-animate="section-element">
              {t(`timeline.e${item.id}.title`)}
            </h3>
            <p className={styles.timelineDetail} data-animate="section-element">
              {t(`timeline.e${item.id}.desc`)}
            </p>
          </div>
        );
        itemIndex++;
      } else {
        // Empty spacer or timeline line
        if (i === 1) {
          items.push(
            <div key={`line-${i}`} className={styles.timelineLine}>
              <div className={styles.timelineDot} style={{ top: '0.2rem' }}></div>
              <div className={styles.timelineDot} style={{ top: '20%' }}></div>
              <div className={styles.timelineDot} style={{ top: '40%' }}></div>
              <div className={styles.timelineDot} style={{ top: '60%' }}></div>
              <div className={styles.timelineDot} style={{ top: '80%' }}></div>
            </div>
          );
        } else {
          items.push(
            <div key={`empty-${i}`} className={`${styles.timelineItem} ${styles.empty}`}></div>
          );
        }
      }
    }

    return items;
  };

  return (
    <section id="timeline" className={styles.timeline}>
      <div className={styles.timelineInner}>
        <span className={styles.sectionTag} data-animate="section-element">{t('timeline.tag')}</span>
        <h2 className={styles.sectionTitle} data-animate="section-element">{t('timeline.title')}</h2>

        <div className={styles.timelineWrap} ref={timelineRef}>
          {renderTimelineItems()}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
