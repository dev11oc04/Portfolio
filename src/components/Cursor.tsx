import { useEffect, useState } from 'react';
import { useMousePosition } from '@/utils/animations';

interface CursorProps {
  size?: number;
  color?: string;
  mixBlendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'difference' | 'exclusion' | 'luminosity';
  trailColor?: string;
  trailCount?: number;
}

const Cursor = ({
  size = 20,
  color = 'rgba(0, 0, 0, 0.5)',
  mixBlendMode = 'normal',
  trailColor = 'rgba(0, 0, 0, 0.2)',
  trailCount = 5,
}: CursorProps) => {
  const { x, y } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);
  const [trails, setTrails] = useState<{ x: number; y: number; opacity: number }[]>([]);

  useEffect(() => {
    if (!isVisible && (x !== 0 || y !== 0)) setIsVisible(true);

    // Create cursor trail
    setTrails(prev => [...prev, { x, y, opacity: 1 }].slice(-trailCount));

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [x, y, trailCount]);

  useEffect(() => {
    const hoveredElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');

    const addHoverClass = () => document.body.classList.add('custom-cursor-hover');
    const removeHoverClass = () => document.body.classList.remove('custom-cursor-hover');

    hoveredElements.forEach(element => {
      element.addEventListener('mouseenter', addHoverClass);
      element.addEventListener('mouseleave', removeHoverClass);
    });

    return () => {
      hoveredElements.forEach(element => {
        element.removeEventListener('mouseenter', addHoverClass);
        element.removeEventListener('mouseleave', removeHoverClass);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Cursor trails */}
      {trails.map((trail, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-50 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500"
          style={{
            left: trail.x,
            top: trail.y,
            width: size * 0.6,
            height: size * 0.6,
            backgroundColor: trailColor,
            opacity: index / trails.length * 0.5,
          }}
        />
      ))}

      {/* Main Cursor */}
      <div
        className="fixed pointer-events-none z-50 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
        style={{
          left: x,
          top: y,
          width: size,
          height: size,
          backgroundColor: color,
          mixBlendMode,
          transition: 'width 0.3s, height 0.3s, background-color 0.3s',
        }}
      />

      {/* Global cursor styles */}
      <style>
        {`
          body {
            cursor: none;
          }

          .custom-cursor-hover + .cursor {
            width: ${size * 1.5}px;
            height: ${size * 1.5}px;
          }
        `}
      </style>
    </>
  );
};

export default Cursor;
