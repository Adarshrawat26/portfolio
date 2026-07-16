import { motion } from 'framer-motion';

const photos = [
  { src: '/gallery/1.jpg', alt: 'Champions' },
  { src: '/gallery/2.jpg', alt: 'Champions' },
  { src: '/gallery/3.jpg', alt: 'Celebration' },
  { src: '/gallery/4.jpg', alt: 'Trophy', bw: true },
];

export default function GallerySection() {
  return (
    <div id="gallery">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="card p-6 sm:p-8"
        style={{ background: 'color-mix(in oklch, var(--color-mint) 22%, var(--color-paper))' }}
      >
        <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
          <h2 className="font-display font-semibold text-[22px] sm:text-[26px] text-ink">
            Life, before corporate
          </h2>
          <p className="text-[12.5px] text-ink-2 font-medium">FC KIET · inter-college champions</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-[var(--radius-card-quiet)] overflow-hidden"
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${p.bw ? 'grayscale hover:grayscale-0' : ''}`}
              />
            </motion.div>
          ))}
        </div>

        <p className="text-[11.5px] text-ink-3 font-medium mt-4 text-center">
          Inter-college football tournament — KIET University, Ghaziabad
        </p>
      </motion.div>
    </div>
  );
}
