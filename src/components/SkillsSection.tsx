import { skillGroups } from '../data/content'

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 md:px-8 mt-14">
      <div className="rounded-2xl border border-white/10 neu-surface p-6 md:p-10">
        <h2 className="text-2xl font-extrabold mb-1">Technical Skills</h2>
        <p className="text-white/60 text-sm mb-6">Grouped by where I've actually used them</p>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs uppercase tracking-wider text-white/50 mb-2">{group.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {group.items.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
