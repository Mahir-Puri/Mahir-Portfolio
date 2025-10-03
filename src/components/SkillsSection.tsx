const skills = {
  "Languages": ["Python", "C", "Java", "JavaScript", "Bash", "SQL", "MATLAB", "R"],
  "Web": ["HTML", "CSS", "EJS", "REST APIs", "React", "Express", "FastAPI", "Flask", "Node.js"],
  "Data & DB": ["MySQL", "PostgreSQL", "SQLite", "Power BI", "Excel (VLOOKUP, Pivots)"],
  "Testing & QA": ["Unit Testing", "Pytest", "Debugging", "Edge-Case Coverage", "Data Validation"],
  "Tools": ["Git", "GitHub", "Docker", "CI/CD (GitHub Actions)", "VS Code", "Jupyter"],
  "Embedded/IoT": ["Raspberry Pi Pico", "MicroPython", "GPIO", "Realtime Acquisition"],
  "Other": ["Agile", "Documentation", "Data Visualization"]
}

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 md:px-8 mt-14">
      <div className="rounded-2xl border border-white/10 neu-surface p-6 md:p-10">
        <h2 className="text-2xl font-extrabold mb-4">Skills</h2>

        <div className="space-y-6">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-2">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="shine inline-flex items-center px-3 py-1.5 rounded-full text-sm border border-white/10 bg-black/30 hover:border-[var(--accent)] hover:shadow-glow transition-all"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
