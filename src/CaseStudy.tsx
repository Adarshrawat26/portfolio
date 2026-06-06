import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNetlify } from 'react-icons/si';

function Hl({ children }: { children: ReactNode }) {
  return <span className="text-[#5B4CF5] font-semibold">{children}</span>;
}

const steps: {
  num: string;
  title: string;
  desc: string;
  descHl: ReactNode;
  tool: string;
  color: string;
}[] = [
  {
    num: '01',
    title: 'Starting with a PDF',
    desc: 'It started with just my resume — a single PDF. I fed it to Claude and asked it to extract every detail: experience, projects, skills, links. That became the data layer. No manual typing, no copy-paste errors.',
    descHl: <>It started with just my resume — a <Hl>single PDF</Hl>. I fed it to Claude and asked it to extract every detail: experience, projects, skills, links. That became the <Hl>data layer</Hl>. No manual typing, no copy-paste errors.</>,
    tool: 'Claude Code',
    color: '#D97B4B',
  },
  {
    num: '02',
    title: 'Designing with prompts',
    desc: 'Instead of opening Figma first, I described what I wanted in plain English. "Minimal, light mode, Nunito Sans, purple accent, card-based layout." Claude scaffolded the entire React + Tailwind structure in one shot.',
    descHl: <>Instead of opening Figma first, I described what I wanted in <Hl>plain English</Hl>. &quot;Minimal, light mode, Nunito Sans, purple accent, card-based layout.&quot; Claude scaffolded the entire <Hl>React + Tailwind structure</Hl> in one shot.</>,
    tool: 'Claude Code + Cursor',
    color: '#5B4CF5',
  },
  {
    num: '03',
    title: 'Iterating fast',
    desc: 'Every change was a conversation. "Make the text bigger." "Separate the education section." "Add Playfair Display to my name." What would take hours in code took seconds. Cursor handled the diffs, Claude handled the logic.',
    descHl: <>Every change was a <Hl>conversation</Hl>. &quot;Make the text bigger.&quot; &quot;Separate the education section.&quot; What would take hours in code took <Hl>seconds</Hl>. Cursor handled the diffs, Claude handled the logic.</>,
    tool: 'Cursor',
    color: '#111',
  },
  {
    num: '04',
    title: 'Building real features',
    desc: 'Framer Motion animations, dot navigation, custom cursor, skill icons, football gallery, contact form, Vercel Analytics — each feature was a prompt. The hardest part was writing the right prompt, not the code.',
    descHl: <>Framer Motion animations, dot navigation, custom cursor, contact form, Vercel Analytics — <Hl>each feature was a prompt</Hl>. The hardest part was writing the <Hl>right prompt</Hl>, not the code.</>,
    tool: 'Claude Code',
    color: '#D97B4B',
  },
  {
    num: '05',
    title: 'Shipping in one session',
    desc: 'From blank Vite project to live on Vercel — in one session. GitHub push, auto-deploy on every commit, and Vercel Analytics wired in. The site was live at designedbyadarsh.vercel.app before I even had a custom domain.',
    descHl: <>From blank Vite project to <Hl>live on Vercel</Hl> — in <Hl>one session</Hl>. GitHub push, auto-deploy on every commit, and Vercel Analytics wired in.</>,
    tool: 'Claude Code + Vercel',
    color: '#5B4CF5',
  },
  {
    num: '06',
    title: 'Buying & connecting my domain',
    desc: 'I bought adarshcool.in on GoDaddy — searched the name, checked out, and owned it in minutes. Then in Vercel I added the domain under Project Settings, copied the DNS records, and updated GoDaddy: an A record pointing @ to 76.76.21.21 and a CNAME for www → cname.vercel-dns.com. Deleted the old www redirect that was conflicting. Waited ~30 minutes, and adarshcool.in was live with free SSL.',
    descHl: <>I bought <Hl>adarshcool.in</Hl> on GoDaddy — searched the name, checked out, and owned it in minutes. Then in Vercel I added the domain, copied the <Hl>DNS records</Hl>, and updated GoDaddy: A record + CNAME. Waited ~30 minutes, and <Hl>adarshcool.in was live</Hl> with free SSL.</>,
    tool: 'GoDaddy + Vercel',
    color: '#1BDBA6',
  },
];

const articleStack = ['React + TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'];

const shipped = [
  'Custom cursor', 'Dot navigation', 'Resume popup', 'Contact form',
  'Gallery section', 'SEO + OG tags', 'GoDaddy domain', 'adarshcool.in live',
];

const learnings: { title: string; desc: string; descHl: ReactNode }[] = [
  {
    title: 'Prompt = Design Brief',
    desc: 'The quality of your prompt is the quality of your output. Specificity wins every time.',
    descHl: <>The quality of your <Hl>prompt</Hl> is the quality of your output. <Hl>Specificity</Hl> wins every time.</>,
  },
  {
    title: 'AI accelerates, taste decides',
    desc: 'Claude generates options fast. Your eye for design still determines what stays and what goes.',
    descHl: <>Claude generates options fast. Your <Hl>eye for design</Hl> still determines what stays and what goes.</>,
  },
  {
    title: 'Ship first, refine fast',
    desc: 'Launching in one session meant real feedback, real analytics, real improvement loops.',
    descHl: <>Launching in <Hl>one session</Hl> meant real feedback, real analytics, real improvement loops.</>,
  },
];

const stack = [
  { icon: <SiReact size={18} color="#61DAFB" />, name: 'React + TypeScript' },
  { icon: <span className="text-[14px]">🌀</span>, name: 'Tailwind CSS' },
  { icon: <span className="text-[14px]">✦</span>, name: 'Framer Motion' },
  { icon: <img src="/claude.svg" width={18} height={18} alt="" style={{ objectFit: 'contain' }} />, name: 'Claude Code' },
  { icon: <img src="/cursor.svg" width={18} height={18} alt="" style={{ objectFit: 'contain', borderRadius: 3 }} />, name: 'Cursor' },
  { icon: <SiNetlify size={18} color="#00C7B7" />, name: 'Vercel' },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#999] mb-4">{children}</p>
  );
}

