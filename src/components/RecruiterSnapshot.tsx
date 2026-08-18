import { education, contactInfo } from '../data/content'
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from './icons'

export default function RecruiterSnapshot() {
  return (
    <section className="px-4 md:px-8 mt-6">
      <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-extrabold text-cyan-300">Recruiter Mode</h2>
            <p className="text-cyan-100/70 text-sm mt-0.5">
              Condensed view: Professional Experience first, 3 most relevant projects, and a fast path to my resume.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download="Mahir_Puri_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 hover:bg-cyan-500/30 font-semibold text-sm shrink-0"
          >
            <DownloadIcon className="h-4 w-4" /> Download Resume
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cyan-100/90">
          <span>{education.school}</span>
          <span>GPA {education.gpa}</span>
          <span>Graduating Dec. 2028</span>
          <span>Available: {contactInfo.availability}</span>
        </div>

        <div className="mt-3 flex items-center gap-3 text-sm">
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-cyan-200/80 hover:text-cyan-200">
            <GitHubIcon /> GitHub
          </a>
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-cyan-200/80 hover:text-cyan-200">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-1.5 text-cyan-200/80 hover:text-cyan-200">
            <MailIcon /> {contactInfo.email}
          </a>
        </div>
      </div>
    </section>
  )
}
