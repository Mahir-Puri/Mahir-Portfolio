import { motion } from 'framer-motion'
import { useAppMode } from '../context/AppMode'
import { currentlyNote } from '../data/content'

export default function AboutSection() {
  const { reduceMotion } = useAppMode()

  return (
    <section id="about" className="px-4 md:px-8 mt-14">
      <div className="rounded-2xl border border-white/10 neu-surface p-6 md:p-10 grid md:grid-cols-[200px_1fr] gap-6">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 6 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex md:block"
        >
          <img
            src="/hero.jpeg"
            alt="Mahir Puri sitting and listening attentively during a team discussion"
            className="h-32 w-32 md:h-40 md:w-40 rounded-xl object-cover ring-1 ring-white/10 shadow-soft"
            style={{ objectPosition: '65% 30%' }}
          />
        </motion.div>
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h2 className="text-2xl font-extrabold">About Me</h2>
          <p className="text-white/80 leading-relaxed">
            I think of myself as a software engineer first, especially drawn to backend systems, data
            infrastructure, distributed systems, and the reliability and security work underneath a product's
            surface. I like understanding what actually happens between an API call, a database write, a queue,
            and a log line, and tracing a failure back through those layers until I find the real cause instead
            of the symptom. Security matters to me for the same reason: building a system also means
            understanding how it can fail or be misused. Moving to Canada as an international student pushed me
            to figure things out on my own, and that same instinct pushes me toward projects and roles outside
            my comfort zone. I'm currently looking for Winter 2027 software engineering internships, and I'm
            open to relocating for the right team.
          </p>
          <p className="text-sm text-white/50 border-l-2 border-[var(--accent)]/40 pl-3">{currentlyNote}</p>
        </motion.div>
      </div>
    </section>
  )
}
