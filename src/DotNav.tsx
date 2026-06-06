import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MOBILE_MAX_WIDTH = 767;

const sections = [
  { id: 'hero',        label: 'Intro' },
  { id: 'experience',  label: 'Experience' },
  { id: 'projects',    label: 'Projects' },
  { id: 'education',   label: 'Education' },
  { id: 'testimonial', label: 'Testimonial' },
  { id: 'gallery',     label: 'Gallery' },
  { id: 'contact',     label: 'Contact' },
];

function getActiveSection() {
  const viewportHeight = window.innerHeight;
  const trigger = viewportHeight * 0.4;

  // Scrolled to page bottom — always activate contact
  if (window.scrollY + viewportHeight >= document.documentElement.scrollHeight - 24) {
    return sections[sections.length - 1].id;
  }

  let bestId = sections[0].id;
  let bestScore = -1;

  for (const { id } of sections) {
    const el = document.getElementById(id);
    if (!el) continue;

    const { top, bottom, height } = el.getBoundingClientRect();
    const visibleTop = Math.max(0, top);
    const visibleBottom = Math.min(viewportHeight, bottom);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    const visibility = visibleHeight / viewportHeight;
    const triggerInside = top <= trigger && bottom >= trigger;

    // Prefer the section occupying the viewport; boost if trigger line is inside it
    const score = visibility + (triggerInside ? 1.5 : 0) + (height > 0 ? visibleHeight / height : 0);

    if (score > bestScore) {
      bestScore = score;
      bestId = id;
    }
  }

  return bestId;
}

export default function DotNav() {
  const [active, setActive] = useState('hero');
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollingTo = useRef<string | null>(null);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollingTo.current) {
        setActive(scrollingTo.current);
        return;
      }
      setActive(getActiveSection());
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    scrollingTo.current = id;
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    window.setTimeout(() => {
      scrollingTo.current = null;
      setActive(getActiveSection());
    }, 900);
  };

  const dotHeight = isMobile ? 5 : 8;
  const dotInactive = isMobile ? 5 : 8;
  const dotActive = isMobile ? 14 : 22;

  return (
    <div className={`fixed top-1/2 -translate-y-1/2 z-50 flex flex-col items-center ${isMobile ? 'right-3 gap-2' : 'right-6 gap-4'}`}>
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
