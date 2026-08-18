import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '../data/content'
import { useAppMode } from '../context/AppMode'
import ProjectCover from './ProjectCover'
import { GitHubIcon, ExternalLinkIcon } from './icons'

const STATUS_STYLE: Record<Project['status'], string> = {
  Completed: 'border-[var(--accent)]/40 text-[var(--accent)]',
  Ongoing: 'border-amber-400/40 text-amber-300',
  Incoming: 'border-cyan-400/40 text-cyan-300',
}

export default function Card({ item }: { item: Project }) {
  const { reduceMotion } = useAppMode()

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/30 shine flex flex-col h-full"
    >
      <Link to={`/project/${item.slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-t-xl">
        <ProjectCover title={item.title} category={item.category} />
      </Link>

      <div className="p-3 space-y-2 flex-1 flex flex-col">
        <Link
          to={`/project/${item.slug}`}
          className="font-bold text-sm leading-snug hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:underline"
        >
          {item.title}
        </Link>

        <div className="flex items-center gap-2 text-[10px]">
          <span className={`font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border ${STATUS_STYLE[item.status]}`}>
            {item.status}
          </span>
          <span className="text-white/40">{item.year}</span>
        </div>

        <p className="text-xs text-white/70 line-clamp-2">{item.oneLiner}</p>

        <p className="text-[11px] text-white/40 leading-relaxed">{item.tech.slice(0, 5).join(' · ')}</p>

        <div className="mt-auto pt-2 flex items-center justify-between gap-2 text-xs">
          {item.github ? (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white/60 hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded px-1"
              aria-label={`${item.title} on GitHub`}
            >
              <GitHubIcon className="h-3.5 w-3.5" /> Code
            </a>
          ) : (
            <span />
          )}

          <div className="flex items-center gap-3">
            {item.demo && (
              <a
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/60 hover:text-[var(--accent)] transition-colors"
              >
                Live <ExternalLinkIcon />
              </a>
            )}
            <Link
              to={`/project/${item.slug}`}
              className="font-semibold text-[var(--accent)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded px-1"
            >
              More Info
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
