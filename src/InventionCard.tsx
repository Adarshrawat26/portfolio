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
    <span className="inline-flex items-center gap-1.5 text-[13px] px-3 py-1 rounded-md border font-medium bg-paper-2 text-ink-2 border-rule">
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
      <p className="mono-label !mb-2">Site preview</p>
      <div className="rounded-[var(--radius-card-quiet)] border border-rule overflow-hidden bg-paper-2">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-rule bg-paper-2">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent-3)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-mint)]" />
          </div>
          <div className="flex-1 bg-paper border border-rule rounded-md px-2.5 py-0.5 text-[11px] text-ink-3 font-medium truncate">
            {hostname}
          </div>
        </div>

        <img
          src={previewImage}
          alt={`${hostname} preview`}
          className="w-full h-auto block bg-ink transition-transform duration-500 group-hover/preview:scale-[1.02]"
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="card bg-[var(--color-accent-3-tint)] p-5 sm:p-7"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
        <div className="flex flex-col min-w-0 flex-1 sm:order-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="mono-label !mb-0">{String(index + 1).padStart(2, '0')}</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent-3-deep)] bg-paper border border-[var(--color-accent-3)] rounded-full px-2 py-0.5">
              {item.status}
            </span>
          </div>

          <p className="text-[20px] sm:text-[22px] font-semibold text-ink leading-snug mb-2">{item.name}</p>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed font-medium mb-4">{item.tagline}</p>

          <ul className="space-y-1.5 mb-5">
            {item.highlights.map((h) => (
              <li key={h} className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed font-medium flex gap-2">
                <span className="text-[var(--color-accent-3-deep)] shrink-0">·</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-rule mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((t) => <Chip key={t.name} icon={t.icon}>{t.name}</Chip>)}
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12px] font-semibold text-[var(--color-accent-3-deep)] hover:underline underline-offset-2 shrink-0"
            >
              {hostname}
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {item.previewImage && (
          <div className="w-full sm:w-[min(100%,420px)] sm:shrink-0 sm:order-2">
            <SitePreview url={item.url} hostname={hostname} previewImage={item.previewImage} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
