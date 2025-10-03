import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 md:px-8 mt-14">
      <div className="rounded-2xl border border-white/10 neu-surface p-6 md:p-10">
        <h2 className="text-2xl font-extrabold mb-2">Contact</h2>
        <p className="text-white/70 text-sm mb-6">
          Prefer email? <a href="mailto:mpuri@uvic.ca" className="underline hover:text-[var(--accent)]">mpuri@uvic.ca</a>.
          Or send a quick note here—I'll reply as soon as I can.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <h3 className="font-bold mb-2">Message me</h3>
            <ContactForm />
          </div>
    
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <h3 className="font-bold mb-2">Elsewhere</h3>
            <div className="grid gap-3">
              <a href="https://www.linkedin.com/in/mahir-puri/" target="_blank" className="shine inline-flex items-center justify-between px-3 py-2 rounded border border-white/10 bg-black/30 hover:border-[var(--accent)]">
                <span>LinkedIn</span> <span>↗</span>
              </a>
              <a href="https://github.com/Mahir-Puri" target="_blank" className="shine inline-flex items-center justify-between px-3 py-2 rounded border border-white/10 bg-black/30 hover:border-[var(--accent)]">
                <span>GitHub</span> <span>↗</span>
              </a>
              <a href="/resume.pdf" download="Mahir_Puri_Resume.pdf" className="shine inline-flex items-center justify-between px-3 py-2 rounded border border-white/10 bg-black/30 hover:border-[var(--accent)]">
                <span>Download Resume</span> <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
