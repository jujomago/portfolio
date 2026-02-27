import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SEO = () => {
    const { t, language } = useLanguage();

    useEffect(() => {
        // Update Document Title
        document.title = t('seo.title');

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', t('seo.description'));
        }

        // Update Meta Keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', t('seo.keywords'));
        }

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', t('seo.title'));

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', t('seo.description'));

        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) twitterTitle.setAttribute('content', t('seo.title'));

        const twitterDesc = document.querySelector('meta[name="twitter:description"]');
        if (twitterDesc) twitterDesc.setAttribute('content', t('seo.description'));

        // Update html lang attribute
        document.documentElement.lang = language;

        // Update Theme Color meta tag
        const themeColor = document.querySelector('meta[name="theme-color"]');
        if (themeColor) {
            const currentBg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
            themeColor.setAttribute('content', currentBg);
        }
    }, [t, language]);

    return null; // This component doesn't render anything
};

export default SEO;
