// src/components/Navbar.tsx
import { motion } from 'framer-motion'

export default function Navbar({
  recruiterMode,
  onToggle,
}: {
  recruiterMode: boolean
  onToggle: () => void
}) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-black/70 to-transparent backdrop-blur-md">
      <nav className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="h-8 w-8 rounded bg-[var(--accent)]" />
          <span className="text-xl font-extrabold tracking-widest">MAHIRFLIX</span>
        </motion.div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><a href="#projects"   className="hover:text-[var(--accent)] transition-colors">Projects</a></li>
          <li><a href="#profile"    className="hover:text-[var(--accent)] transition-colors">About</a></li>
          <li><a href="#skills"     className="hover:text-[var(--accent)] transition-colors">Skills</a></li>
          <li><a href="#volunteer"  className="hover:text-[var(--accent)] transition-colors">Community</a></li>
          <li><a href="#links"      className="hover:text-[var(--accent)] transition-colors">Links</a></li>
          <li><a href="#contact"    className="hover:text-[var(--accent)] transition-colors">Contact</a></li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Resume download */}
          <a
            href="/resume.pdf"
            download="Mahir_Puri_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/15 bg-white/5 hover:border-[var(--accent)] hover:shadow-glow transition-colors"
            title="Download Resume"
          >
            Resume
          </a>

          {/* Recruiter mode */}
          <button
            onClick={onToggle}
            className={`neu-surface px-3 py-1.5 rounded-full text-xs font-semibold border ${
              recruiterMode ? 'border-cyan-400 text-cyan-300' : 'border-red-400 text-red-300'
            }`}
            aria-pressed={recruiterMode}
            title="Toggle Recruiter Mode"
          >
            {recruiterMode ? 'Recruiter Mode: ON' : 'Recruiter Mode: OFF'}
          </button>
        </div>
      </nav>
    </header>
  )
}
