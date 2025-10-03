import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project: any = (projects as any).find((p: any) => p.slug === slug)

  if (!project) {
    return (
      <div className="px-4 md:px-8 py-16">
        <p>Project not found.</p>
        <Link to="/" className="underline text-[var(--accent)]">Back to home</Link>
      </div>
    )
  }

  return (
    <div className="px-4 md:px-8 py-10">
      <Link to="/" className="text-white/70 hover:text-white">← Back</Link>

      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <img src={project.cover} className="w-full rounded-xl border border-white/10" />
        <div>
          <h1 className="text-3xl font-extrabold">{project.title}</h1>
          <p className="text-white/80 mt-2">{project.description}</p>

          {project.tags && (
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((t:string,i:number)=>(
                <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{t}</span>
              ))}
            </div>
          )}

          <div className="mt-6 space-x-3">
            {project.link && <a href={project.link} target="_blank" className="px-4 py-2 rounded bg-[var(--accent)]">Live</a>}
            {project.repo && <a href={project.repo} target="_blank" className="px-4 py-2 rounded border border-white/20">Repo</a>}
          </div>
        </div>
      </div>

      {project.details && (
        <div className="mt-8 rounded-2xl border border-white/10 neu-surface p-6">
          <h2 className="text-xl font-bold mb-2">Details</h2>
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: project.details }} />
        </div>
      )}
    </div>
  )
}
