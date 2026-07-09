export const experience = [
  {
    role: 'Product Designer & Full Stack Developer',
    company: 'Blu Parrot',
    period: 'Sep 2025 – Present',
    location: 'Gurugram, India',
    desc: 'Led product design and frontend development for enterprise procurement, CRM, hiring, and AI-assisted workflow platforms. Built scalable dashboard architectures and role-based UX using React, Claude, Cursor, and Figma Make.',
  },
  {
    role: 'UI/UX Designer & Frontend Developer',
    company: 'TBI — KIET',
    period: 'May 2024 – Feb 2025',
    location: 'Ghaziabad, UP',
    desc: 'Designed and built incubation and startup workflow platforms including responsive dashboards, admin systems, and operational interfaces using React.js and REST APIs.',
  },
];

export const skills = [
  {
    label: 'Product & UX',
    items: [
      { name: 'Figma', icon: 'figma' },
      { name: 'Enterprise UX', icon: null },
      { name: 'Dashboard Design', icon: null },
      { name: 'Design Systems', icon: null },
      { name: 'Information Architecture', icon: null },
      { name: 'Rapid Prototyping', icon: null },
    ],
    highlight: ['Enterprise UX', 'Dashboard Design'],
  },
  {
    label: 'Frontend & Dev',
    items: [
      { name: 'React.js', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Next.js 14', icon: 'nextjs' },
      { name: 'Redux', icon: 'redux' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'MongoDB', icon: 'mongodb' },
    ],
    highlight: ['React.js', 'TypeScript'],
  },
  {
    label: 'AI & Automation',
    items: [
      { name: 'Claude', icon: 'claude' },
      { name: 'Cursor', icon: 'cursor' },
      { name: 'Figma Make', icon: 'figma' },
      { name: 'MCP Workflows', icon: null },
      { name: 'Prompt Engineering', icon: null },
    ],
    highlight: ['Claude', 'MCP Workflows'],
  },
];

export const inventions = [
  {
    name: 'Resume Roast',
    tagline: 'AI resume critique that turns a PDF into a savage-but-useful Cooked Score, specific roasts, and actionable fixes. No login required.',
    desc: 'Upload a PDF, get a streamed Cooked Score and specific roasts, then a Reality Check against an optional job description.',
    highlights: [
      'Streaming UX — score + roasts appear before full JSON finishes',
      'Client-side PDF parsing — resume text stays in the browser',
      'Soft paywall + waitlist without auth (3 free roasts/day)',
      'Lead capture mid-roast + monetization CTA analytics',
      'Groq SSE streaming with dual-key failover on rate limits',
    ],
    tags: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'AI/LLM', icon: null },
      { name: 'Postgres', icon: null },
      { name: 'Vercel', icon: 'netlify' },
    ],
    url: 'https://roastingmyresume.vercel.app',
    previewImage: '/resume-roast-preview.png',
    status: 'Live',
  },
];

