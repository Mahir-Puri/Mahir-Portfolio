import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useAppMode } from '../context/AppMode'
import { contactInfo } from '../data/content'
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon, MenuIcon, CloseIcon } from './icons'

const NAV_LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#about', label: 'About' },
  { href: '#community', label: 'Community' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { recruiterMode, toggleRecruiterMode, reduceMotion } = useAppMode()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md">
      <nav className="flex items-center justify-between px-4 md:px-8 py-4">
        <motion.a
          href="#"
          initial={reduceMotion ? undefined : { opacity: 0, y: -10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          className="flex items-center gap-3 focus:outline-none"
        >
          <div className="h-8 w-8 rounded bg-[var(--accent)]" />
          <span className="text-xl font-extrabold tracking-widest">MAHIRFLIX</span>
        </motion.a>

        <ul className="hidden lg:flex items-center gap-6 text-sm">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-[var(--accent)] transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1.5">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-full border border-white/10 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <GitHubIcon />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-full border border-white/10 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Send email"
              className="p-2 rounded-full border border-white/10 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <MailIcon />
            </a>
          </div>

          <a
            href="/resume.pdf"
            download="Mahir_Puri_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/15 bg-white/5 hover:border-[var(--accent)] hover:shadow-glow transition-colors"
          >
            <DownloadIcon className="h-3.5 w-3.5" />
            Resume
          </a>

          <button
            onClick={toggleRecruiterMode}
            className={`neu-surface px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
              recruiterMode ? 'border-cyan-400 text-cyan-300' : 'border-red-400 text-red-300'
            }`}
            aria-pressed={recruiterMode}
            title="Toggle Recruiter Mode"
          >
            {recruiterMode ? 'Recruiter Mode: ON' : 'Recruiter Mode: OFF'}
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-full border border-white/10 hover:border-white/30"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 bg-black/90 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col gap-1 pt-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 hover:text-[var(--accent)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 pt-3 border-t border-white/10 mt-2">
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="p-2 rounded-full border border-white/10">
              <GitHubIcon />
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="p-2 rounded-full border border-white/10">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${contactInfo.email}`} aria-label="Send email" className="p-2 rounded-full border border-white/10">
              <MailIcon />
            </a>
            <a href="/resume.pdf" download="Mahir_Puri_Resume.pdf" className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/15 bg-white/5">
              <DownloadIcon className="h-3.5 w-3.5" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
