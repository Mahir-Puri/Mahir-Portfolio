import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AppModeProvider, useAppMode } from './context/AppMode'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExperienceSection from './components/ExperienceSection'
import FeaturedProjectsSection from './components/FeaturedProjectsSection'
import AdditionalProjectsSection from './components/AdditionalProjectsSection'
import RecentlyShippedSection from './components/RecentlyShippedSection'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import CommunitySection from './components/CommunitySection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import RecruiterSnapshot from './components/RecruiterSnapshot'
import Footer from './components/Footer'

function AppShell() {
  const { recruiterMode, reduceMotion } = useAppMode()
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.querySelector(location.hash)
    el?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
  }, [location.hash, reduceMotion])

  return (
    <main className="min-h-screen bg-netflix-bg text-white relative overflow-x-hidden">
      <div className="print:hidden pointer-events-none fixed inset-0 bg-cinema-gradient opacity-80" />
      <Navbar />

      <div className="relative z-10">
        <Hero />
        {recruiterMode && <RecruiterSnapshot />}

        <ExperienceSection />

        <section className="px-4 md:px-8 mt-10 space-y-10">
          <FeaturedProjectsSection />
          <AdditionalProjectsSection />
          <RecentlyShippedSection />
        </section>

        <SkillsSection />
        <EducationSection />
        <CommunitySection />
        <AboutSection />
        <ContactSection />

        <Footer />
      </div>
    </main>
  )
}

export default function App() {
  return (
    <AppModeProvider>
      <AppShell />
    </AppModeProvider>
  )
}
