import { useRef } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import type { Project } from '../data/content'
import { useAppMode } from '../context/AppMode'
import { ChevronLeftIcon, ChevronRightIcon } from './icons'

export default function Carousel({
  title,
  subtitle,
  items,
}: {
  title: string
  subtitle?: string
  items: Project[]
}) {
  const scroller = useRef<HTMLDivElement>(null)
  const { reduceMotion } = useAppMode()

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 600, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') scrollBy(1)
    if (e.key === 'ArrowLeft') scrollBy(-1)
  }

  if (items.length === 0) return null

  return (
    <section className="space-y-2">
      <div className="flex items-end justify-between pr-2">
        <div>
          <h3 className="text-lg md:text-xl font-bold">{title}</h3>
          {subtitle && <p className="text-white/60 text-sm">{subtitle}</p>}
        </div>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scrollBy(-1)}
            className="neu-surface p-2 rounded border border-white/10 hover:border-white/30 focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label={`Scroll ${title} left`}
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="neu-surface p-2 rounded border border-white/10 hover:border-white/30 focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label={`Scroll ${title} right`}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        ref={scroller}
        className="flex gap-4 overflow-x-auto snap-x-mandatory pb-3"
        tabIndex={0}
        onKeyDown={onKeyDown}
        role="region"
        aria-label={`${title} carousel`}
      >
        {items.map((it) => (
          <div key={it.slug} className="snap-start shrink-0 w-64">
            <Card item={it} />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
