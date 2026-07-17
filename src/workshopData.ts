export const workshopTagline =
  'I use AI to clear my head — sketch ideas, refine taste, and put things out aesthetically.';

export interface WorkshopStudy {
  id: string;
  number: number;
  date: string;
  title: string;
  desc: string;
  thumbnail: string;
  color: string;
  readTime: string;
}

export const workshopStudies: WorkshopStudy[] = [
  {
    id: 'wc26-analyzer',
    number: 2,
    date: 'Jul 2026',
    title: 'building a World Cup prediction model that gets tested in public',
    desc: 'How I built a walk-forward-backtested Poisson model for the FIFA World Cup 2026, posted the real numbers to Reddit, and found (and fixed) an actual leakage bug because a stranger pushed back.',
    thumbnail: '/wc26-preview.png',
    color: '#8FD6C2',
    readTime: '7 min read',
  },
  {
    id: 'portfolio-build',
    number: 1,
    date: 'Jun 2026',
    title: 'building this portfolio from scratch',
    desc: 'How I designed and coded my portfolio from zero — using Claude Code, Cursor, React, shipping on Vercel, and connecting my GoDaddy domain adarshcool.in.',
    thumbnail: '/profile.webp',
    color: '#CDB4F6',
    readTime: '6 min read',
  },
];

// back-compat: some older imports reference the single most recent study
export const workshopStudy = workshopStudies[0];
