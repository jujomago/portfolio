import { useEffect, useRef } from 'react';

const isMobile = () => {
  return typeof window !== 'undefined' && window.innerWidth < 768;
};

export const useRotatingTitle = (title: string) => {
  const titleRef = useRef(title);

  useEffect(() => {
    titleRef.current = title;
    document.title = title;

    if (isMobile()) return;

    let offset = 0;
    let idle = false;
    let timeoutId: ReturnType<typeof setTimeout>;
    const fullTitle = title + ' - ';

    const interval = setInterval(() => {
      if (!idle) return;
      offset = (offset + 1) % fullTitle.length;
      document.title = fullTitle.slice(offset) + fullTitle.slice(0, offset);
    }, 300);

    const handleActivity = () => {
      idle = false;
      clearTimeout(timeoutId);
      document.title = titleRef.current;
      timeoutId = setTimeout(() => { idle = true; }, 3000);
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('scroll', handleActivity);

    timeoutId = setTimeout(() => { idle = true; }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      document.title = titleRef.current;
    };
  }, [title]);
};
