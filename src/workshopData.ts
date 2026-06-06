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

export const workshopStudy: WorkshopStudy = {
  id: 'portfolio-build',
  number: 1,
  date: 'Jun 2026',
  title: 'building this portfolio from scratch',
  desc: 'How I designed and coded my portfolio from zero — using Claude Code, Cursor, React, shipping on Vercel, and connecting my GoDaddy domain adarshcool.in.',
  thumbnail: '/profile.webp',
  color: '#CDB4F6',
  readTime: '6 min read',
};
