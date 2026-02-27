import { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../context/LanguageContext";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  const { toggleTheme } = useTheme();
  const { toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const navItems = [
    { href: "#about", key: "nav.about" },
    { href: "#skills", key: "nav.skills" },
    { href: "#projects", key: "nav.projects" },
    { href: "#timeline", key: "nav.experience" },
    { href: "#contact", key: "nav.contact" },
  ];

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
        <a href="#hero" className={styles.navLogo}>
          JJMG<span>.</span>
        </a>

        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.key}>
              <a href={item.href}>{t(item.key)}</a>
            </li>
          ))}
        </ul>

        <div className={styles.navControls}>
          <button
            className={styles.langToggle}
            onClick={toggleLanguage}
            aria-label="Switch language"
          >
            <span className={`${styles.lIcon} ${styles.lEs}`}>
              <svg
                width="22"
                height="14"
                viewBox="0 0 22 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="22" height="14" fill="#c60b1e" />
                <rect y="3.5" width="22" height="7" fill="#ffc400" />
              </svg>
            </span>
            <span className={`${styles.lIcon} ${styles.lEn}`}>
              <svg
                width="22"
                height="14"
                viewBox="0 0 22 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="22" height="14" fill="#B22234" />
                <rect y="1.08" width="22" height="1.08" fill="white" />
                <rect y="3.23" width="22" height="1.08" fill="white" />
                <rect y="5.38" width="22" height="1.08" fill="white" />
                <rect y="7.54" width="22" height="1.08" fill="white" />
                <rect y="9.69" width="22" height="1.08" fill="white" />
                <rect y="11.85" width="22" height="1.08" fill="white" />
                <rect width="9" height="7.54" fill="#3C3B6E" />
                <g fill="white" fontSize="1.8" textAnchor="middle">
                  <text x="1.5" y="2">
                    ★
                  </text>
                  <text x="4.5" y="2">
                    ★
                  </text>
                  <text x="7.5" y="2">
                    ★
                  </text>
                  <text x="3" y="3.8">
                    ★
                  </text>
                  <text x="6" y="3.8">
                    ★
                  </text>
                  <text x="1.5" y="5.6">
                    ★
                  </text>
                  <text x="4.5" y="5.6">
                    ★
                  </text>
                  <text x="7.5" y="5.6">
                    ★
                  </text>
                  <text x="3" y="7.2">
                    ★
                  </text>
                  <text x="6" y="7.2">
                    ★
                  </text>
                </g>
              </svg>
            </span>
          </button>

          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className={`${styles.tIcon} ${styles.tMoon}`}>🌙</span>
            <span className={`${styles.tIcon} ${styles.tSun}`}>☀️</span>
          </button>

          <button
            className={styles.hamburger}
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`}
      >
        <button
          className={styles.mobileClose}
          onClick={closeMobileMenu}
          aria-label="Close menu"
        >
          ✕
        </button>
        {navItems.map((item) => (
          <a
            key={item.key}
            href={item.href}
            className="mobile-link"
            onClick={closeMobileMenu}
          >
            {t(item.key)}
          </a>
        ))}
        <div className={styles.mobileMenuFooter}>Josue Mancilla · 2026</div>
      </div>
    </>
  );
};

export default Navigation;
