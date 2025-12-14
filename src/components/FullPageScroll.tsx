import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../FullPageScroll.css';

interface FullPageScrollProps {
  children: ReactNode[];
  transitionDuration?: number;
  showDots?: boolean;
  dotColor?: string;
  activeDotColor?: string;
}

export default function FullPageScroll({
  children,
  transitionDuration = 700,
  showDots = true,
  dotColor = '#94a3b8',
  activeDotColor = '#3b82f6'
}: FullPageScrollProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSections = children.length;

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < totalSections && !isScrolling) {
      setIsScrolling(true);
      setCurrentSection(index);
      setTimeout(() => setIsScrolling(false), transitionDuration);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;
      scrollToSection(currentSection + (e.deltaY > 0 ? 1 : -1));
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown': scrollToSection(currentSection + 1); break;
        case 'ArrowUp':
        case 'PageUp': scrollToSection(currentSection - 1); break;
        case 'Home': scrollToSection(0); break;
        case 'End': scrollToSection(totalSections - 1); break;
      }
    };

    const container = containerRef.current;
    if (container) container.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (container) container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling, totalSections, transitionDuration]);

  const touchStartY = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartY.current = e.touches[0].clientY; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isScrolling) return;
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 50) scrollToSection(currentSection + (diff > 0 ? 1 : -1));
  };

  return (
    <div ref={containerRef} className="fullpage-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          className="fullpage-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: transitionDuration / 1000 }}
        >
          {children[currentSection]}
        </motion.div>
      </AnimatePresence>
      {showDots && (
        <nav className="fullpage-dots">
          {Array.from({ length: totalSections }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`fullpage-dot ${index === currentSection ? 'active' : ''}`}
              style={{ backgroundColor: index === currentSection ? activeDotColor : dotColor }}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </nav>
      )}
    </div>
  );
}
