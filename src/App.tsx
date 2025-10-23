import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Profile from './components/Profile'
import LinksSection from './components/LinksSection'
import RecruiterPanel from './components/RecruiterPanel'
import Footer from './components/Footer'
import { projects, achievements, experiences, hackathons } from './data/projects' // ← add hackathons
import SkillsSection from './components/SkillsSection'
import VolunteerSection from './components/VolunteerSection'
import ContactSection from './components/ContactSection'

export default function App() {
  const [recruiterMode, setRecruiterMode] = useState(false)

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', recruiterMode ? '#22d3ee' : '#e50914')
  }, [recruiterMode])

  return (
    <main className="min-h-screen bg-netflix-bg text-white relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 bg-cinema-gradient opacity-80" />
      <Navbar recruiterMode={recruiterMode} onToggle={() => setRecruiterMode(v => !v)} />

      <div className="relative z-10">
        <Hero recruiterMode={recruiterMode} />

        <section id="projects" className="px-4 md:px-8 mt-8 space-y-12">
          <Carousel
            title="Featured Projects"
            subtitle="Handpicked work — like your 'Continue Watching' row"
            items={(recruiterMode ? projects.filter(p => p.featured) : projects).slice(0, 10)}
            type="project"
          />
          <Carousel
            title="Hackathons"
            subtitle="Weekend builds with case pages"
            items={hackathons}                             {/* ← new row */}
            type="hackathon"                                {/* ← new type */}
          />
          <Carousel
            title="Achievements"
            subtitle="Awards, wins, and proud milestones"
            items={achievements}
            type="achievement"
          />
          <Carousel
            title="Experience"
            subtitle="Roles and internships shown like seasons"
            items={experiences}
            type="experience"
          />
        </section>

        <Profile />
        <LinksSection recruiterMode={recruiterMode} />
        <SkillsSection />
        <VolunteerSection />
        <ContactSection />

        {recruiterMode && <RecruiterPanel />}

        <Footer />
      </div>
    </main>
  )
}