export const projects = [
  {
    name: 'Enterprise HCMS Platform',
    desc: 'Onboarding, QC, workforce allocation, timesheets & appointments for multi-stakeholder ops.',
    detail: 'A full-scale Human Capital Management System built for enterprise operations. Covers end-to-end onboarding verification, quality control workflows, workforce allocation dashboards, timesheet tracking, leave management, and appointment generation — all designed for multi-stakeholder environments with role-based access.',
    role: 'Product Designer & Full Stack Developer',
    highlights: ['Role-based UX for 5+ user types', 'Built with React, Redux, Context API', 'AI-assisted iteration with Claude & Cursor', 'Scalable dashboard architecture'],
    tags: [{ name: 'React', icon: 'react' }, { name: 'Redux', icon: 'redux' }, { name: 'Claude', icon: 'claude' }],
    url: null,
  },
  {
    name: 'AI Procurement — BCG POC',
    desc: 'Tender workflows, contract management, and Claude-powered agents for enterprise automation.',
    detail: 'A proof-of-concept enterprise procurement platform designed for BCG. Features intelligent tender management, contract lifecycle workflows, spend analytics dashboards, and Claude-powered AI agents that automate supplier evaluation and procurement decision flows.',
    role: 'Product Designer & Full Stack Developer',
    highlights: ['Claude AI agents for procurement automation', 'Tender & contract management UX', 'Spend analytics dashboard', 'Enterprise-grade workflow design'],
    tags: [{ name: 'Claude AI', icon: 'claude' }, { name: 'React', icon: 'react' }, { name: 'Figma', icon: 'figma' }],
    url: null,
  },
  {
    name: 'Dubai Enterprise POCs',
    desc: 'CRM platforms for DP World, Dubai Chambers & Rashid Bin Ali Library. Top 3 of 1800 submissions.',
    detail: 'Rapid proof-of-concept CRM and enterprise workflow platforms built for high-profile Dubai clients — DP World, Dubai Chambers, and Rashid Bin Ali Library. Selected in the top 3 out of 1800 global submissions. Built and deployed live demos using Figma Make, Cursor, React, and Netlify.',
    role: 'Product Designer & Frontend Developer',
    highlights: ['Top 3 of 1800 global submissions', 'Clients: DP World, Dubai Chambers, Rashid Bin Ali Library', 'Live Netlify-hosted demos', 'Rapid POC delivery with Figma Make'],
    tags: [{ name: 'Figma Make', icon: 'figma' }, { name: 'React', icon: 'react' }, { name: 'Netlify', icon: 'netlify' }],
    url: 'https://centralized-archiving-system-3.vercel.app/LOGIN',
  },
  {
    name: 'Inferred Theorem — Financial AI',
    desc: 'AI-assisted financial intelligence and automated reporting with Claude MCP data pipelines.',
    detail: 'Designed and developed an AI-powered financial intelligence platform for Inferred Theorem Ltd. Features automated monthly reporting, proprietary financial calculations, Claude MCP-powered data extraction pipelines, and a clean dashboard for visualising financial insights from public datasets.',
    role: 'Product Designer & AI Workflow Developer',
    highlights: ['Claude MCP data extraction pipelines', 'Automated monthly financial reports', 'Proprietary financial calculations', 'Public dataset integrations'],
    tags: [{ name: 'Claude MCP', icon: 'claude' }, { name: 'Automation', icon: null }],
    url: 'https://www.inferredtheorem.com/',
  },
  {
    name: 'Sanatan Intelligence',
    desc: 'Bilingual OTT-style community platform with live-streaming and gallery management.',
    detail: 'Leading end-to-end product design for a bilingual (Hindi/English) community platform serving multi-generational users. Includes live-streaming systems, gallery management, an OTT-style content platform, and community features — all designed with accessibility and cultural sensitivity in mind.',
    role: 'Product Designer (Lead)',
    highlights: ['Bilingual UX for multi-generational users', 'Live-streaming & OTT platform design', 'Gallery & content management system', 'AI-assisted workflows with Claude & Figma'],
    tags: [{ name: 'UX Strategy', icon: null }, { name: 'Claude', icon: 'claude' }, { name: 'Figma', icon: 'figma' }],
    url: 'https://omsanatan.org/en',
  },
  {
    name: 'Neuanchor Stars',
    desc: 'Full product design and frontend for a talent & media platform.',
    detail: 'Complete product design and frontend development for NeuAnchor Stars — a talent and media platform. Designed the full design system, user flows, onboarding experience, and implemented the frontend with React. Received direct praise from VP of Operations for multi-stakeholder design execution.',
    role: 'Product Designer & Frontend Developer',
    highlights: ['Full design system from scratch', 'Talent discovery & media UX', 'React frontend implementation', 'Praised by VP Operations, Scottish High International School'],
    tags: [{ name: 'React', icon: 'react' }, { name: 'Figma', icon: 'figma' }, { name: 'Design System', icon: null }],
    url: 'https://neuanchorstars.in/',
  },
  {
    name: 'Recruiit.ai',
    desc: 'AI-powered recruitment platform with smart hiring workflows and candidate intelligence.',
    detail: 'Product design for an AI-powered recruitment platform that streamlines the entire hiring pipeline. Features smart job matching, candidate intelligence dashboards, automated screening workflows, and recruiter-facing analytics — all designed for speed and clarity.',
    role: 'Product Designer',
    highlights: ['AI-powered candidate matching UX', 'Smart hiring workflow design', 'Recruiter analytics dashboard', 'End-to-end product design'],
    tags: [{ name: 'AI', icon: null }, { name: 'React', icon: 'react' }, { name: 'Product Design', icon: null }],
    url: 'https://recruiit.ai/',
  },
];

export const stats = [
  { num: '1+', label: 'Years in enterprise UX' },
  { num: '10+', label: 'Products shipped' },
  { num: 'Top 3', label: 'of 1800 Dubai POC submissions' },
];

export const links = {
  linkedin: 'https://www.linkedin.com/in/adarsh-kumar-rawat-36b725248/',
  github: 'https://github.com/Adarshrawat26',
};
