import { community } from '../data/content'

export default function CommunitySection() {
  return (
    <section id="community" className="px-4 md:px-8 mt-14">
      <div className="rounded-2xl border border-white/10 neu-surface p-6 md:p-10">
        <h2 className="text-2xl font-extrabold mb-4">Community & Leadership</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {community.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h3 className="font-bold text-sm">{item.title}</h3>
              {item.period && <div className="text-xs text-white/40 mt-0.5">{item.period}</div>}
              <p className="text-sm text-white/70 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
