import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { allProjects, type ProjectDetailSections } from '../data/content'
import { GitHubIcon, ExternalLinkIcon } from '../components/icons'
import ProjectCover from '../components/ProjectCover'

const SECTION_LABELS: Record<keyof ProjectDetailSections, string> = {
  problem: 'Problem',
  why: 'Why I Built It',
  architecture: 'Architecture',
  decision: 'Important Engineering Decision',
  reliability: 'Reliability & Correctness',
  testing: 'Testing Approach',
  outcome: 'Outcome',
  learned: 'What I Learned',
}

const SECTION_ORDER: (keyof ProjectDetailSections)[] = [
  'problem',
  'why',
  'architecture',
  'decision',
  'reliability',
  'testing',
  'outcome',
  'learned',
]

const STATUS_STYLE: Record<string, string> = {
  Completed: 'border-[var(--accent)]/40 text-[var(--accent)]',
  Ongoing: 'border-amber-400/40 text-amber-300',
  Incoming: 'border-cyan-400/40 text-cyan-300',
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = allProjects.find((p) => p.slug === slug)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') navigate('/')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  if (!project) {
    return (
      <div className="px-4 md:px-8 py-16">
        <p>Project not found.</p>
        <Link to="/" className="underline text-[var(--accent)]">Back to home</Link>
      </div>
    )
  }

  return (
    <div className="px-4 md:px-8 py-10 max-w-4xl mx-auto">
      <Link to="/" className="text-white/70 hover:text-white">← Back</Link>

      <div className="mt-4 grid md:grid-cols-2 gap-6 items-start">
        <div className="rounded-xl overflow-hidden border border-white/10">
          <ProjectCover title={project.title} category={project.category} />
        </div>
        <div>
          <div className="flex items-center gap-2 text-xs mb-2">
            <span className={`font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${STATUS_STYLE[project.status]}`}>
              {project.status}
            </span>
            <span className="text-white/40">{project.year}</span>
          </div>
          <h1 className="text-3xl font-extrabold">{project.title}</h1>
          <p className="text-white/80 mt-2">{project.oneLiner}</p>

          <p className="text-sm text-white/50 mt-3">{project.tech.join(' · ')}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/20 hover:border-[var(--accent)]"
              >
                <GitHubIcon /> View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[var(--accent)] font-semibold"
              >
                Live Demo <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-6">
        {SECTION_ORDER.filter((key) => project.detail[key]).map((key) => (
          <div key={key} className="rounded-2xl border border-white/10 neu-surface p-6">
            <h2 className="text-lg font-bold mb-2">{SECTION_LABELS[key]}</h2>
            <p className="text-white/80 leading-relaxed">{project.detail[key]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
