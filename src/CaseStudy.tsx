import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNetlify } from 'react-icons/si';

function Hl({ children }: { children: ReactNode }) {
  return <span className="hl hl--cyan font-medium">{children}</span>;
}

const steps: {
  num: string;
  title: string;
  desc: string;
  descHl: ReactNode;
  tool: string;
}[] = [
  {
    num: '01',
    title: 'Starting with a PDF',
    desc: 'It started with just my resume — a single PDF. I fed it to Claude and asked it to extract every detail: experience, projects, skills, links. That became the data layer. No manual typing, no copy-paste errors.',
    descHl: <>It started with just my resume — a <Hl>single PDF</Hl>. I fed it to Claude and asked it to extract every detail: experience, projects, skills, links. That became the <Hl>data layer</Hl>. No manual typing, no copy-paste errors.</>,
    tool: 'Claude Code',
  },
  {
    num: '02',
    title: 'Designing with prompts',
    desc: 'Instead of opening Figma first, I described what I wanted in plain English. "Minimal, light mode, purple accent, card-based layout." Claude scaffolded the entire React + Tailwind structure in one shot.',
    descHl: <>Instead of opening Figma first, I described what I wanted in <Hl>plain English</Hl>. &quot;Minimal, light mode, warm accent, card-based layout.&quot; Claude scaffolded the entire <Hl>React + Tailwind structure</Hl> in one shot.</>,
    tool: 'Claude Code + Cursor',
  },
  {
    num: '03',
    title: 'Iterating fast',
    desc: 'Every change was a conversation. "Make the text bigger." "Separate the education section." What would take hours in code took seconds. Cursor handled the diffs, Claude handled the logic.',
    descHl: <>Every change was a <Hl>conversation</Hl>. &quot;Make the text bigger.&quot; &quot;Separate the education section.&quot; What would take hours in code took <Hl>seconds</Hl>. Cursor handled the diffs, Claude handled the logic.</>,
    tool: 'Cursor',
  },
  {
    num: '04',
    title: 'Building real features',
    desc: 'Framer Motion animations, dot navigation, custom cursor, skill icons, football gallery, contact form, Vercel Analytics — each feature was a prompt. The hardest part was writing the right prompt, not the code.',
    descHl: <>Framer Motion animations, side-rail navigation, custom cursor, contact form, Vercel Analytics — <Hl>each feature was a prompt</Hl>. The hardest part was writing the <Hl>right prompt</Hl>, not the code.</>,
    tool: 'Claude Code',
  },
  {
    num: '05',
    title: 'Shipping in one session',
    desc: 'From blank Vite project to live on Vercel — in one session. GitHub push, auto-deploy on every commit, and Vercel Analytics wired in. The site was live before I even had a custom domain.',
    descHl: <>From blank Vite project to <Hl>live on Vercel</Hl> — in <Hl>one session</Hl>. GitHub push, auto-deploy on every commit, and Vercel Analytics wired in.</>,
    tool: 'Claude Code + Vercel',
  },
  {
    num: '06',
    title: 'Buying & connecting my domain',
    desc: 'I bought adarshcool.in on GoDaddy — searched the name, checked out, and owned it in minutes. Then in Vercel I added the domain, copied the DNS records, and updated GoDaddy: an A record and a CNAME. Waited ~30 minutes, and adarshcool.in was live with free SSL.',
    descHl: <>I bought <Hl>adarshcool.in</Hl> on GoDaddy — searched the name, checked out, and owned it in minutes. Then in Vercel I added the domain, copied the <Hl>DNS records</Hl>, and updated GoDaddy: A record + CNAME. Waited ~30 minutes, and <Hl>adarshcool.in was live</Hl> with free SSL.</>,
    tool: 'GoDaddy + Vercel',
  },
];

const articleStack = ['React + TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'];

const shipped = [
  'Custom cursor', 'Side-rail navigation', 'Resume popup', 'Contact form',
  'Gallery section', 'SEO + OG tags', 'GoDaddy domain', 'adarshcool.in live',
];

