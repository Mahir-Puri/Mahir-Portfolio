import { motion } from 'framer-motion'
import { useAppMode } from '../context/AppMode'
import { contactInfo } from '../data/content'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'

export default function Hero() {
  const { reduceMotion } = useAppMode()

  return (
    <section className="relative px-4 md:px-8 pt-8">
      <div className="relative rounded-2xl overflow-hidden shadow-soft neu-surface">
        <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-10 p-6 md:p-10 items-center">
          <div className="space-y-4 md:space-y-6">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-[var(--accent)]">
              SOFTWARE ENGINEER
            </span>

            <motion.h1
              initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-extrabold leading-tight"
            >
              I build the systems behind the screen.
            </motion.h1>

            <p className="text-white/80 max-w-xl">
              I'm Mahir Puri, a Software Engineering student at UVic with a 4.0 GPA. I enjoy building reliable
              software, from backend APIs and data pipelines to distributed systems that recover when processes
              fail or messages are retried.
            </p>
            <p className="text-white/60 max-w-xl text-sm">
              After completing a software engineering co-op with RBC Global Security, I am returning to RBC's
              Real-Time Payments Cloud Team to work on production-critical payment infrastructure.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#experience"
                className="shine inline-flex items-center gap-2 bg-[var(--accent)] px-4 py-2 rounded-md font-semibold shadow-glow"
              >
                View Experience
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md border border-white/10 hover:border-white/30"
              >
                Explore Projects
              </a>
              <a
                href="/resume.pdf"
                download="Mahir_Puri_Resume.pdf"
                className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md border border-white/10 hover:border-white/30"
              >
                Download Resume
              </a>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-[var(--accent)] transition-colors"
              >
                <GitHubIcon /> GitHub
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-[var(--accent)] transition-colors"
              >
                <LinkedInIcon /> LinkedIn
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-[var(--accent)] transition-colors"
              >
                <MailIcon /> Email
              </a>
            </div>
          </div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            className="aspect-[4/5] md:aspect-square rounded-xl overflow-hidden border border-white/10 bg-black/50 shine"
          >
            <img
              src="/hero-presenting.jpg"
              alt="Mahir Puri presenting a project to an audience, gesturing toward a slide"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 22%' }}
              loading="eager"
              // @ts-expect-error -- lowercase intrinsic attribute; React's camelCase prop isn't recognized on <img> yet
              fetchpriority="high"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
