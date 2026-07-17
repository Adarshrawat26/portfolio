import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Check } from 'lucide-react';
import CustomCursor from './CustomCursor';
import { workshopStudies, workshopTagline, type WorkshopStudy } from './workshopData';

function StudyCard({ study, index }: { study: WorkshopStudy; index: number }) {
  const [copied, setCopied] = useState(false);
  const articleUrl = `${window.location.origin}/workshop/${study.id}`;

  const handleShare = async () => {
    const shareData = { title: study.title, text: study.desc, url: articleUrl };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        /* cancelled or failed — fall through to copy */
      }
    }

    await navigator.clipboard.writeText(articleUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.08 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-sm"
    >
      <Link to={`/workshop/${study.id}`} className="group block cursor-pointer">
        <div className="flex items-center justify-between mb-3">
          <span className="mono-label !mb-0">#{study.number}</span>
          <span className="text-3xs font-medium text-ink-3 uppercase tracking-[0.12em]">
            {study.date}
          </span>
        </div>

        <div className="w-full aspect-square rounded-[var(--radius-card-quiet)] overflow-hidden mb-4 border border-rule transition-transform duration-300 group-hover:-translate-y-1">
          <img
            src={study.thumbnail}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>

        <h2 className="font-display font-bold text-lg sm:text-xl text-ink leading-[1.15] group-hover:text-[var(--color-accent-2)] transition-colors">
          {study.title}
        </h2>
        <p className="text-xs text-ink-2 mt-2 leading-relaxed font-normal">
          {study.desc}
        </p>
      </Link>

      <div className="flex justify-end mt-3">
        <button type="button" onClick={handleShare} className="btn btn--outline btn--sm">
          {copied ? 'Copied' : 'Share'}
          {copied ? <Check size={12} /> : <Share2 size={12} />}
        </button>
      </div>
    </motion.div>
  );
}

export default function Workshop() {
  return (
    <div className="min-h-screen w-full bg-paper font-body">
      <CustomCursor />
      <main className="w-full max-w-[720px] mx-auto px-4 sm:px-6 py-8 lg:py-14 pb-24">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-ink-2 hover:text-ink font-medium transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>

          <h1 className="font-display font-bold text-display-s leading-[1.05] text-ink tracking-[-0.02em]">
            adarsh&apos;s workshop
          </h1>
          <p className="text-sm text-ink-2 mt-3 font-medium max-w-lg leading-relaxed">
            {workshopTagline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {workshopStudies.map((study, i) => (
            <StudyCard key={study.id} study={study} index={i} />
          ))}
        </div>

      </main>
    </div>
  );
}
