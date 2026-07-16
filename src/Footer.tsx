import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/adarshrawat474@gmail.com';

export default function Footer() {
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [message, setMessage]   = useState('');
  const [status, setStatus]     = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('sending');

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: `Portfolio message from ${name.trim()}`,
          _replyto: email.trim(),
          _template: 'table',
        }),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="w-full"
    >
      {/* Ft5 Statement — one closing line, then the form as the page's character moment */}
      <div className="pb-8">
        <p className="font-display font-bold text-display-s leading-[1.05] text-ink tracking-[-0.02em] max-w-[22ch]">
          Suggestions, collabs, or just a hi — <span className="hl hl--cyan">all welcome</span>.
        </p>
      </div>

      <div className="card bg-[var(--color-accent-tint)] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-4 p-4">
          <div className="relative h-56 md:h-auto min-h-[240px] overflow-hidden rounded-[var(--radius-card-quiet)]">
            <img
              src="/dog.jpg"
              alt="Say hello"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="p-4 sm:p-6 flex flex-col justify-center gap-4">
            <p className="mono-label">Get in touch</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 text-base rounded-[var(--radius-input)] bg-paper border border-rule text-ink placeholder-ink-3 focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-1 transition-colors font-normal"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 text-base rounded-[var(--radius-input)] bg-paper border border-rule text-ink placeholder-ink-3 focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-1 transition-colors font-normal"
              />
              <textarea
                name="message"
                placeholder="Your suggestion…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                required
                className="w-full px-4 py-3 text-base rounded-[var(--radius-input)] bg-paper border border-rule text-ink placeholder-ink-3 focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-1 transition-colors resize-none font-normal"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn--cyan self-start"
              >
                {status === 'sending' && 'Sending…'}
                {status === 'sent' && (<><Check size={14} /> Sent</>)}
                {status === 'error' && 'Something went wrong — try again'}
                {status === 'idle' && (<><Send size={13} /> Send message</>)}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-rule">
        <span className="font-display font-bold text-ink text-base">Adarsh Rawat</span>
        <span className="text-2xs text-ink-3 font-medium">adarshrawat474@gmail.com · Updated Jul 2026</span>
      </div>
    </motion.footer>
  );
}
