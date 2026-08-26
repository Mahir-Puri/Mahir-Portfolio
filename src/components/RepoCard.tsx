import { motion } from 'framer-motion'
import type { RecentRepo } from '../hooks/useGithubStats'
import { formatRelativeTime } from '../hooks/useGithubStats'
import { useAppMode } from '../context/AppMode'
import ProjectCover from './ProjectCover'
import { GitHubIcon } from './icons'

export default function RepoCard({ repo }: { repo: RecentRepo }) {
  const { reduceMotion } = useAppMode()

  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/30 shine flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      <ProjectCover title={repo.name} category="Live Activity" />

      <div className="p-3 space-y-2 flex-1 flex flex-col">
        <span className="font-bold text-sm leading-snug">{repo.name}</span>

        <span className="inline-block w-fit text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border border-[var(--accent)]/40 text-[var(--accent)]">
          Updated {formatRelativeTime(repo.pushedAt)}
        </span>

        {repo.description && <p className="text-xs text-white/70 line-clamp-2">{repo.description}</p>}

        {repo.language && <p className="text-[11px] text-white/40">{repo.language}</p>}

        <div className="mt-auto pt-2 flex items-center gap-1 text-xs text-white/60 group-hover:text-[var(--accent)] transition-colors">
          <GitHubIcon className="h-3.5 w-3.5" /> View on GitHub
        </div>
      </div>
    </motion.a>
  )
}