const learnings: { title: string; desc: string; descHl: ReactNode }[] = [
  {
    title: 'Prompt = design brief',
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
  { icon: <span className="text-sm">🌀</span>, name: 'Tailwind CSS' },
  { icon: <span className="text-sm">✦</span>, name: 'Framer Motion' },
  { icon: <img src="/claude.svg" width={18} height={18} alt="" style={{ objectFit: 'contain' }} />, name: 'Claude Code' },
  { icon: <img src="/cursor.svg" width={18} height={18} alt="" style={{ objectFit: 'contain', borderRadius: 3 }} />, name: 'Cursor' },
  { icon: <SiNetlify size={18} color="#00C7B7" />, name: 'Vercel' },
];

function SectionLabel({ children }: { children: string }) {
  return <p className="mono-label">{children}</p>;
}

function ArticleLayout() {
  return (
    <article className="space-y-12">
      <div className="space-y-4">
        <p className="text-md sm:text-lg text-ink leading-[1.7] font-normal">
          This portfolio wasn&apos;t designed in Figma or coded line by line. It was <Hl>built through conversation</Hl> — using <Hl>intentional prompting</Hl> as the primary design tool.
        </p>
        <p className="text-base text-ink-2 leading-[1.8] font-normal">
          The hardest part was writing the <Hl>right prompt</Hl>, not the code.
        </p>
      </div>

      <div>
        <SectionLabel>The process — 6 steps</SectionLabel>
        <div className="space-y-8 mt-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className={i !== steps.length - 1 ? 'pb-8 border-b border-rule' : ''}
            >
              <p className="mono-label !mb-2">{s.num}</p>
              <h3 className="text-md sm:text-lg font-bold text-ink mb-2 font-display">{s.title}</h3>
              <p className="text-sm sm:text-base text-ink-2 leading-[1.8] font-normal">{s.descHl ?? s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel>What got shipped</SectionLabel>
        <p className="text-sm text-ink-2 leading-[1.8] font-medium mt-4">
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
        <div className="space-y-6 mt-4">
          {learnings.map((l, i) => (
            <div key={i}>
              <p className="text-sm font-bold text-ink mb-1"><Hl>{l.title}</Hl></p>
              <p className="text-sm text-ink-2 leading-[1.75] font-normal">{l.descHl}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel>Stack used</SectionLabel>
        <p className="text-sm text-ink-2 leading-[1.8] font-medium mt-4">
          {articleStack.join(' · ')}
        </p>
      </div>

      <div className="pt-4 border-t border-rule">
        <p className="text-base text-ink-2 leading-[1.8] font-normal">
          If you&apos;re building your own portfolio — start with what you already have. A <Hl>resume</Hl>, a <Hl>point of view</Hl>, and a few <Hl>good prompts</Hl> go a long way.
        </p>
        <p className="text-sm text-ink-3 mt-4 font-semibold">— Adarsh</p>
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
      className="card p-6 sm:p-8 space-y-10"
    >
      <p className="text-md sm:text-lg text-ink font-normal leading-relaxed">
        This portfolio wasn&apos;t designed in Figma or coded line by line.
        It was <Hl>built through conversation</Hl> — using Claude Code, Cursor, and intentional prompting as the primary design tools.
      </p>

      <div className="space-y-0">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className={`flex gap-5 py-6 ${i !== steps.length - 1 ? 'border-b border-rule' : ''}`}
          >
            <div className="shrink-0 w-10 h-10 rounded-[var(--radius-input)] flex items-center justify-center border border-rule bg-paper-2">
              <span className="text-3xs font-semibold text-ink-3">{s.num}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <p className="text-base font-bold text-ink font-display">{s.title}</p>
                <span className="text-3xs font-semibold px-2.5 py-1 rounded-full border border-rule bg-paper-2 text-ink-2 shrink-0">
                  {s.tool}
                </span>
              </div>
              <p className="text-sm text-ink-2 leading-relaxed mt-2">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="card--quiet p-6 space-y-4">
        <SectionLabel>Key learnings</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {learnings.map((l, i) => (
            <div key={i} className="space-y-1.5">
              <p className="text-sm font-bold text-ink">{l.title}</p>
              <p className="text-xs text-ink-2 leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel>Stack used</SectionLabel>
        <div className="flex flex-wrap gap-3 mt-3">
          {stack.map((s) => (
            <div key={s.name} className="flex items-center gap-2 border border-rule rounded-[var(--radius-input)] px-3 py-2 bg-paper-2">
              {s.icon}
              <span className="text-xs font-medium text-ink-2">{s.name}</span>
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
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink leading-none tracking-tight">
            How I built this
          </h2>
          <p className="text-xs text-ink-3 mt-2 font-medium">A UX case study on building with AI</p>
        </div>
      )}
      {embedded ? <ArticleLayout /> : <PortfolioLayout />}
    </div>
  );
}
