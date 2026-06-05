import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const photos = [
  { src: '/gallery/1.jpg', label: 'On the road',    size: 'tall' },
  { src: '/gallery/2.jpg', label: 'Creative chaos', size: 'normal' },
  { src: '/gallery/3.jpg', label: 'Late nights',    size: 'normal' },
  { src: '/gallery/4.jpg', label: 'Good energy',    size: 'tall' },
  { src: '/gallery/5.jpg', label: 'The build',      size: 'normal' },
  { src: '/gallery/6.jpg', label: 'Unfiltered',     size: 'normal' },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView    = useInView(sectionRef, { margin: '-20% 0px -20% 0px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });

  // The orange curtain wipes up as you scroll into the section
  const curtainY   = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
  const contentY   = useTransform(scrollYProgress, [0.5, 1], [40, 0]);
  const contentOp  = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh', background: '#0c0806' }}
    >
      {/* ── CURTAIN WIPE ── slides up from bottom as you scroll in */}
      <motion.div
        style={{ y: curtainY }}
        className="absolute inset-0 z-0"
        aria-hidden
      >
        {/* Deep dark base */}
        <div className="absolute inset-0" style={{ background: '#0c0806' }} />

        {/* Orange radial glow left */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,93,49,0.22) 0%, transparent 65%)' }} />

        {/* Subtle warm glow right */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,93,49,0.10) 0%, transparent 65%)' }} />

        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '200px' }} />
      </motion.div>

      {/* ── CONTENT ── fades + rises in */}
      <motion.div
        style={{ y: contentY, opacity: contentOp }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-20 lg:py-28"
      >
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[11px] font-bold uppercase tracking-[0.22em] mb-4"
              style={{ color: '#E85D31' }}
            >
              Beyond the screen
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(48px, 7vw, 88px)',
                color: '#f5ede8',
                letterSpacing: '-2px',
              }}
            >
              My other
              <br />
              <span style={{ color: '#E85D31' }}>personality.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[15px] max-w-xs lg:text-right pb-2"
            style={{ color: '#5a4438', fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}
          >
            Design is what I do.
            <br />
            This is who I am.
          </motion.p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl"
              style={{
                aspectRatio: p.size === 'tall' ? '3/4' : '1/1',
                background: '#1c0f0a',
                border: '1px solid rgba(232,93,49,0.08)',
              }}
            >
              <img
                src={p.src}
                alt={p.label}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />

              {/* Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none">
                <div className="w-8 h-8 rounded-full border border-dashed flex items-center justify-center" style={{ borderColor: 'rgba(232,93,49,0.3)' }}>
                  <span style={{ color: 'rgba(232,93,49,0.4)', fontSize: 18 }}>+</span>
                </div>
                <p className="text-[11px] font-semibold" style={{ color: 'rgba(232,93,49,0.3)' }}>Add photo</p>
              </div>

              {/* Hover label */}
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                style={{ background: 'linear-gradient(to top, rgba(12,8,6,0.95) 0%, transparent 100%)' }}
              >
                <p className="text-[13px] font-semibold" style={{ color: '#f5ede8' }}>{p.label}</p>
              </div>

              {/* Orange corner accent on hover */}
              <div
                className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: '#E85D31' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 h-px origin-left"
          style={{ background: 'linear-gradient(to right, #E85D31, transparent)' }}
        />
      </motion.div>
    </section>
  );
}
