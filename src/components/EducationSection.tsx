import { education, recognitions } from '../data/content'

export default function EducationSection() {
  return (
    <section id="education" className="px-4 md:px-8 mt-14">
      <div className="rounded-2xl border border-white/10 neu-surface p-6 md:p-10 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-extrabold mb-4">Education</h2>
          <h3 className="text-lg font-bold">{education.school}</h3>
          <p className="text-white/70">{education.degree}</p>
          <p className="text-sm text-white/50 mt-1">
            {education.dates} • GPA: {education.gpa}
          </p>

          <h4 className="text-xs uppercase tracking-wider text-white/50 mt-5 mb-2">Relevant Coursework</h4>
          <p className="text-sm text-white/80 leading-relaxed">{education.coursework.join(' · ')}</p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold mb-4">Recognition</h2>
          <ul className="space-y-3">
            {recognitions.map((r) => (
              <li key={r.title} className="rounded-xl border border-white/10 bg-black/20 p-3">
                <div className="font-semibold text-sm">{r.title}</div>
                <div className="text-sm text-white/60">{r.org}</div>
                <div className="text-xs text-white/40 mt-0.5">{r.year}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
