
import { useEffect, useState, useRef, RefObject } from 'react';

// Hook to check if element is in viewport
export const useInView = (ref: RefObject<HTMLElement>, options = {}) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: 0.1,
      ...options
    });
    
    observer.observe(ref.current);
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
};

// Hook for tracking scroll position
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  
  return scrollPosition;
};

// Hook for smooth counter animation
export const useCounter = (end: number, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const timeRef = useRef<number | null>(null);
  
  useEffect(() => {
    const startTime = Date.now();
    const updateCounter = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const newCount = Math.floor(start + (end - start) * progress);
      if (countRef.current !== newCount) {
        countRef.current = newCount;
        setCount(newCount);
      }
      
      if (progress < 1) {
        timeRef.current = requestAnimationFrame(updateCounter);
      }
    };
    
    timeRef.current = requestAnimationFrame(updateCounter);
    
    return () => {
      if (timeRef.current) {
        cancelAnimationFrame(timeRef.current);
      }
    };
  }, [start, end, duration]);
  
  return count;
};

// Hook for typewriter effect
export const useTypewriter = (text: string, speed = 100, delay = 0) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    timeout = setTimeout(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);
      
      return () => clearInterval(intervalId);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);
  
  return displayText;
};

// Hook for parallax effect
export const useParallax = (speed = 0.2) => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return offset;
};

// Hook for mouse position tracking
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  
  return mousePosition;
};
