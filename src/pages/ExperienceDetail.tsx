import { useParams, Link } from 'react-router-dom'
import { experiences } from '../data/projects'

export default function ExperienceDetail() {
  const { slug } = useParams()
  const exp: any = (experiences as any).find((e: any) => e.slug === slug)

  if (!exp) {
    return (
      <div className="px-4 md:px-8 py-16">
        <p>Experience not found.</p>
        <Link to="/" className="underline text-[var(--accent)]">Back to home</Link>
      </div>
    )
  }

  return (
    <div className="px-4 md:px-8 py-10">
      <Link to="/" className="text-white/70 hover:text-white">← Back</Link>

      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <img src={exp.cover} className="w-full rounded-xl border border-white/10" />
        <div>
          <h1 className="text-3xl font-extrabold">{exp.title}</h1>
          {exp.meta && <div className="text-sm text-white/70 mt-1">{exp.meta}</div>}
          <p className="text-white/80 mt-2">{exp.description}</p>

          {exp.tags && (
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.tags.map((t:string,i:number)=>(
                <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{t}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      {exp.details && (
        <div className="mt-8 rounded-2xl border border-white/10 neu-surface p-6">
          <h2 className="text-xl font-bold mb-2">What I did</h2>
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: exp.details }} />
        </div>
      )}
    </div>
  )
}
