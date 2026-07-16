import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, GitFork, ExternalLink, ArrowUpRight, Download } from 'lucide-react';
import { experience, skills, inventions, projects, stats, links } from './data';
import { SkillIcon } from './SkillIcon';
import DotNav from './DotNav';
import CustomCursor from './CustomCursor';
import Loader from './Loader';
import GallerySection from './GallerySection';
import Footer from './Footer';
import ResumeThanks from './ResumeThanks';
import NewsBar from './NewsBar';
import InventionCard from './InventionCard';
import './index.css';

function Tile({
  children,
  span = '',
  tint = 'plain',
  className = '',
  style,
}: {
  children: React.ReactNode;
  span?: string;
  tint?: 'plain' | 'pear' | 'cyan' | 'coral';
  className?: string;
  style?: React.CSSProperties;
}) {
  const tintClass = {
    plain: 'bg-paper',
    pear:  'bg-[var(--color-accent-tint)]',
    cyan:  'bg-[var(--color-accent-2-tint)]',
    coral: 'bg-[var(--color-accent-3-tint)]',
  }[tint];

  return (
    <div className={`card ${tintClass} p-6 sm:p-7 ${span} ${className}`} style={style}>
      {children}
    </div>
  );
}

function TileLabel({ children }: { children: string }) {
  return <p className="mono-label mb-4">{children}</p>;
}

