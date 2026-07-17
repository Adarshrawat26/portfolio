import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SiPython, SiGithubactions } from 'react-icons/si';

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
    title: 'Wanting something testable, not just claimed',
    desc: 'I didn’t want another prediction model that just states an accuracy number and hopes nobody checks. I wanted one I could point at a real, ongoing tournament and watch get graded match by match.',
    descHl: <>I didn&apos;t want another prediction model that just states an accuracy number and hopes nobody checks. I wanted one I could point at a <Hl>real, ongoing tournament</Hl> and watch get graded match by match.</>,
    tool: 'Planning',
  },
  {
    num: '02',
    title: 'A 12-layer feature engine',
    desc: 'Team strength comes from blending 12 signals: 46,000+ international matches since 1872, 964 historical World Cup results, opponent-adjusted Elo, FIFA rankings, squad quality, club form, injuries, head-to-head history, tactics, and live 2026 results pulled daily via API.',
    descHl: <>Team strength comes from blending <Hl>12 signals</Hl>: 46,000+ international matches since 1872, 964 historical World Cup results, opponent-adjusted <Hl>Elo</Hl>, FIFA rankings, squad quality, club form, injuries, head-to-head history, tactics, and live 2026 results pulled daily via API.</>,
    tool: 'Python + pandas/NumPy',
  },
  {
    num: '03',
    title: 'Backtesting the honest way',
    desc: 'For every World Cup from 1994 to 2022, I rebuild each team’s coefficients using only matches that happened before that tournament, then score the predictions against what actually happened. No leakage. An 8-parameter optimizer tunes itself against 500 real matches.',
    descHl: <>For every World Cup from 1994 to 2022, I rebuild each team&apos;s coefficients using <Hl>only matches that happened before that tournament</Hl>, then score the predictions against what actually happened. No leakage. An 8-parameter optimizer tunes itself against <Hl>500 real matches</Hl>.</>,
    tool: 'SciPy (Nelder-Mead)',
  },
  {
    num: '04',
    title: 'A Match Lab and a Power Index',
    desc: 'A Dixon-Coles Poisson model turns two teams’ coefficients into a scoreline probability grid — win/draw/loss, over/under, both-teams-to-score, a full heatmap. All 48 teams get ranked on a sortable Power Index. No frontend framework, just hand-rolled HTML/CSS/JS.',
    descHl: <>A Dixon-Coles Poisson model turns two teams&apos; coefficients into a <Hl>scoreline probability grid</Hl> — win/draw/loss, over/under, both-teams-to-score, a full heatmap. All 48 teams get ranked on a sortable <Hl>Power Index</Hl>. No frontend framework, just hand-rolled HTML/CSS/JS.</>,
    tool: 'Vanilla JS + Python static build',
  },
  {
    num: '05',
    title: 'Shipping it on autopilot',
    desc: 'A daily GitHub Actions job syncs live results, retrains the model, re-simulates the whole 48-team tournament 10,000 times, and redeploys the static site — zero manual steps from match result to updated dashboard.',
    descHl: <>A daily GitHub Actions job <Hl>syncs live results</Hl>, retrains the model, re-simulates the whole 48-team tournament 10,000 times, and <Hl>redeploys the static site</Hl> — zero manual steps from match result to updated dashboard.</>,
    tool: 'GitHub Actions + Vercel',
  },
  {
    num: '06',
    title: 'Getting roasted on Reddit — and finding a real bug',
    desc: 'I posted the live numbers to r/sportsanalytics. A stranger pushed back hard on whether the log-loss looked suspiciously good. I went and checked instead of getting defensive — found a real latent leakage bug in an Elo snapshot, verified it hadn’t actually changed any reported number, fixed it, and shipped the fix the same day.',
    descHl: <>I posted the live numbers to <Hl>r/sportsanalytics</Hl>. A stranger pushed back hard on whether the log-loss looked suspiciously good. I went and <Hl>checked instead of getting defensive</Hl> — found a real latent leakage bug in an Elo snapshot, verified it hadn&apos;t actually changed any reported number, fixed it, and shipped the fix the same day.</>,
    tool: 'Debugging in public',
  },
];

