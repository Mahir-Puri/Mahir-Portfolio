export default function VolunteerSection() {
  return (
    <section id="volunteer" className="px-4 md:px-8 mt-14">
      <div className="rounded-2xl border border-white/10 neu-surface p-6 md:p-10">
        <h2 className="text-2xl font-extrabold mb-4">Volunteer & Community</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <h3 className="font-bold">PRAYAS — Volunteer Educator (2019–2024)</h3>
            <p className="text-sm text-white/70 mt-1">
              Taught underprivileged children; consistency, patience, and making learning accessible.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <h3 className="font-bold">Creative & Campus Life</h3>
            <ul className="text-sm text-white/70 list-disc pl-5 mt-1 space-y-1">
              <li>Original poetry performances (public speaking, empathy, storytelling)</li>
              <li>Music—drums & guitar (discipline, collaboration)</li>
              <li>Video editing for events (narrative, detail, pacing)</li>
              <li>Sports—cricket, squash, swimming (teamwork, focus, resilience)</li>
              <li>Learning French (bilingual communication)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
