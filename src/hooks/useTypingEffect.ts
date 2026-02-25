import { useEffect, useRef, useState } from 'react';
import { typingPhrases } from '../data/portfolio';
import type { Language } from '../types';

export const useTypingEffect = (language: Language) => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const typingTimer = useRef<number | undefined>(undefined);
  
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    // Reset when language changes
    phraseIndex.current = 0;
    charIndex.current = 0;
    isDeleting.current = false;
    setText('');
    setIsTyping(true);
    
    if (typingTimer.current) {
      clearTimeout(typingTimer.current);
    }
    
    typingTimer.current = setTimeout(typeEffect, 400);
    
    return () => {
      if (typingTimer.current) {
        clearTimeout(typingTimer.current);
      }
    };
  }, [language]);

  const typeEffect = () => {
    const phrases = typingPhrases[language];
    const current = phrases[phraseIndex.current];
    
    if (!isDeleting.current) {
      // Typing
      setText(current.slice(0, charIndex.current + 1));
      charIndex.current++;
      
      if (charIndex.current === current.length) {
        // Finished typing this phrase
        isDeleting.current = true;
        typingTimer.current = setTimeout(typeEffect, 2200);
        return;
      }
    } else {
      // Deleting
      setText(current.slice(0, charIndex.current - 1));
      charIndex.current--;
      
      if (charIndex.current === 0) {
        // Finished deleting, move to next phrase
        isDeleting.current = false;
        phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
      }
    }
    
    typingTimer.current = setTimeout(typeEffect, isDeleting.current ? 35 : 55);
  };

  return { text, isTyping };
};
