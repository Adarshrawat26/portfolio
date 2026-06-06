import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import CustomCursor from './CustomCursor';
import CaseStudy from './CaseStudy';
import { workshopStudy } from './workshopData';

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-[#2a2a2a]">
      <div
        className="h-full bg-[#5B4CF5] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function WorkshopArticle() {
  const { slug } = useParams();
  const study = workshopStudy;

  if (slug !== study.id) return <Navigate to="/workshop" replace />;

  return (
    <div className="min-h-screen w-full bg-[#121212]" style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif" }}>
      <ReadingProgress />
      <CustomCursor />

      <header className="w-full max-w-[720px] mx-auto px-4 sm:px-6 pt-10 lg:pt-14 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/workshop"
            className="inline-flex items-center gap-1.5 text-[13px] text-[#888] hover:text-white font-semibold transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to workshop
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <span className="text-[12px] font-bold text-white border border-white rounded-full px-2.5 py-0.5 leading-none">
              #{study.number}
            </span>
            <span className="text-[11px] font-semibold text-[#777] uppercase tracking-[0.12em]">
              {study.date} · {study.readTime}
            </span>
          </div>

          <h1
            className="text-[28px] sm:text-[42px] lg:text-[48px] text-white leading-[1.08] lowercase mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            {study.title}
          </h1>

          <p className="text-[17px] text-[#AAA] leading-[1.7] font-medium">
            {study.desc}
          </p>
        </motion.div>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-[#F9F9F9] rounded-t-[2rem] px-4 sm:px-6 lg:px-8 py-12 lg:py-16 pb-28"
      >
        <div className="max-w-[720px] mx-auto">
          <CaseStudy embedded />
        </div>

        <div className="max-w-[720px] mx-auto mt-16 pt-10 border-t border-[#EBEBEB] flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-4">
          <Link
            to="/workshop"
            className="text-[13px] font-bold text-[#5B4CF5] border border-[#D4CEFF] bg-[#F0EEFF] hover:bg-[#E8E4FF] px-5 py-2.5 rounded-full transition-colors"
          >
            ← All stories
          </Link>
          <Link
            to="/"
            className="text-[13px] font-bold text-[#888] hover:text-[#111] transition-colors"
          >
            View live portfolio →
          </Link>
        </div>
      </motion.main>
    </div>
  );
}
