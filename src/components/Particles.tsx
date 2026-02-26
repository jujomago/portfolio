import { useEffect, useRef } from "react";

const Particles = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cargar tsparticles v2.12.0 como en el HTML original
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/tsparticles@2.12.0/tsparticles.bundle.min.js";
    script.async = true;

    script.onload = () => {
      const tsParticles = (window as any).tsParticles;
      if (!tsParticles) return;

      // Función getParticleColors exactamente como en el HTML
      const getParticleColors = () => {
        const isLight =
          document.documentElement.getAttribute("data-theme") === "light";
        // read CSS variables so colors always match the current theme palette
        const css = (name: string) =>
          getComputedStyle(document.documentElement)
            .getPropertyValue(name)
            .trim();
        const accent = css("--accent") || "#00ffc8";
        const accent2 = css("--accent2") || "#00a8ff";
        const text = css("--text") || (isLight ? "#111111" : "#ffffff");
        if (isLight) {
          return { dots: [accent, accent2, text], link: accent };
        }
        return { dots: [accent, accent2, "#ffffff"], link: accent };
      };

      // Función loadParticles exactamente como en el HTML
      const loadParticles = async () => {
        const colors = getParticleColors();
        await tsParticles.load("tsparticles", {
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 90, limit: 150, density: { enable: true, value_area: 800 } },
            color: { value: colors.dots },
            opacity: {
              value: 0.65,
              random: true,
              anim: { enable: true, speed: 0.8, opacity_min: 0.2 },
            },
            size: {
              value: 2.5,
              random: true,
              anim: { enable: true, speed: 1, size_min: 0.8 },
            },
            links: {
              enable: true,
              distance: 150,
              color: colors.link,
              opacity: 0.28,
              width: 1.2,
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 160, links: { opacity: 0.6 } },
              push: { particles_nb: 4 },
            },
          },
        });
      };

      loadParticles();

      // Manejar cambios de tema como en el HTML
      const handleThemeChange = () => {
        const instance = tsParticles.domItem(0);
        if (instance) instance.destroy();
        loadParticles();
      };

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "data-theme"
          ) {
            handleThemeChange();
          }
        });
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });

      // Cleanup
      return () => {
        observer.disconnect();
        const instance = tsParticles.domItem(0);
        if (instance) instance.destroy();
      };
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={particlesRef} id="tsparticles" />;
};

export default Particles;
