import { Link, useViewTransitionState } from 'react-router-dom'
import { motion } from 'framer-motion'
import { experiences } from '../data/content'
import { useAppMode } from '../context/AppMode'

function ExperienceCard({
  exp,
  points,
  delay,
  reduceMotion,
}: {
  exp: (typeof experiences)[number]
  points: string[]
  delay: number
  reduceMotion: boolean
}) {
  const to = `/experience/${exp.slug}`
  const isTransitioningToThis = useViewTransitionState(to)

  return (
    <motion.article
      initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: reduceMotion ? 0 : delay }}
      className="rounded-2xl border border-white/10 neu-surface p-5 md:p-6 flex flex-col"
      style={isTransitioningToThis ? { viewTransitionName: `experience-card-${exp.slug}` } : undefined}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold leading-snug">{exp.title}</h3>
          <p className="text-sm text-white/70 mt-0.5">{exp.org}</p>
          <p className="text-xs text-white/50">{exp.orgSub}</p>
        </div>
        <span
          className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${
            exp.status === 'Incoming'
              ? 'border-cyan-400/40 text-cyan-300'
              : 'border-[var(--accent)]/40 text-[var(--accent)]'
          }`}
        >
          {exp.status === 'Incoming' ? 'Incoming' : 'Completed'}
        </span>
      </div>

      <div className="text-xs text-white/50 mt-2">
        {exp.dates} • {exp.location}
      </div>

      <ul className="mt-4 space-y-2 text-sm text-white/80 list-disc pl-5 flex-1">
        {points.map((p, idx) => (
          <li key={idx}>{p}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-4 text-[11px] text-white/40">
        {exp.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <Link
        to={to}
        viewTransition={!reduceMotion}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)] hover:underline self-start"
      >
        Full role details →
      </Link>
    </motion.article>
  )
}

export default function ExperienceSection() {
  const { recruiterMode, reduceMotion } = useAppMode()

  return (
    <section id="experience" className="px-4 md:px-8 mt-8">
      <div className="flex items-end justify-between pr-2 mb-3">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">Professional Experience</h2>
          <p className="text-white/60 text-sm">My career so far</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {experiences.map((exp, i) => (
          <ExperienceCard
            key={exp.slug}
            exp={exp}
            points={recruiterMode ? exp.summaryPoints.slice(0, 2) : exp.summaryPoints}
            delay={i * 0.08}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>
    </section>
  )
}
