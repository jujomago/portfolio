import { useCallback, useRef, useEffect } from 'react';

const HOVER_SOUND_URL = '/sounds/hover.mp3';

export const useHoverSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(HOVER_SOUND_URL);
    audioRef.current.volume = 0.3;
  }, []);

  const playHoverSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => console.log('Audio play error:', err));
    }
  }, []);

  return playHoverSound;
};
