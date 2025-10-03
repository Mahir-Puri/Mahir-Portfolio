import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type Item = {
  title: string
  description: string
  cover: string
  slug?: string
  tags?: string[]
  link?: string
  repo?: string
  meta?: string
}

export default function Card({
  item,
  type,
}: {
  item: Item
  type: 'project' | 'achievement' | 'experience'
}) {
  // Build route only for items that have detail pages
  const to =
    type === 'project' && item.slug
      ? `/project/${item.slug}`
      : type === 'experience' && item.slug
      ? `/experience/${item.slug}`
      : undefined

  // If we have a route, wrap the whole card in <Link>. Otherwise render a <div>.
  const Wrapper: any = to ? Link : 'div'
  const wrapperProps: any = to ? { to } : {}

  return (
    <Wrapper {...wrapperProps} className="block focus:outline-none">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/30 shine"
      >
        {/* cover */}
        <div
          className="aspect-[16/9] bg-cover bg-center"
          style={{ backgroundImage: `url(${item.cover})` }}
          aria-hidden
        />

        {/* gradient overlay (visual only) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        {/* content */}
        <div className="relative z-10 p-3 space-y-1">
          <h3 className="font-bold">{item.title}</h3>
          {item.meta && <div className="text-[11px] text-white/60">{item.meta}</div>}
          <p className="text-xs text-white/70 line-clamp-2">{item.description}</p>
          {item.tags && (
            <div className="flex flex-wrap gap-1 pt-1">
              {item.tags.map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* “View details” hover hint (visual only; doesn’t block clicks) */}
        {to && (
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center z-20">
            <span className="px-3 py-1.5 rounded bg-[var(--accent)] text-sm font-semibold shadow-glow">
              View details
            </span>
          </div>
        )}

        {/* glow on hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity shadow-glow rounded-xl" />
      </motion.div>
    </Wrapper>
  )
}
