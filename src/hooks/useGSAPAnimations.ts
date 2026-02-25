import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  useEffect(() => {
    // Hero entrance animations
    const heroTl = gsap.timeline({ delay: 0.3 });

    heroTl
      .fromTo('[data-animate="hero-label"]',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo('[data-animate="hero-name"]',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo('[data-animate="hero-subtitle"]',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo('[data-animate="hero-cta"]',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo('[data-animate="scroll-indicator"]',
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        '-=0.2'
      );

    // Section fade-ins
    const sectionElements = document.querySelectorAll('[data-animate="section-element"]');

    sectionElements.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none'
          }
        }
      );
    });

    // Skill bars animation
    const skillCategories = document.querySelectorAll('[data-animate="skill-category"]');
    skillCategories.forEach((cat) => {
      ScrollTrigger.create({
        trigger: cat,
        start: 'top 80%',
        onEnter: () => {
          const bars = cat.querySelectorAll('[data-animate="skill-bar"]');
          bars.forEach((bar) => {
            const width = (bar as HTMLElement).dataset.width;
            gsap.to(bar, {
              width: width + '%',
              duration: 1.5,
              ease: 'power3.inOut'
            });
          });
        }
      });
    });

    // Project cards staggered animation
    const projectCards = document.querySelectorAll('[data-animate="project-card"]');
    projectCards.forEach((card) => {
      gsap.fromTo(card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%'
          }
        }
      );
    });

    // Timeline items animation
    const timelineItems = document.querySelectorAll('[data-animate="timeline-item"]');
    timelineItems.forEach((item) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%'
        }
      });
    });

    // Counter animation for stats
    const animateCounter = (el: Element, target: number) => {
      let current = 0;
      const step = target / 40;

      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        (el as HTMLElement).textContent = Math.floor(current) + '+';

        if (current >= target) {
          clearInterval(timer);
        }
      }, 40);
    };

    const statContainers = document.querySelectorAll('[data-animate="section-element"]');
    statContainers.forEach(container => {
      if (container.querySelector('[data-animate="stat-num"]')) {
        ScrollTrigger.create({
          trigger: container,
          start: 'top 80%',
          onEnter: () => {
            const statNums = container.querySelectorAll('[data-animate="stat-num"]');
            statNums.forEach((el) => {
              const target = parseInt((el as HTMLElement).dataset.target || '0');
              animateCounter(el, target);
            });
          }
        });
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      heroTl.kill();
    };
  }, []);
};
