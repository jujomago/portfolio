
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from '../styles/Projects.module.css';

const ProjectSlider = ({ images }: { images?: string[] }) => {
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

    if (images.length === 1) {
        return (
            <div className={styles.sliderContainer}>
                <img src={images[0]} alt="Project preview" className={styles.sliderImage} />
            </div>
        );
    }

    return (
        <div className={styles.sliderContainer}>
            <Swiper
                modules={[Navigation, Pagination, EffectFade]}
                effect="fade"
                loop={true}
                navigation={{
                    nextEl: `.${styles.sliderBtnNext}`,
                    prevEl: `.${styles.sliderBtnPrev}`,
                }}
                pagination={{
                    el: `.${styles.sliderDots}`,
                    clickable: true,
                    bulletClass: styles.sliderDot,
                    bulletActiveClass: styles.sliderDotActive,
                }}
                className={styles.swiperRoot}
            >
                {images.map((img, idx) => (
                    <SwiperSlide key={idx} className={styles.swiperSlideItem}>
                        <img src={img} alt={`Project preview ${idx}`} className={styles.sliderImage} />
                    </SwiperSlide>
                ))}

                <button className={styles.sliderBtnPrev} aria-label="Previous image">
                    &lsaquo;
                </button>
                <button className={styles.sliderBtnNext} aria-label="Next image">
                    &rsaquo;
                </button>
                <div className={styles.sliderDots}></div>
            </Swiper>
        </div>
    );
};

export default ProjectSlider;