function ArticleLayout() {
  return (
    <article className="space-y-12">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#999] mb-3">TL;DR</p>
        <p className="text-[15px] sm:text-[17px] text-[#444] leading-[1.8] font-medium">
          <Hl>One resume PDF</Hl> → extracted the data → <Hl>prompts replaced Figma</Hl> → shipped features → <Hl>live on Vercel</Hl> → bought <Hl>adarshcool.in</Hl> on GoDaddy and connected DNS. One session. <Hl>Zero templates.</Hl>
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-[18px] sm:text-[19px] text-[#111] leading-[1.7] font-medium">
          This portfolio wasn&apos;t designed in Figma or coded line by line. It was <Hl>built through conversation</Hl> — using <Hl>intentional prompting</Hl> as the primary design tool.
        </p>
        <p className="text-[17px] text-[#555] leading-[1.8] font-medium italic">
          The hardest part was writing the <Hl>right prompt</Hl>, not the code.
        </p>
      </div>

      <div>
        <SectionLabel>The process — 6 steps</SectionLabel>
        <div className="space-y-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className={i !== steps.length - 1 ? 'pb-8 border-b border-[#EBEBEB]' : ''}
            >
              <p className="text-[12px] font-bold text-[#BBB] mb-2">{s.num}</p>
              <h3 className="text-[18px] sm:text-[19px] font-bold text-[#111] mb-2">{s.title}</h3>
              <p className="text-[15px] sm:text-[16px] text-[#555] leading-[1.8] font-medium">{s.descHl ?? s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel>What got shipped</SectionLabel>
        <p className="text-[15px] text-[#555] leading-[1.8] font-medium">
          {shipped.map((item, i) => (
            <span key={item}>
              {i > 0 && ' · '}
              {item === 'adarshcool.in live' || item === 'GoDaddy domain' ? <Hl>{item}</Hl> : item}
            </span>
          ))}
        </p>
      </div>

      <div>
        <SectionLabel>Key learnings</SectionLabel>
        <div className="space-y-6">
          {learnings.map((l, i) => (
            <div key={i}>
              <p className="text-[15px] font-bold text-[#111] mb-1"><Hl>{l.title}</Hl></p>
              <p className="text-[15px] text-[#555] leading-[1.75] font-medium">{l.descHl}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel>Stack used</SectionLabel>
        <p className="text-[15px] text-[#555] leading-[1.8] font-medium">
          {articleStack.join(' · ')}
        </p>
      </div>

      <div className="pt-4 border-t border-[#EBEBEB]">
        <p className="text-[16px] text-[#555] leading-[1.8] font-medium">
          If you&apos;re building your own portfolio — start with what you already have. A <Hl>resume</Hl>, a <Hl>point of view</Hl>, and a few <Hl>good prompts</Hl> go a long way.
        </p>
        <p className="text-[14px] text-[#999] mt-4 font-semibold">— Adarsh</p>
      </div>
    </article>
  );
}

function PortfolioLayout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="w-full bg-white border border-[#EBEBEB] rounded-2xl p-6 sm:p-8 space-y-10"
    >
      <div className="border-l-2 border-[#5B4CF5] pl-5">
        <p className="text-[17px] sm:text-[19px] text-[#111] font-semibold leading-relaxed">
          This portfolio wasn&apos;t designed in Figma or coded line by line.
          It was <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>built through conversation</span> — using Claude Code, Cursor, and intentional prompting as the primary design tools.
        </p>
      </div>

      <div className="space-y-0">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className={`flex gap-5 py-6 ${i !== steps.length - 1 ? 'border-b border-[#F0F0F0]' : ''}`}
          >
            <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border border-[#EBEBEB] bg-[#FAFAFA]">
              <span className="text-[11px] font-bold text-[#CCC]">{s.num}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <p className="text-[16px] font-bold text-[#111]">{s.title}</p>
                <span
                  className="text-[11px] font-bold px-2.5 py-1 rounded-full border shrink-0"
                  style={{ color: s.color, borderColor: `${s.color}30`, background: `${s.color}10` }}
                >
                  {s.tool}
                </span>
              </div>
              <p className="text-[14px] text-[#666] leading-relaxed mt-2">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-[#FAFAFA] border border-[#EBEBEB] rounded-xl p-6 space-y-4">
        <SectionLabel>Key Learnings</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {learnings.map((l, i) => (
            <div key={i} className="space-y-1.5">
              <p className="text-[14px] font-bold text-[#111]">{l.title}</p>
              <p className="text-[13px] text-[#888] leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel>Stack used</SectionLabel>
        <div className="flex flex-wrap gap-3">
          {stack.map((s) => (
            <div key={s.name} className="flex items-center gap-2 border border-[#EBEBEB] rounded-lg px-3 py-2 bg-[#FAFAFA]">
              {s.icon}
              <span className="text-[13px] font-semibold text-[#444]">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudy({ embedded = false }: { embedded?: boolean }) {
  return (
    <div id="casestudy">
      {!embedded && (
        <div className="text-center mb-5">
          <h2
            className="text-[28px] sm:text-[34px] text-[#0a0a0a] leading-none tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}
          >
            How I built this
          </h2>
          <p className="text-[13px] text-[#999] mt-2 font-medium">A UX case study on building with AI</p>
        </div>
      )}
      {embedded ? <ArticleLayout /> : <PortfolioLayout />}
    </div>
  );
}
