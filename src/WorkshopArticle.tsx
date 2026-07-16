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
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-rule">
      <div
        className="h-full bg-[var(--color-accent-2)] transition-[width] duration-150"
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
    <div className="min-h-screen w-full bg-paper font-body">
      <ReadingProgress />
      <CustomCursor />

      <header className="w-full max-w-[65ch] mx-auto px-4 sm:px-6 pt-10 lg:pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/workshop"
            className="inline-flex items-center gap-1.5 text-[13px] text-ink-2 hover:text-ink font-medium transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to workshop
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <span className="mono-label !mb-0">#{study.number}</span>
            <span className="text-[11px] font-medium text-ink-3 uppercase tracking-[0.12em]">
              {study.date} · {study.readTime}
            </span>
          </div>

          <h1 className="font-display font-semibold text-[clamp(1.75rem,4vw+1rem,2.75rem)] text-ink leading-[1.1] tracking-[-0.02em] mb-6">
            {study.title}
          </h1>

          <p className="text-[16px] text-ink-2 leading-[1.7] font-medium">
            {study.desc}
          </p>
        </motion.div>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="w-full px-4 sm:px-6 py-4 pb-28"
      >
        <div className="max-w-[65ch] mx-auto">
          <CaseStudy embedded />
        </div>

        <div className="max-w-[65ch] mx-auto mt-16 pt-10 border-t border-rule flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-4">
          <Link to="/workshop" className="btn btn--outline btn--sm">
            ← All stories
          </Link>
          <Link to="/" className="text-[13px] font-medium text-ink-2 hover:text-ink transition-colors">
            View live portfolio →
          </Link>
        </div>
      </motion.main>
    </div>
  );
}