const articleStack = ['Python', 'NumPy / pandas / SciPy', 'SQLite', 'Vanilla JS', 'GitHub Actions', 'Vercel'];

const shipped = [
  'Dixon-Coles Poisson model', '12-layer feature engine', 'Walk-forward backtest (500 matches)',
  'Match Lab simulator', '48-team Power Index', 'Daily automated pipeline', 'Live on Vercel',
];

const learnings: { title: string; desc: string; descHl: ReactNode }[] = [
  {
    title: 'A backtest number means nothing until it survives contact',
    desc: 'Anyone can report a log-loss. What makes it credible is freezing the model and watching it get scored against results you didn’t know yet.',
    descHl: <>Anyone can report a log-loss. What makes it credible is <Hl>freezing the model</Hl> and watching it get scored against results you didn&apos;t know yet.</>,
  },
  {
    title: 'Posting real numbers in public is what finds real bugs',
    desc: 'A backtest run alone in a notebook never gets challenged. Putting the actual figures on Reddit is what surfaced a genuine leakage bug I’d otherwise have shipped blind.',
    descHl: <>A backtest run alone in a notebook never gets challenged. Putting the actual figures on Reddit is what surfaced a <Hl>genuine leakage bug</Hl> I&apos;d otherwise have shipped blind.</>,
  },
  {
    title: 'Verify, then answer — don’t just defend',
    desc: 'The instinct when someone doubts your work is to explain it away. Going and checking first — even when it might prove them right — is what actually builds trust.',
    descHl: <>The instinct when someone doubts your work is to explain it away. <Hl>Going and checking first</Hl> — even when it might prove them right — is what actually builds trust.</>,
  },
];

const stack = [
  { icon: <SiPython size={18} color="#3776AB" />, name: 'Python' },
  { icon: <span className="text-sm">📊</span>, name: 'pandas / NumPy / SciPy' },
  { icon: <span className="text-sm">🗄️</span>, name: 'SQLite' },
  { icon: <span className="text-sm">⚡</span>, name: 'Vanilla JS' },
  { icon: <SiGithubactions size={18} color="#2088FF" />, name: 'GitHub Actions' },
  { icon: <span className="text-sm">▲</span>, name: 'Vercel' },
];

function SectionLabel({ children }: { children: string }) {
  return <p className="mono-label">{children}</p>;
}

function ArticleLayout() {
  return (
    <article className="space-y-12">
      <div className="space-y-4">
        <p className="text-md sm:text-lg text-ink leading-[1.7] font-normal">
          This wasn&apos;t built to sit in a portfolio and claim a number. It was built to be <Hl>tested against a real tournament</Hl> — match by match, in public, with a methodology strict enough that I couldn&apos;t quietly explain away a bad result.
        </p>
        <p className="text-base text-ink-2 leading-[1.8] font-normal">
          The backtest was 55.8% accuracy on 500 real World Cup matches. Live against the actual 2026 tournament so far: <Hl>63% accuracy</Hl> on the 100 matches played.
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
              {item === 'Live on Vercel' ? <Hl>{item}</Hl> : item}
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
          If you&apos;re building a prediction model — or anything you want people to trust — the number you report matters less than whether you&apos;re willing to <Hl>let strangers try to break it</Hl>.
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
        A walk-forward-backtested prediction model for the FIFA World Cup 2026 —
        built to be <Hl>tested against a real tournament</Hl>, not just claimed as a number.
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

export default function WC26CaseStudy({ embedded = false }: { embedded?: boolean }) {
  return (
    <div id="wc26casestudy">
      {!embedded && (
        <div className="text-center mb-5">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink leading-none tracking-tight">
            Building a World Cup prediction model
          </h2>
          <p className="text-xs text-ink-3 mt-2 font-medium">A model that gets tested in public, not just claimed</p>
        </div>
      )}
      {embedded ? <ArticleLayout /> : <PortfolioLayout />}
    </div>
  );
}
