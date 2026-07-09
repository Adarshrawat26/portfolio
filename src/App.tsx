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


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as const },
});

function Label({ children }: { children: string }) {
  return (
    <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#999] mb-5">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <div className="mb-5 text-center">
      <h2
        className="text-[28px] sm:text-[34px] text-[#0a0a0a] leading-none tracking-tight"
        style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}
      >
        {children}
      </h2>
    </div>
  );
}

function Chip({ children, accent, icon }: { children: string; accent?: boolean; icon?: string | null }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-[13px] px-3 py-1 rounded-md border font-semibold
      ${accent
        ? 'bg-[#F0EEFF] text-[#5B4CF5] border-[#D4CEFF]'
        : 'bg-[#F7F7F7] text-[#444] border-[#E8E8E8]'
      }`}>
      {icon && <SkillIcon icon={icon} />}
      {children}
    </span>
  );
}

function Divider() {
  return <div className="border-t border-[#F0F0F0] my-6" />;
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
    <div className="min-h-screen w-full bg-[#F9F9F9]" style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif" }}>
      <Loader />
      <ResumeThanks open={showResumeThanks} onClose={() => setShowResumeThanks(false)} />
      <CustomCursor />
      <DotNav />
      <NewsBar />
      <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-8 lg:py-12 pb-20 space-y-12">

        {/* ── HERO ── */}
        <motion.div id="hero" {...fadeUp(0)} className="w-full bg-white border border-[#EBEBEB] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">

            {/* Photo */}
            <div className="relative shrink-0">
              <img
                src="/profile.webp"
                alt="Adarsh Rawat"
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl object-cover border border-[#E8E8E8]"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 w-full">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div>
                  <h1
                    className="text-3xl sm:text-4xl lg:text-[42px] leading-[1.05] text-[#0a0a0a]"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontStyle: 'italic', letterSpacing: '-0.5px' }}
                  >
                    Adarsh Kumar Rawat
                  </h1>
                  <p className="text-base sm:text-[17px] text-[#444] mt-2.5 font-semibold">
                    Enterprise Product Designer &amp; Full Stack Developer
                  </p>
                  <p className="text-[14px] text-[#999] mt-1">
                    Gurugram, India · B.Tech IT, KIET 2026
                  </p>
                </div>

                {/* Contact */}
                <div className="flex flex-row flex-wrap lg:flex-col lg:items-end gap-2 lg:gap-2 shrink-0">
                  {[
                    { icon: <Mail size={13} />, label: 'adarshrawat474@gmail.com', href: 'mailto:adarshrawat474@gmail.com' },
                    { icon: <ExternalLink size={13} />, label: 'LinkedIn', href: links.linkedin },
                    { icon: <GitFork size={13} />, label: 'GitHub', href: links.github },
                  ].map(({ icon, label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[13.5px] text-[#555] hover:text-[#5B4CF5] transition-colors font-semibold">
                      {icon} {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Download Resume */}
              <button
                type="button"
                onClick={handleResumeDownload}
                className="inline-flex items-center gap-2 mt-4 bg-[#5B4CF5] hover:bg-[#4a3de0] text-white text-[13px] font-semibold px-4 py-2 rounded-lg transition-colors group"
              >
                <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </button>

              {/* Stats */}
              <Divider />
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="flex flex-wrap gap-8 sm:gap-12">
                  {stats.map((s) => (
                    <div key={s.num}>
                      <p className="text-2xl sm:text-3xl font-extrabold text-[#5B4CF5] tracking-tight leading-none">{s.num}</p>
                      <p className="text-[13px] text-[#888] mt-1.5 font-medium">{s.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/workshop"
                  className="inline-flex items-center gap-1.5 text-[14px] text-[#555] hover:text-[#5B4CF5] transition-colors font-semibold shrink-0"
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
                >
                  Adarsh&apos;s workshop
                  <ArrowUpRight size={13} className="not-italic" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── EXPERIENCE + SKILLS ── */}
        <div id="experience">
          <SectionTitle>Experience & Skills</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] gap-4">

          {/* Experience */}
          <motion.div {...fadeUp(0.07)} className="w-full bg-white border border-[#EBEBEB] rounded-2xl p-6 sm:p-7">
            <Label>Experience</Label>

            {experience.map((e, i) => (
              <div key={e.company}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <p className="text-[17px] font-bold text-[#111]">{e.role}</p>
                    <p className="text-[15px] font-semibold text-[#5B4CF5] mt-0.5">{e.company}</p>
                    <p className="text-[14px] text-[#999] mt-0.5">{e.location}</p>
                  </div>
                  <span className="text-[14px] text-[#AAA] shrink-0 font-semibold">{e.period}</span>
                </div>
                <p className="text-[15px] text-[#555] leading-relaxed mt-3">{e.desc}</p>
                {i !== experience.length - 1 && <Divider />}
              </div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div {...fadeUp(0.1)} className="w-full bg-white border border-[#EBEBEB] rounded-2xl p-6 sm:p-7">
            <Label>Skills</Label>
            <div className="space-y-5">
              {skills.map((g) => (
                <div key={g.label}>
                  <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#5B4CF5] mb-2.5">{g.label}</p>
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
          </motion.div>
        </div>
        </div>

        {/* ── INVENTIONS ── */}
        <div id="inventions">
          <SectionTitle>My Inventions</SectionTitle>
          <motion.div {...fadeUp(0.12)} className="w-full bg-white border border-[#EBEBEB] rounded-2xl p-6 sm:p-7">
            <div className="flex items-center justify-between mb-5">
              <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#999]">My Inventions</p>
              <p className="text-[12.5px] text-[#BBB] font-medium hidden sm:flex items-center gap-1.5">
                <ArrowUpRight size={13} className="text-[#5B4CF5]" />
                Side products I shipped solo
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {inventions.map((item, i) => (
                <InventionCard key={item.name} item={item} index={i} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── PROJECTS ── */}
        <div id="projects">
          <SectionTitle>Selected Projects</SectionTitle>
        <motion.div {...fadeUp(0.14)} className="w-full bg-white border border-[#EBEBEB] rounded-2xl p-6 sm:p-7">
          <div className="flex items-center justify-between mb-5">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#999]">Selected Projects</p>
            <p className="text-[12.5px] text-[#BBB] font-medium flex items-center gap-1.5">
              <ArrowUpRight size={13} className="text-[#5B4CF5]" />
              Click a card to open the live project
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {projects.map((p, i) => {
              const Wrap = p.url ? 'a' : 'div';
              const wrapProps = p.url ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' } : {};
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.16 + i * 0.04 }}
                  className="h-full"
                >
                  <Wrap
                    {...wrapProps}
                    className={`group flex flex-col h-full border border-[#EBEBEB] rounded-xl p-5 bg-white transition-all duration-150
                      ${p.url ? 'hover:border-[#5B4CF5] hover:shadow-[0_2px_12px_rgba(91,76,245,0.08)] cursor-pointer' : 'cursor-default'}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[12px] font-bold text-[#CCC]">{String(i + 1).padStart(2, '0')}</span>
                      {p.url && <ArrowUpRight size={15} className="text-[#CCC] group-hover:text-[#5B4CF5] transition-colors" />}
                    </div>
                    <p className="text-[16px] font-bold text-[#111] leading-snug mb-2">{p.name}</p>
                    <p className="text-[14px] text-[#555] leading-relaxed mb-3 flex-1">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {p.tags.map((t) => <Chip key={t.name} icon={t.icon}>{t.name}</Chip>)}
                    </div>
                  </Wrap>
                </motion.div>
              );
            })}

          </div>
        </motion.div>
        </div>

        {/* ── EDUCATION ── */}
        <div id="education">
          <SectionTitle>Education</SectionTitle>
        <motion.div {...fadeUp(0.18)} className="w-full bg-white border border-[#EBEBEB] rounded-2xl p-6 sm:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="border border-[#EBEBEB] rounded-xl p-5">
              <p className="text-[16px] font-bold text-[#111] leading-snug">B.Tech — Information Technology</p>
              <p className="text-[14px] font-semibold text-[#5B4CF5] mt-0.5">KIET Group of Institutions</p>
              <p className="text-[13px] text-[#999] mt-0.5">Ghaziabad, UP · 2022 – 2026</p>
            </div>

            <div className="border border-[#EBEBEB] rounded-xl p-5">
              <p className="text-[16px] font-bold text-[#111] leading-snug">ICSE — Class XII</p>
              <p className="text-[14px] font-semibold text-[#5B4CF5] mt-0.5">City Montessori School</p>
              <p className="text-[13px] text-[#999] mt-0.5">Lucknow, UP · 2022</p>
            </div>

          </div>
        </motion.div>
        </div>

        {/* ── TESTIMONIAL ── */}
        <div id="testimonial">
        <motion.div id="testimonial" {...fadeUp(0.2)} className="w-full bg-white border border-[#EBEBEB] rounded-2xl p-6 sm:p-8">
          <div className="flex gap-3 items-start">
            <span className="text-[40px] leading-none text-[#5B4CF5] opacity-30 font-serif select-none mt-[-6px]">"</span>
            <div className="flex-1">
              <p className="text-[14px] sm:text-[15px] text-[#444] leading-relaxed font-medium">
                Adarsh, you have been the backbone of NeuAnchor projects. I commend you for the your skills, your patience to operate with multiple stakeholders, the way you captured our ideas and converted them to reality, the calm you maintained during multiple last minute changes... and so on... You and your entire team of Blu Parrot... 🫡
              </p>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#F0F0F0]">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#F0EEFF] flex items-center justify-center text-[#5B4CF5] text-[10px] font-bold shrink-0">SC</div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#111]">Shuchi Chopra</p>
                    <p className="text-[11.5px] text-[#999]">VP Operations · Scottish High International School</p>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7463306227159121924/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[13px] text-[#BBB] hover:text-[#5B4CF5] font-semibold transition-colors"
                >
                  <ExternalLink size={12} />
                  Via LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        </div>

        {/* ── GALLERY ── */}
        <GallerySection />

        {/* ── FOOTER ── */}
        <Footer />

      </main>
    </div>
  );
}
