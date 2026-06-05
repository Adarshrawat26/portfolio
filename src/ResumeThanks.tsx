import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeThanksProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeThanks({ open, onClose }: ResumeThanksProps) {
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [open, onClose]);

  const handleConnect = () => {
    onClose();
    requestAnimationFrame(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        document.querySelector<HTMLInputElement>('#contact input[name="name"]')?.focus();
      }, 400);
    });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="resume-thanks"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/30"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[340px] bg-white rounded-xl border border-[#EBEBEB] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 pb-0">
              <img
                src="/thanks-dog.png"
                alt="Thanks for downloading!"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>

            <div className="px-5 py-4 text-center">
              <p className="text-[22px] font-bold text-[#111] leading-snug">
                Cheers for grabbing my resume!
              </p>
              <p className="text-[16px] text-[#888] mt-2 font-medium leading-relaxed">
                Appreciate you taking the time — let&apos;s connect soon.
              </p>
              <button
                type="button"
                onClick={handleConnect}
                className="mt-4 w-full bg-[#5B4CF5] hover:bg-[#4a3de0] text-white text-[14px] font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                Connect
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
