import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MOBILE_MAX_WIDTH = 767;

const sections = [
  { id: 'hero',        label: 'Intro' },
  { id: 'experience',  label: 'Experience' },
  { id: 'projects',    label: 'Projects' },
  { id: 'education',   label: 'Education' },
  { id: 'testimonial', label: 'Testimonial' },
];

export default function DotNav() {
  const [active, setActive] = useState('hero');
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.35;

      // Walk sections in reverse — first one whose top is above the trigger wins
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (scrollY >= top) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    handleScroll(); // run once on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const dotHeight = isMobile ? 5 : 8;
  const dotInactive = isMobile ? 5 : 8;
  const dotActive = isMobile ? 14 : 22;

  return (
    <div className={`fixed top-1/2 -translate-y-1/2 z-50 flex flex-col items-center ${isMobile ? 'right-3 gap-3' : 'right-6 gap-5'}`}>
      {sections.map(({ id, label }) => {
        const isActive  = active === id;
        const isHovered = hovered === id;

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className="relative flex items-center justify-end"
            aria-label={label}
          >
            {/* Tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-7 whitespace-nowrap bg-[#111] text-white text-[11.5px] font-semibold px-2.5 py-1 rounded-md"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Dot / pill */}
            <motion.div
              animate={{
                width:           isActive ? dotActive : dotInactive,
                height:          dotHeight,
                backgroundColor: isActive ? '#5B4CF5' : isHovered ? '#999' : '#D4D4D4',
                borderRadius:    99,
                scale:           isHovered && !isActive ? 1.2 : 1,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0"
            />
          </button>
        );
      })}
    </div>
  );
}
