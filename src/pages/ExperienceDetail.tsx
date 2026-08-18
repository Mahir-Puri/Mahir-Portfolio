import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { experiences } from '../data/content'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function ExperienceDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const exp = experiences.find((e) => e.slug === slug)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') navigate('/')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  useDocumentMeta(
    exp ? `${exp.title} | MAHIRFLIX` : 'Experience not found | MAHIRFLIX',
    exp ? `${exp.org}, ${exp.orgSub}. ${exp.summaryPoints[0]}` : 'This role could not be found.'
  )

  if (!exp) {
    return (
      <div className="px-4 md:px-8 py-16">
        <p>Experience not found.</p>
        <Link to="/" className="underline text-[var(--accent)]">Back to home</Link>
      </div>
    )
  }

  return (
    <div className="px-4 md:px-8 py-10 max-w-3xl mx-auto">
      <Link to="/" className="text-white/70 hover:text-white">← Back</Link>

      <div className="mt-4">
        <span
          className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border mb-3 ${
            exp.status === 'Incoming' ? 'border-cyan-400/40 text-cyan-300' : 'border-[var(--accent)]/40 text-[var(--accent)]'
          }`}
        >
          {exp.status}
        </span>
        <h1 className="text-3xl font-extrabold">{exp.title}</h1>
        <p className="text-white/80 mt-1">{exp.org}</p>
        <p className="text-white/50 text-sm">{exp.orgSub}</p>
        <p className="text-sm text-white/50 mt-1">{exp.dates} • {exp.location}</p>

        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 text-xs text-white/40">
          {exp.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 neu-surface p-6">
        <h2 className="text-xl font-bold mb-3">What the role involves</h2>
        <ul className="space-y-2 text-white/80 list-disc pl-5">
          {[...exp.summaryPoints, ...exp.extraPoints].map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
