import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { workshopStudy } from './workshopData';

export default function NewsBar() {
  return (
    <div className="w-full border-b border-[#EBEBEB] bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <Link
          to="/workshop"
          className="group flex items-center gap-2.5 sm:gap-3 py-2 min-h-[36px] text-[12px] sm:text-[13px] font-semibold transition-colors"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5B4CF5] shrink-0">
            New
          </span>
          <span className="text-[#888] shrink-0 hidden sm:inline">·</span>
          <span className="truncate text-[#555] group-hover:text-[#111] transition-colors">
            {workshopStudy.title}
          </span>
          <span className="hidden md:inline text-[#BBB] shrink-0 font-medium">
            {workshopStudy.date}
          </span>
          <ArrowUpRight
            size={12}
            className="ml-auto sm:ml-0 shrink-0 text-[#AAA] group-hover:text-[#5B4CF5] transition-colors"
          />
        </Link>
      </div>
    </div>
  );
}
