import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import CustomCursor from './CustomCursor';
import { workshopStudy, workshopTagline } from './workshopData';

export default function Workshop() {
  const study = workshopStudy;

  return (
    <div className="min-h-screen w-full bg-[#121212] text-white" style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif" }}>
      <CustomCursor />
      <main className="w-full max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 pb-24">

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-[#888] hover:text-white font-semibold transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>

          <h1
            className="text-[32px] sm:text-[40px] lg:text-[48px] text-white leading-[1.05] lowercase"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            adarsh&apos;s workshop
          </h1>
          <p className="text-[14px] text-[#999] mt-3 font-medium max-w-lg leading-relaxed">
            {workshopTagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-sm"
        >
          <Link
            to={`/workshop/${study.id}`}
            className="group block cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[12px] font-bold text-white border border-white rounded-full px-2.5 py-0.5 leading-none">
                #{study.number}
              </span>
              <span className="text-[11px] font-semibold text-[#777] uppercase tracking-[0.12em]">
                {study.date}
              </span>
            </div>

            <div
              className="w-full aspect-square rounded-sm overflow-hidden mb-4 transition-transform duration-300 group-hover:-translate-y-1"
              style={{ backgroundColor: study.color }}
            >
              <img
                src={study.thumbnail}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            <h2
              className="text-[22px] sm:text-[24px] text-white leading-[1.15] lowercase group-hover:underline decoration-2 underline-offset-4 transition-all"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              {study.title}
            </h2>
            <p className="text-[13px] text-[#AAA] mt-2 leading-relaxed font-medium">
              {study.desc}
            </p>
          </Link>
        </motion.div>

      </main>
    </div>
  );
}
