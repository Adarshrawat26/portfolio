import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import CustomCursor from './CustomCursor';

export default function Workshop() {
  return (
    <div className="min-h-screen w-full bg-[#F9F9F9]" style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif" }}>
      <CustomCursor />
      <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-white border border-[#EBEBEB] rounded-2xl p-6 sm:p-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-[#999] hover:text-[#5B4CF5] font-semibold transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>

          <h1
            className="text-3xl sm:text-4xl lg:text-[42px] text-[#0a0a0a] leading-[1.05]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontStyle: 'italic', letterSpacing: '-0.5px' }}
          >
            Adarsh&apos;s workshop
          </h1>
          <p className="text-[15px] text-[#888] mt-3 font-medium max-w-xl">
            A space for experiments, design explorations, and works in progress. More coming soon.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
