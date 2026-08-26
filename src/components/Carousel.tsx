import { useRef, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useAppMode } from '../context/AppMode'
import { ChevronLeftIcon, ChevronRightIcon } from './icons'

export default function Carousel<T>({
  title,
  subtitle,
  items,
  getKey,
  renderItem,
}: {
  title: string
  subtitle?: string
  items: T[]
  getKey: (item: T) => string
  renderItem: (item: T) => ReactNode
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
        <div className="print:hidden hidden md:flex gap-2">
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
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: reduceMotion ? 0 : undefined }}
        ref={scroller}
        className="flex gap-4 overflow-x-auto snap-x-mandatory pb-3 print:flex-wrap print:overflow-visible"
        tabIndex={0}
        onKeyDown={onKeyDown}
        role="region"
        aria-label={`${title} carousel`}
      >
        {items.map((it) => (
          <div key={getKey(it)} className="snap-start shrink-0 w-64">
            {renderItem(it)}
          </div>
        ))}
      </motion.div>
    </section>
  )
}
