import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { socialLinksData } from '../data/portfolio';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    // You could integrate with EmailJS, Formspree, or backend API
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactInner}>
        <div className={styles.contactInfo}>
          <span className={styles.sectionTag} data-animate="section-element">{t('contact.tag')}</span>
          <h2 className={styles.sectionTitle} data-animate="section-element">{t('contact.title')}</h2>

          <p className={styles.contactText} data-animate="section-element">
            {t('contact.text')}
          </p>

          <div className={styles.socialLinks} data-animate="section-element">
            {socialLinksData.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.icon}>{link.icon}</span>
                {link.label} <span>→</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className="form-group" data-animate="section-element">
              <label className={styles.formLabel}>
                {t('contact.name')}
              </label>
              <input
                type="text"
                name="name"
                className={styles.formInput}
                placeholder={t('contact.namePh')}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group" data-animate="section-element">
              <label className={styles.formLabel}>
                {t('contact.email')}
              </label>
              <input
                type="email"
                name="email"
                className={styles.formInput}
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group" data-animate="section-element">
              <label className={styles.formLabel}>
                {t('contact.message')}
              </label>
              <textarea
                name="message"
                className={styles.formTextarea}
                placeholder={t('contact.messagePh')}
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className={styles.formSubmit} data-animate="section-element">
              {t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
