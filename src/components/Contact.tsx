import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import { socialLinksData } from '../data/portfolio';
import styles from '../styles/Contact.module.css';

// Sub-component for the submit button to use useFormStatus
const SubmitButton = ({ t, language }: { t: any; language: string }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${styles.formSubmit} ${pending ? styles.sending : ''}`}
      data-animate="section-element"
    >
      {pending
        ? (language === 'es' ? 'Enviando...' : 'Sending...')
        : t('contact.send')}
    </button>
  );
};

const Contact = () => {
  const { t, language } = useLanguage();

  // Action for React 19 useActionState
  const [state, formAction] = useActionState(
    async (_prevState: any, formData: FormData) => {
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        });

        const result = await response.json();
        if (result.success) {
          return { success: true, message: null };
        }
        return { success: false, error: result.error || null };
      } catch (error) {
        return { success: false, error: 'connection_error' };
      }
    },
    { success: false, error: null }
  );

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={styles.contactInner}>
        <div className={styles.contactInfo}>
          <span className="sectionTag" data-animate="section-element">{t('contact.tag')}</span>
          <h2 className="sectionTitle" data-animate="section-element">{t('contact.title')}</h2>

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
          <form action={formAction} className={styles.contactForm}>
            {/* Honeypot field for bots */}
            <div className={styles.honeypot}>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="form-group" data-animate="section-element">
              <label className={styles.formLabel}>
                {t('contact.name')}
              </label>
              <input
                type="text"
                name="name"
                className={styles.formInput}
                placeholder={t('contact.namePh')}
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
                required
              />
            </div>

            <SubmitButton t={t} language={language} />

            {state?.success && (
              <p className={styles.successMessage} data-animate="section-element">
                {t('contact.success')}
              </p>
            )}
            {state?.error && (
              <p className={styles.errorMessage} data-animate="section-element">
                {state.error === 'connection_error' ? t('contact.error') : (state.error || t('contact.error'))}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
