import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Footer() {
  const [name, setName]       = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent]       = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    // Opens mailto with prefilled content
    window.location.href = `mailto:adarshrawat474@gmail.com?subject=Hey Adarsh, from ${name}&body=${encodeURIComponent(message)}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setName('');
    setMessage('');
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="w-full bg-white border border-[#EBEBEB] rounded-2xl overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 p-4">

        {/* Left — dog image */}
        <div className="relative h-64 md:h-auto min-h-[280px] overflow-hidden rounded-xl">
          <img
            src="/dog.jpg"
            alt="Say hello"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right — form */}
        <div className="p-7 flex flex-col justify-between gap-5">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#999] mb-1">Get in touch</p>
            <h3 className="text-[26px] font-bold text-[#111]">Leave a message</h3>
            <p className="text-[15px] text-[#999] mt-1">Suggestions, collabs, or just a hi — all welcome.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 text-[15px] border border-[#EBEBEB] rounded-lg bg-[#FAFAFA] text-[#111] placeholder-[#CCC] focus:outline-none focus:border-[#5B4CF5] transition-colors font-medium"
            />
            <textarea
              placeholder="Your message or suggestion..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 text-[15px] border border-[#EBEBEB] rounded-lg bg-[#FAFAFA] text-[#111] placeholder-[#CCC] focus:outline-none focus:border-[#5B4CF5] transition-colors resize-none font-medium"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#5B4CF5] hover:bg-[#4a3de0] text-white text-[13.5px] font-semibold px-4 py-2.5 rounded-lg transition-colors group"
            >
              {sent ? '✓ Sent!' : (
                <>
                  Send Message
                  <Send size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>

          <p className="text-[11.5px] text-[#CCC] font-medium text-center">
            Adarsh Rawat · adarshrawat474@gmail.com · Updated June 2026
          </p>
        </div>

      </div>
    </motion.footer>
  );
}
