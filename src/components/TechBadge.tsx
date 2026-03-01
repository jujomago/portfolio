import React from 'react';
import styles from '../styles/TechBadge.module.css';
import { useHoverSound } from '../hooks/useHoverSound';

export const getTechColor = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes('react')) return '#61DAFB';
    if (t.includes('typescript') || t === 'ts') return '#3178C6';
    if (t.includes('next')) return 'var(--text)';
    if (t.includes('node') || t === 'express') return '#5FA04E';
    if (t.includes('express')) return 'var(--text)';
    if (t.includes('postgresql')) return '#4169E1';
    if (t.includes('supabase')) return '#3ECF8E';
    if (t.includes('prisma')) return '#5A67D8';
    if (t.includes('vercel')) return 'var(--text)';
    if (t.includes('aws')) return '#FF9900';
    if (t.includes('onesignal')) return '#E54B4D';
    if (t.includes('material')) return '#0081CB';
    if (t.includes('openid')) return '#F78C40';
    if (t.includes('mongodb')) return '#47A248';
    return 'var(--accent)'; // Fallback to accent color
};

interface TechBadgeProps {
    tech: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
    const hoverColor = getTechColor(tech);
    const playHoverSound = useHoverSound();

    return (
        <span
            className={styles.badge}
            style={{ '--hover-color': hoverColor } as React.CSSProperties}
            onMouseEnter={playHoverSound}
        >
            {tech}
        </span>
    );
};

export default TechBadge;
