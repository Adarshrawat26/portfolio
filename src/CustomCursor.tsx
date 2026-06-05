import { useEffect, useRef, useState } from 'react';

const MOBILE_MAX_WIDTH = 767;

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse   = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });
  const raf     = useRef<number>(0);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const update = () => setEnabled(window.innerWidth > MOBILE_MAX_WIDTH);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    // Ring lerps behind
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    // Detect hoverable elements
    const onEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('a, button, [role="button"]')) setHovering(true);
    };
    const onLeave = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('a, button, [role="button"]')) setHovering(false);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onEnter);
    window.addEventListener('mouseout',  onLeave);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onEnter);
      window.removeEventListener('mouseout',  onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Precise inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <div
          style={{
            width: hovering ? 10 : 6,
            height: hovering ? 10 : 6,
            marginTop: hovering ? -5 : -3,
            marginLeft: hovering ? -5 : -3,
            borderRadius: '50%',
            backgroundColor: '#5B4CF5',
            transition: 'width 0.2s, height 0.2s, margin 0.2s',
          }}
        />
      </div>

      {/* Lagging outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <div
          style={{
            width:  hovering ? 48 : 32,
            height: hovering ? 48 : 32,
            marginTop:  hovering ? -24 : -16,
            marginLeft: hovering ? -24 : -16,
            borderRadius: '50%',
            border: '1.5px solid #5B4CF5',
            opacity: hovering ? 0.5 : 0.3,
            backgroundColor: hovering ? 'rgba(91,76,245,0.06)' : 'transparent',
            transition: 'width 0.25s ease, height 0.25s ease, margin 0.25s ease, opacity 0.25s ease, background-color 0.25s ease',
          }}
        />
      </div>
    </>
  );
}
