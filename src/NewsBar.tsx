import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { workshopStudy } from './workshopData';

export default function NewsBar() {
  return (
    <div className="w-full border-b border-rule bg-paper">
      <div className="max-w-[var(--page-max)] mx-auto px-4 sm:px-6 lg:pl-20 lg:pr-10 xl:pr-16">
        <Link
          to="/workshop"
          className="group flex items-center gap-2.5 sm:gap-3 py-2 min-h-[36px] text-2xs sm:text-xs font-medium transition-colors"
        >
          <span className="text-3xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent-3-deep)] shrink-0">
            New
          </span>
          <span className="text-ink-3 shrink-0 hidden sm:inline">·</span>
          <span className="truncate text-ink-2 group-hover:text-ink transition-colors">
            {workshopStudy.title}
          </span>
          <span className="hidden md:inline text-ink-3 shrink-0 font-medium">
            {workshopStudy.date}
          </span>
          <ArrowUpRight
            size={12}
            className="ml-auto sm:ml-0 shrink-0 text-ink-3 group-hover:text-[var(--color-accent-2)] transition-colors"
          />
        </Link>
      </div>
    </div>
  );
}
