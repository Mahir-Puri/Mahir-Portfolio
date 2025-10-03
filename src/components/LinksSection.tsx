export default function LinksSection({ recruiterMode }:{recruiterMode:boolean}){
  return (
    <section id="links" className="px-4 md:px-8 mt-14">
      <div className="rounded-2xl border border-white/10 neu-surface p-6 md:p-10">
        <h2 className="text-2xl font-extrabold mb-4">Links Hub</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/resume.pdf" target="_blank" className="group rounded-xl border border-white/10 bg-black/30 p-4 shine">
            <div className="text-3xl">📄</div>
            <div className="mt-2 font-semibold">Resume</div>
            <div className="text-sm text-white/70">{recruiterMode ? 'Download now • highlighted' : 'View / Download'}</div>
          </a>
          <a href="https://www.linkedin.com/in/mahir-puri/" target="_blank" className="group rounded-xl border border-white/10 bg-black/30 p-4 shine">
            <div className="text-3xl">🔗</div>
            <div className="mt-2 font-semibold">LinkedIn</div>
            <div className="text-sm text-white/70">Connect with me</div>
          </a>
          <a href="https://github.com/Mahir-Puri" target="_blank" className="group rounded-xl border border-white/10 bg-black/30 p-4 shine">
            <div className="text-3xl">🐙</div>
            <div className="mt-2 font-semibold">GitHub</div>
            <div className="text-sm text-white/70">Browse my code</div>
          </a>
          <a href="mailto:your@email.com" className="group rounded-xl border border-white/10 bg-black/30 p-4 shine">
            <div className="text-3xl">✉️</div>
            <div className="mt-2 font-semibold">Email</div>
            <div className="text-sm text-white/70">Let’s talk</div>
          </a>
          <a href="#contact" className="group rounded-xl border border-white/10 bg-black/30 p-4 shine">
           <div className="text-3xl">💬</div>
          <div className="mt-2 font-semibold">Contact</div>
          <div className="text-sm text-white/70">Send a quick message</div>
          </a>

        </div>
      </div>
    </section>
  )
}
