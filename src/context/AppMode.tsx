import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

interface AppModeValue {
  recruiterMode: boolean
  toggleRecruiterMode: () => void
  reduceMotion: boolean
}

const AppModeContext = createContext<AppModeValue | null>(null)

export function AppModeProvider({ children }: { children: ReactNode }) {
  const [recruiterMode, setRecruiterMode] = useState(false)
  const [systemReduceMotion, setSystemReduceMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setSystemReduceMotion(query.matches)
    const onChange = (e: MediaQueryListEvent) => setSystemReduceMotion(e.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', recruiterMode ? '#22d3ee' : '#e50914')
  }, [recruiterMode])

  const value: AppModeValue = {
    recruiterMode,
    toggleRecruiterMode: () => setRecruiterMode((v) => !v),
    reduceMotion: recruiterMode || systemReduceMotion,
  }

  return <AppModeContext.Provider value={value}>{children}</AppModeContext.Provider>
}

export function useAppMode() {
  const ctx = useContext(AppModeContext)
  if (!ctx) throw new Error('useAppMode must be used within AppModeProvider')
  return ctx
}
