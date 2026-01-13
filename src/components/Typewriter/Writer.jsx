import { useState, useEffect, useRef } from 'react';

function useTypewriterParallax(text, speed = 80) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);

  const elementRef = useRef(null);
  const hasStarted = useRef(false);

  const checkVisibility = (scrollTop, containerHeight) => {
    if (!elementRef.current || hasStarted.current) return;

    const rect = elementRef.current.getBoundingClientRect();

    if (rect.top < containerHeight * 0.75) {
      hasStarted.current = true;
      setActive(true);
    }
  };

  useEffect(() => {
    if (!active) return;

    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, active, text, speed]);

  return {
    text: displayText,
    ref: elementRef,
    checkVisibility
  };
}

export default useTypewriterParallax;
