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
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-white border border-[#EBEBEB] rounded-2xl p-6 sm:p-8"
      >
        {/* Title */}
        <div className="mb-6 text-center">
          <h2
            className="text-[28px] sm:text-[32px] leading-none tracking-tight text-[#111]"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}
          >
            Life, before corporate
          </h2>
          <p className="text-[12.5px] text-[#BBB] mt-1.5 font-medium">FC KIET · Inter-college Champions ⚽</p>
        </div>

        {/* Grid — 4 cols fixed height cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl overflow-hidden"
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className={`w-full h-full object-cover transition-all duration-500 hover:scale-105 ${p.bw ? 'grayscale hover:grayscale-0' : ''}`}
              />
            </motion.div>
          ))}
        </div>

        <p className="text-[11.5px] text-[#CCC] font-medium mt-4 text-center tracking-wide">
          Inter-college Football Tournament — KIET University, Ghaziabad
        </p>
      </motion.div>
    </div>
  );
}
