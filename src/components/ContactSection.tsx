import ContactForm from './ContactForm'
import { contactInfo } from '../data/content'
import { GitHubIcon, LinkedInIcon, DownloadIcon, ExternalLinkIcon } from './icons'

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 md:px-8 mt-14">
      <div className="rounded-2xl border border-white/10 neu-surface p-6 md:p-10">
        <h2 className="text-2xl font-extrabold mb-2">Contact</h2>
        <p className="text-white/80 mb-1">{contactInfo.message}</p>
        <p className="text-white/60 text-sm mb-6">
          Prefer email?{' '}
          <a href={`mailto:${contactInfo.email}`} className="underline hover:text-[var(--accent)]">
            {contactInfo.email}
          </a>
          . Or send a quick note here, I'll reply as soon as I can.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <h3 className="font-bold mb-2">Message me</h3>
            <ContactForm />
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <h3 className="font-bold mb-2">Elsewhere</h3>
            <div className="grid gap-3">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="shine inline-flex items-center justify-between px-3 py-2 rounded border border-white/10 bg-black/30 hover:border-[var(--accent)]"
              >
                <span className="inline-flex items-center gap-2">
                  <LinkedInIcon /> LinkedIn
                </span>
                <ExternalLinkIcon />
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="shine inline-flex items-center justify-between px-3 py-2 rounded border border-white/10 bg-black/30 hover:border-[var(--accent)]"
              >
                <span className="inline-flex items-center gap-2">
                  <GitHubIcon /> GitHub
                </span>
                <ExternalLinkIcon />
              </a>
              <a
                href="/resume.pdf"
                download="Mahir_Puri_Resume.pdf"
                className="shine inline-flex items-center justify-between px-3 py-2 rounded border border-white/10 bg-black/30 hover:border-[var(--accent)]"
              >
                <span className="inline-flex items-center gap-2">
                  <DownloadIcon /> Download Resume
                </span>
              </a>
              <div className="text-xs text-white/50 pt-1">Available for {contactInfo.availability}.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