function Chip({ children, accent, icon }: { children: string; accent?: boolean; icon?: string | null }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-[13px] px-3 py-1 rounded-md border font-medium
      ${accent
        ? 'bg-[var(--color-accent-2-tint)] text-[var(--color-accent-2-deep)] border-[var(--color-accent-2)]'
        : 'bg-paper-2 text-ink-2 border-rule'
      }`}>
      {icon && <SkillIcon icon={icon} />}
      {children}
    </span>
  );
}

export default function App() {
  const [showResumeThanks, setShowResumeThanks] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Adarsh_Rawat_Resume.pdf';
    link.click();
    setShowResumeThanks(true);
  };

  return (
    <div className="min-h-screen w-full bg-paper font-body">
      <Loader />
      <ResumeThanks open={showResumeThanks} onClose={() => setShowResumeThanks(false)} />
      <CustomCursor />
      <DotNav />
      <NewsBar />

      <main className="w-full max-w-[var(--page-max)] mx-auto px-4 sm:px-6 lg:pl-20 lg:pr-10 xl:pr-16 py-8 lg:py-12 pb-24 space-y-10">

        {/* ── HERO — left-biased, off-centre, fixed-height ── */}
        <motion.header
          id="hero"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="w-full grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-10 items-start pt-2 lg:pt-4"
        >
          <img
            src="/profile.webp"
            alt="Adarsh Rawat"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-[var(--radius-card-quiet)] object-cover border border-rule"
          />

          <div className="min-w-0 w-full">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="font-display font-semibold text-[clamp(1.9rem,4vw+1rem,3rem)] leading-[1.05] text-ink tracking-[-0.02em]">
                  Adarsh Kumar Rawat <span className="char-mark align-middle ml-1" aria-hidden="true" />
                </h1>
                <p className="text-[16px] sm:text-[17px] text-ink-2 mt-2.5 font-medium">
                  Enterprise Product Designer &amp; Full Stack Developer
                </p>
                <p className="text-[13px] text-ink-3 mt-1 font-medium">
                  Gurugram, India · B.Tech IT, KIET 2026
                </p>
              </div>

              <div className="flex flex-row flex-wrap sm:flex-col sm:items-end gap-2 shrink-0">
                {[
                  { icon: <Mail size={13} />, label: 'adarshrawat474@gmail.com', href: 'mailto:adarshrawat474@gmail.com' },
                  { icon: <ExternalLink size={13} />, label: 'LinkedIn', href: links.linkedin },
                  { icon: <GitFork size={13} />, label: 'GitHub', href: links.github },
                ].map(({ icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[13.5px] text-ink-2 hover:text-[var(--color-accent-2)] transition-colors font-medium">
                    {icon} {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-5">
              <button type="button" onClick={handleResumeDownload} className="btn">
                <Download size={14} />
                Download resume
              </button>
              <Link to="/workshop" className="btn btn--outline">
                Adarsh&apos;s workshop
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </motion.header>

        {/* ── BENTO GRID — stats · experience · skills · inventions · testimonial · education ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(120px,auto)] gap-4 lg:gap-5">

          {/* Stats — wide banner tile */}
          <Tile span="sm:col-span-2 lg:col-span-4" tint="coral" className="reveal" style={{ '--i': 0 } as React.CSSProperties}>
            <div className="flex flex-wrap items-center gap-8 sm:gap-14">
              {stats.map((s) => (
                <div key={s.num}>
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight leading-none tabular-nums">{s.num}</p>
                  <p className="text-[13px] text-ink-2 mt-1.5 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </Tile>

          {/* Experience — tall wide tile */}
          <div id="experience" className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
          <Tile span="h-full" tint="pear" className="reveal" style={{ '--i': 1 } as React.CSSProperties}>
            <TileLabel>Experience</TileLabel>
            <div className="space-y-5">
              {experience.map((e, i) => (
                <div key={e.company} className={i !== experience.length - 1 ? 'pb-5 border-b border-rule' : ''}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <div>
                      <p className="text-[16px] font-semibold text-ink">{e.role}</p>
                      <p className="text-[14px] font-medium text-[var(--color-accent-2-deep)] mt-0.5">{e.company}</p>
                      <p className="text-[13px] text-ink-3 mt-0.5">{e.location}</p>
                    </div>
                    <span className="text-[12.5px] text-ink-3 shrink-0 font-medium">{e.period}</span>
                  </div>
                  <p className="text-[14px] text-ink-2 leading-relaxed mt-2.5">{e.desc}</p>
                </div>
              ))}
            </div>
          </Tile>
          </div>

          {/* Skills — tall tile */}
          <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
          <Tile span="h-full" tint="cyan" className="reveal" style={{ '--i': 2 } as React.CSSProperties}>
            <TileLabel>Skills</TileLabel>
            <div className="space-y-4">
              {skills.map((g) => (
                <div key={g.label}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-accent-2-deep)] mb-2">{g.label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <Chip key={item.name} accent={g.highlight.includes(item.name)} icon={item.icon}>
                        {item.name}
                      </Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Tile>
          </div>

          {/* Testimonial */}
          <div id="testimonial" className="sm:col-span-2 lg:col-span-2">
          <Tile span="h-full" tint="plain" className="reveal" style={{ '--i': 3 } as React.CSSProperties}>
            <p className="text-[15px] text-ink-2 leading-relaxed font-medium">
              &ldquo;Adarsh, you have been the backbone of NeuAnchor projects. I commend you for the your skills, your patience to operate with multiple stakeholders, the way you captured our ideas and converted them to reality, the calm you maintained during multiple last minute changes… and so on… You and your entire team of Blu Parrot.&rdquo;
            </p>
            <div className="flex items-center justify-between mt-5 pt-4 border-t border-rule">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent-2-tint)] flex items-center justify-center text-[var(--color-accent-2-deep)] text-[11px] font-semibold shrink-0">SC</div>
                <div>
                  <p className="text-[13px] font-semibold text-ink">Shuchi Chopra</p>
                  <p className="text-[11.5px] text-ink-3">VP Operations · Scottish High International School</p>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7463306227159121924/"
                target="_blank" rel="noopener noreferrer"
                className="text-[12px] text-ink-3 hover:text-[var(--color-accent-2)] font-medium transition-colors shrink-0"
              >
                Via LinkedIn
              </a>
            </div>
          </Tile>
          </div>

          {/* Education — small tile */}
          <div id="education" className="sm:col-span-2 lg:col-span-2">
          <Tile span="h-full" tint="plain" className="reveal" style={{ '--i': 4 } as React.CSSProperties}>
            <TileLabel>Education</TileLabel>
            <div className="space-y-4">
              <div>
                <p className="text-[14.5px] font-semibold text-ink leading-snug">B.Tech — Information Technology</p>
                <p className="text-[13px] font-medium text-[var(--color-accent-2-deep)] mt-0.5">KIET Group of Institutions · Ghaziabad · 2022–26</p>
              </div>
              <div>
                <p className="text-[14.5px] font-semibold text-ink leading-snug">ICSE — Class XII</p>
                <p className="text-[13px] font-medium text-[var(--color-accent-2-deep)] mt-0.5">City Montessori School · Lucknow · 2022</p>
              </div>
            </div>
          </Tile>
          </div>
        </div>

        {/* ── INVENTIONS — full-width feature ── */}
        <div id="inventions">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="font-display font-semibold text-[22px] text-ink">My inventions</h2>
            <p className="text-[13px] text-ink-3 font-medium hidden sm:block">Side products I shipped solo</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {inventions.map((item, i) => (
              <InventionCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* ── PROJECTS — F6 product card grid ── */}
        <div id="projects">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="font-display font-semibold text-[22px] text-ink">Selected projects</h2>
            <p className="text-[13px] text-ink-3 font-medium hidden sm:block">Click a card to open the live project</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p, i) => {
              const Wrap = p.url ? 'a' : 'div';
              const wrapProps = p.url ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' } : {};
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: (i % 3) * 0.05 }}
                  className="h-full"
                >
                  <Wrap
                    {...wrapProps}
                    className={`card group flex flex-col h-full p-5 ${p.url ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="mono-label !mb-0">{String(i + 1).padStart(2, '0')}</span>
                      {p.url && <ArrowUpRight size={15} className="text-ink-3 group-hover:text-[var(--color-accent-2)] transition-colors" />}
                    </div>
                    <p className="text-[16px] font-semibold text-ink leading-snug mb-2">{p.name}</p>
                    <p className="text-[14px] text-ink-2 leading-relaxed mb-3 flex-1">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {p.tags.map((t) => <Chip key={t.name} icon={t.icon}>{t.name}</Chip>)}
                    </div>
                  </Wrap>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── GALLERY ── */}
        <GallerySection />

        {/* ── FOOTER ── */}
        <Footer />

      </main>
    </div>
  );
}
