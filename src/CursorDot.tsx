import { useEffect, useRef } from 'react';

export default function CursorDot() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf     = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Lerp — 0.12 = smooth lag, increase for faster follow
      current.current.x += (pos.current.x - current.current.x) * 0.12;
      current.current.y += (pos.current.y - current.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${current.current.x}px, ${current.current.y}px)`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ willChange: 'transform' }}
    >
      {/* Outer ring */}
      <div
        className="absolute rounded-full border border-[#5B4CF5] opacity-40"
        style={{
          width: 32,
          height: 32,
          top: -16,
          left: -16,
        }}
      />
      {/* Inner filled dot */}
      <div
        className="absolute rounded-full bg-[#5B4CF5]"
        style={{
          width: 6,
          height: 6,
          top: -3,
          left: -3,
          opacity: 0.85,
        }}
      />
    </div>
  );
}
