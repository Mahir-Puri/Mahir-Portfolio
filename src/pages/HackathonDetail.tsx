import { useParams, Link } from 'react-router-dom'
import { hackathons } from '../data/projects'

export default function HackathonDetail() {
  const { slug } = useParams()
  const item: any = (hackathons as any).find((h: any) => h.slug === slug)

  if (!item) {
    return (
      <div className="px-4 md:px-8 py-16">
        <p>Hackathon project not found.</p>
        <Link to="/" className="underline text-[var(--accent)]">Back to home</Link>
      </div>
    )
  }

  return (
    <div className="px-4 md:px-8 py-10">
      <Link to="/" className="text-white/70 hover:text-white">← Back</Link>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <img src={item.cover} className="w-full rounded-xl border border-white/10" />
        <div>
          <h1 className="text-3xl font-extrabold">{item.title}</h1>
          <p className="text-white/80 mt-2">{item.description}</p>
          {item.tags && (
            <div className="flex flex-wrap gap-2 mt-3">
              {item.tags.map((t: string, i: number) => (
                <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{t}</span>
              ))}
            </div>
          )}
          <div className="mt-6 space-x-3">
            {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-[var(--accent)]">Live</a>}
            {item.repo && <a href={item.repo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded border border-white/20">Repo</a>}
          </div>
        </div>
      </div>
      {item.details && (
        <div className="mt-8 rounded-2xl border border-white/10 neu-surface p-6">
          <h2 className="text-xl font-bold mb-2">Tech Highlights</h2>
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: item.details }} />
        </div>
      )}
    </div>
  )
}
