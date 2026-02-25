import { useEffect, useRef } from 'react';
import { marqueeItems } from '../data/portfolio';
import styles from '../styles/Marquee.module.css';

const Marquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trackRef.current) {
      let mHtml = '';
      for (let i = 0; i < 3; i++) {
        marqueeItems.forEach(item => {
          mHtml += `<div class="${styles.marqueeItem}">${item}<span class="${styles.dot}"></span></div>`;
        });
      }
      trackRef.current.innerHTML = mHtml;
    }
  }, []);

  return (
    <div className={styles.marqueeSection}>
      <div className={styles.marqueeTrack} ref={trackRef}></div>
    </div>
  );
};

export default Marquee;
