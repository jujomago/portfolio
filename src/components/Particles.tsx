import { useEffect, useRef } from 'react';
import { tsParticles } from 'tsparticles-engine';

const Particles = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getParticleColors = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      return isLight
        ? { dots: ["#d4845a", "#c0a060", "#e8d8c8"], link: "#d4845a" }
        : { dots: ["#00ffc8", "#00a8ff", "#ffffff"], link: "#00ffc8" };
    };

    const initParticles = async () => {
      if (!particlesRef.current) return;

      const colors = getParticleColors();
      
      await tsParticles.load("tsparticles", {
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 90, density: { enable: true, value_area: 800 } },
          color: { value: colors.dots },
          opacity: { value: 0.65, random: true, anim: { enable: true, speed: 0.8, opacity_min: 0.2 } },
          size: { value: 2.5, random: true, anim: { enable: true, speed: 1, size_min: 0.8 } },
          links: { enable: true, distance: 150, color: colors.link, opacity: 0.28, width: 1.2 },
          move: { enable: true, speed: 0.8, direction: "none", random: true, out_mode: "out" }
        },
        interactivity: {
          events: { 
            onhover: { enable: true, mode: "grab" }, 
            onclick: { enable: true, mode: "push" } 
          },
          modes: { 
            grab: { distance: 160, links: { opacity: 0.6 } }, 
            push: { particles_nb: 4 } 
          }
        }
      });
    };

    initParticles();

    // Handle theme changes
    const handleThemeChange = () => {
      const instance = tsParticles.domItem(0);
      if (instance) {
        instance.destroy();
      }
      initParticles();
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          handleThemeChange();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => {
      observer.disconnect();
      const instance = tsParticles.domItem(0);
      if (instance) {
        instance.destroy();
      }
    };
  }, []);

  return <div ref={particlesRef} id="tsparticles" />;
};

export default Particles;
