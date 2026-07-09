import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SkillIcon } from './SkillIcon';

type Invention = {
  name: string;
  tagline: string;
  highlights: string[];
  tags: { name: string; icon: string | null }[];
  url: string;
  status: string;
  previewImage?: string;
};

function Chip({ children, icon }: { children: string; icon?: string | null }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[13px] px-3 py-1 rounded-md border font-semibold bg-[#F7F7F7] text-[#444] border-[#E8E8E8]">
      {icon && <SkillIcon icon={icon} />}
      {children}
    </span>
  );
}

function SitePreview({ url, hostname, previewImage }: { url: string; hostname: string; previewImage: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full group/preview"
    >
      <div className="rounded-xl border border-[#E8E8E8] overflow-hidden bg-[#F7F7F7] shadow-sm">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-[#E8E8E8] bg-[#F7F7F7]">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 bg-white border border-[#E0E0E0] rounded-md px-2.5 py-0.5 text-[11px] text-[#888] font-medium truncate">
            {hostname}
          </div>
        </div>

        <img
          src={previewImage}
          alt={`${hostname} preview`}
          className="w-full h-auto block bg-[#0a0a0a] transition-transform duration-500 group-hover/preview:scale-[1.02]"
          loading="eager"
          decoding="async"
        />
      </div>
    </a>
  );
}

export default function InventionCard({ item, index }: { item: Invention; index: number }) {
  const hostname = new URL(item.url).hostname;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.14 + index * 0.04 }}
      className="border border-[#EBEBEB] rounded-xl p-5 sm:p-6 bg-white hover:border-[#5B4CF5] hover:shadow-[0_2px_12px_rgba(91,76,245,0.08)] transition-all duration-150"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
        <div className="flex flex-col min-w-0 flex-1 order-2 md:order-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[12px] font-bold text-[#CCC]">{String(index + 1).padStart(2, '0')}</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5B4CF5] bg-[#F0EEFF] border border-[#D4CEFF] rounded-full px-2 py-0.5">
              {item.status}
            </span>
          </div>

          <p className="text-[20px] sm:text-[22px] font-bold text-[#111] leading-snug mb-2">{item.name}</p>
          <p className="text-[14px] sm:text-[15px] text-[#555] leading-relaxed font-medium mb-4">{item.tagline}</p>

          <ul className="space-y-1.5 mb-5">
            {item.highlights.map((h) => (
              <li key={h} className="text-[13px] sm:text-[14px] text-[#666] leading-relaxed font-medium flex gap-2">
                <span className="text-[#5B4CF5] shrink-0">·</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#F0F0F0] mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((t) => <Chip key={t.name} icon={t.icon}>{t.name}</Chip>)}
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#5B4CF5] hover:underline underline-offset-2 shrink-0"
            >
              {hostname}
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {item.previewImage && (
          <div className="w-full md:w-[min(100%,380px)] md:shrink-0 order-1 md:order-2">
            <SitePreview url={item.url} hostname={hostname} previewImage={item.previewImage} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
