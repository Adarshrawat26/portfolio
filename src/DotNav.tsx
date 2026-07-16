import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MOBILE_MAX_WIDTH = 767;

const sections = [
  { id: 'hero',        label: 'Intro' },
  { id: 'experience',  label: 'Experience' },
  { id: 'inventions',  label: 'Inventions' },
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

    const score = visibility + (triggerInside ? 1.5 : 0) + (height > 0 ? visibleHeight / height : 0);

    if (score > bestScore) {
      bestScore = score;
      bestId = id;
    }
  }

  return bestId;
}

/* N3 Side-rail — fixed left edge on desktop (rotated wordmark + dot indicators),
   collapses to a bottom-anchored horizontal strip on mobile. */
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

  if (isMobile) {
    return (
      <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-[color-mix(in_oklch,var(--color-paper)_88%,transparent)] backdrop-blur-md border border-rule rounded-full px-2 py-2 shadow-[0_8px_24px_-12px_oklch(20%_0.012_250/0.25)]">
        {sections.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              aria-label={label}
              className="flex items-center justify-center w-8 h-8"
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: isActive ? 16 : 6,
                  height: 6,
                  background: isActive ? 'var(--color-accent-3)' : 'var(--color-rule)',
                }}
              />
            </button>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="nav-rail fixed left-0 top-0 bottom-0 z-50 w-14 flex flex-col items-center justify-between py-6">
      <p
        className="text-3xs font-semibold tracking-[0.18em] text-ink-2 select-none"
        style={{ writingMode: 'vertical-rl', fontFamily: 'var(--font-mono)' }}
      >
        ADARSH·RAWAT
      </p>

      <ul className="flex flex-col items-center gap-4">
        {sections.map(({ id, label }) => {
          const isActive = active === id;
          const isHovered = hovered === id;

          return (
            <li key={id} className="relative">
              <button
                onClick={() => scrollTo(id)}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                aria-label={label}
                className="relative flex items-center justify-center w-8 h-8"
              >
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-9 whitespace-nowrap bg-ink text-paper text-3xs font-semibold px-2.5 py-1 rounded-md"
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>

                <motion.span
                  animate={{
                    height: isActive ? 22 : 8,
                    backgroundColor: isActive ? 'var(--color-accent-3)' : isHovered ? 'var(--color-ink-3)' : 'var(--color-rule)',
                    scale: isHovered && !isActive ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="block w-[6px] rounded-full"
                />
              </button>
            </li>
          );
        })}
      </ul>

      <span className="w-1.5 h-1.5 rounded-full bg-pear char-mark" aria-hidden="true" />
    </nav>
  );
}
