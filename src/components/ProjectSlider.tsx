import { useState } from 'react';
import styles from '../styles/Projects.module.css';

const ProjectSlider = ({ images }: { images?: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) {
        return (
            <div className={`${styles.sliderContainer} ${styles.placeholder}`}>
                <div className={styles.placeholderDeco1}></div>
                <div className={styles.placeholderDeco2}></div>
                <div className={styles.placeholderIcon}>
                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                </div>
            </div>
        );
    }

    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className={styles.sliderContainer}>
            <img src={images[currentIndex]} alt="Project preview" className={styles.sliderImage} />
            {images.length > 1 && (
                <>
                    <button className={styles.sliderBtnPrev} onClick={prevImage} aria-label="Previous image">
                        &lsaquo;
                    </button>
                    <button className={styles.sliderBtnNext} onClick={nextImage} aria-label="Next image">
                        &rsaquo;
                    </button>
                    <div className={styles.sliderDots}>
                        {images.map((_, idx) => (
                            <span
                                key={idx}
                                className={`${styles.sliderDot} ${idx === currentIndex ? styles.sliderDotActive : ''}`}
                                onClick={() => setCurrentIndex(idx)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectSlider;
