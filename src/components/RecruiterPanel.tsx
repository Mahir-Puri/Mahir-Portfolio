import ContactForm from './ContactForm'

export default function RecruiterPanel(){
  return (
    <section className="px-4 md:px-8 mt-8">
      <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 p-6 md:p-10">
        <h2 className="text-2xl font-extrabold text-cyan-300">Recruiter Mode</h2>
        <p className="text-cyan-100/80 mt-1">Curated view: relevant skills, featured projects, and a one-click resume.</p>

        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-cyan-400/30 bg-black/30 p-4">
            <h3 className="font-bold text-cyan-200 mb-2">Highlighted Skills</h3>
            <ul className="text-sm text-cyan-100/90 list-disc pl-5">
              <li>TypeScript, Python, Java • React, Flask</li>
              <li>TailwindCSS • Testing with PyTest</li>
              <li>Backend data pipelines • File I/O</li>
              <li>GitHub, Agile collaboration</li>
            </ul>
            <a href="/resume.pdf" target="_blank" className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 hover:bg-cyan-500/30">
              Download Resume
            </a>
          </div>
          <div className="rounded-xl border border-cyan-400/30 bg-black/30 p-4">
            <h3 className="font-bold text-cyan-200 mb-2">Quick Contact</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
