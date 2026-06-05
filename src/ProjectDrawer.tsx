import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

type Project = {
  name: string;
  desc: string;
  detail: string;
  role: string;
  highlights: string[];
  tags: { name: string; icon: string | null }[];
  url: string | null;
};

export default function ProjectDrawer({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Centering wrapper */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none">
          {/* Centred modal — 75vw × 80vh */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col overflow-hidden rounded-2xl shadow-2xl bg-white pointer-events-auto"
            style={{ width: '75vw', height: '80vh' }}
          >
            {/* Top gradient bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#5B4CF5] to-purple-400 shrink-0" />

            {/* Browser chrome */}
            <div className="flex items-center gap-3 px-4 py-2.5 bg-[#F7F7F7] border-b border-[#E8E8E8] shrink-0">
              <div className="flex gap-1.5 shrink-0">
                <button onClick={onClose} className="w-3 h-3 rounded-full bg-[#FF5F57] hover:brightness-90 transition-all" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>

              {/* URL bar */}
              <div className="flex-1 bg-white border border-[#E0E0E0] rounded-lg px-3 py-1 text-[12px] text-[#888] font-medium truncate">
                {project.url ?? project.name}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11.5px] text-[#888] hover:text-[#5B4CF5] font-medium transition-colors"
                  >
                    Open <ArrowUpRight size={12} />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[#aaa] hover:text-[#333] hover:bg-[#EBEBEB] transition-all"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* iFrame / no-url fallback */}
            {project.url ? (
              <iframe
                src={project.url}
                title={project.name}
                className="flex-1 w-full border-0"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-navigation"
              />
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center gap-3 text-[#bbb]">
                <p className="text-[15px] font-semibold text-[#999]">No live URL available for this project</p>
                <button onClick={onClose} className="text-[13px] text-[#5B4CF5] font-semibold hover:underline">Close</button>
              </div>
            )}
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
