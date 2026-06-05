import { motion } from 'framer-motion';
import { Mail, Phone, GitFork, ExternalLink, ArrowUpRight } from 'lucide-react';
import { experience, skills, projects, stats, links } from './data';
import { SkillIcon } from './SkillIcon';
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
  return (
    <div className="min-h-screen w-full bg-[#F9F9F9]" style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif" }}>
      <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-8 lg:py-12 pb-20 space-y-3">

        {/* ── HERO ── */}
        <motion.div {...fadeUp(0)} className="w-full bg-white border border-[#EBEBEB] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">

            {/* Photo */}
            <div className="relative shrink-0">
              <img
                src="/profile.webp"
                alt="Adarsh Rawat"
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl object-cover border border-[#E8E8E8]"
              />
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 bg-white border border-[#DDEFD8] text-[#2A9D5C] text-[11px] font-bold px-2.5 py-[3px] rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D5C] animate-pulse" />
                Available
              </span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 w-full">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-1.5px] leading-[1.05] text-[#0a0a0a]">
                    Adarsh Rawat
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
                    { icon: <Phone size={13} />, label: '+91 9506493685', href: 'tel:+919506493685' },
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

              {/* Stats */}
              <Divider />
              <div className="flex flex-wrap gap-8 sm:gap-12">
                {stats.map((s) => (
                  <div key={s.num}>
                    <p className="text-2xl sm:text-3xl font-extrabold text-[#5B4CF5] tracking-tight leading-none">{s.num}</p>
                    <p className="text-[13px] text-[#888] mt-1.5 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── EXPERIENCE + SKILLS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] gap-3">

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

        {/* ── PROJECTS ── */}
        <motion.div {...fadeUp(0.14)} className="w-full bg-white border border-[#EBEBEB] rounded-2xl p-6 sm:p-7">
          <div className="flex items-center justify-between mb-5">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#999]">Selected Projects</p>
            <p className="text-[12.5px] text-[#BBB] font-medium flex items-center gap-1.5">
              <ArrowUpRight size={13} className="text-[#5B4CF5]" />
              Click any highlighted card to open the live project
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {projects.map((p, i) => {
              const isLink = !!p.url;
              const Wrap = isLink ? 'a' : 'div';
              const props = isLink ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' } : {};

              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.16 + i * 0.04 }}
                  className="h-full"
                >
                  <Wrap
                    {...props}
                    className={`group flex flex-col h-full border border-[#EBEBEB] rounded-xl p-5 bg-white transition-all duration-150
                      ${isLink ? 'hover:border-[#5B4CF5] hover:shadow-[0_2px_12px_rgba(91,76,245,0.08)] cursor-pointer' : 'cursor-default'}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[12px] font-bold text-[#CCC]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {isLink && (
                        <ArrowUpRight size={15}
                          className="text-[#CCC] group-hover:text-[#5B4CF5] transition-colors" />
                      )}
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

        {/* ── EDUCATION ── */}
        <motion.div {...fadeUp(0.18)} className="w-full bg-white border border-[#EBEBEB] rounded-2xl p-6 sm:p-7">
          <Label>Education</Label>
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

        {/* ── TESTIMONIAL ── */}
        <motion.div {...fadeUp(0.2)} className="w-full bg-[#5B4CF5] rounded-2xl p-6 sm:p-8 relative overflow-hidden">

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.03] rounded-full translate-x-20 -translate-y-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-[0.03] rounded-full -translate-x-16 translate-y-16 pointer-events-none" />

          <div className="relative">
            {/* Quote mark */}
            <div className="text-[72px] leading-none font-serif text-white opacity-20 mb-2 select-none">"</div>

            <p className="text-[17px] sm:text-[19px] text-white font-medium leading-relaxed max-w-3xl -mt-6">
              Adarsh, you have been the backbone of NeuAnchor projects. I commend you for your skills, your patience to operate with multiple stakeholders, the way you captured our ideas and converted them to reality, the calm you maintained during multiple last minute changes... and so on.
            </p>

            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white border-opacity-20">
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white font-bold text-sm shrink-0">
                SC
              </div>
              <div>
                <p className="text-white font-bold text-[15px]">Shuchi Chopra</p>
                <p className="text-white text-[13px] opacity-70">Vice President Operations · Scottish High International School</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-full px-3 py-1">
                <ExternalLink size={11} className="text-white opacity-70" />
                <span className="text-white text-[12px] opacity-70 font-medium">Via LinkedIn</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── FOOTER ── */}
        <motion.footer {...fadeUp(0.2)}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 px-1 pt-1 text-[13px] text-[#BBB] font-medium">
          <span>Adarsh Rawat · adarshrawat474@gmail.com</span>
          <span>Updated May 2026</span>
        </motion.footer>

      </main>
    </div>
  );
}
