import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { allProjects, experiences, contactInfo } from '../data/content'
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from './icons'

type Item = {
  id: string
  label: string
  hint: string
  group: string
  action: (navigate: ReturnType<typeof useNavigate>) => void
  icon?: React.ReactNode
}

const SECTION_ITEMS: Item[] = [
  { id: 'sec-experience', label: 'Professional Experience', hint: 'Section', group: 'Sections', action: (nav) => nav('/#experience') },
  { id: 'sec-projects', label: 'Projects', hint: 'Section', group: 'Sections', action: (nav) => nav('/#projects') },
  { id: 'sec-skills', label: 'Technical Skills', hint: 'Section', group: 'Sections', action: (nav) => nav('/#skills') },
  { id: 'sec-education', label: 'Education & Recognition', hint: 'Section', group: 'Sections', action: (nav) => nav('/#education') },
  { id: 'sec-community', label: 'Community & Leadership', hint: 'Section', group: 'Sections', action: (nav) => nav('/#community') },
  { id: 'sec-about', label: 'About Me', hint: 'Section', group: 'Sections', action: (nav) => nav('/#about') },
  { id: 'sec-contact', label: 'Contact', hint: 'Section', group: 'Sections', action: (nav) => nav('/#contact') },
]

const EXPERIENCE_ITEMS: Item[] = experiences.map((exp) => ({
  id: `exp-${exp.slug}`,
  label: exp.title,
  hint: exp.org,
  group: 'Experience',
  action: (nav) => nav(`/experience/${exp.slug}`),
}))

const PROJECT_ITEMS: Item[] = allProjects.map((p) => ({
  id: `proj-${p.slug}`,
  label: p.title,
  hint: p.category,
  group: 'Projects',
  action: (nav) => nav(`/project/${p.slug}`),
}))

function triggerDownload() {
  const a = document.createElement('a')
  a.href = '/resume.pdf'
  a.download = 'Mahir_Puri_Resume.pdf'
  a.click()
}

const ACTION_ITEMS: Item[] = [
  { id: 'act-resume', label: 'Download Resume', hint: 'PDF', group: 'Actions', action: () => triggerDownload(), icon: <DownloadIcon className="h-3.5 w-3.5" /> },
  { id: 'act-github', label: 'Open GitHub', hint: contactInfo.github.replace('https://', ''), group: 'Actions', action: () => window.open(contactInfo.github, '_blank', 'noopener,noreferrer'), icon: <GitHubIcon className="h-3.5 w-3.5" /> },
  { id: 'act-linkedin', label: 'Open LinkedIn', hint: 'linkedin.com/in/mahir-puri', group: 'Actions', action: () => window.open(contactInfo.linkedin, '_blank', 'noopener,noreferrer'), icon: <LinkedInIcon className="h-3.5 w-3.5" /> },
  { id: 'act-email', label: 'Send Email', hint: contactInfo.email, group: 'Actions', action: () => window.location.assign(`mailto:${contactInfo.email}`), icon: <MailIcon className="h-3.5 w-3.5" /> },
]

const ALL_ITEMS: Item[] = [...SECTION_ITEMS, ...EXPERIENCE_ITEMS, ...PROJECT_ITEMS, ...ACTION_ITEMS]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return ALL_ITEMS
    return ALL_ITEMS.filter((it) => it.label.toLowerCase().includes(q) || it.hint.toLowerCase().includes(q))
  }, [query])

  const grouped = useMemo(() => {
    const groups: { title: string; items: Item[] }[] = []
    for (const item of filtered) {
      let g = groups.find((g) => g.title === item.group)
      if (!g) {
        g = { title: item.group, items: [] }
        groups.push(g)
      }
      g.items.push(item)
    }
    return groups
  }, [filtered])

  const closePalette = () => {
    setOpen(false)
    setQuery('')
    setActiveIndex(0)
  }

  const activate = (item: Item) => {
    item.action(navigate)
    closePalette()
  }

  useEffect(() => {
    const onGlobalKey = (e: KeyboardEvent) => {
      const isMeta = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'
      const target = e.target as HTMLElement | null
      const inField = target && ['INPUT', 'TEXTAREA'].includes(target.tagName)
      const isSlash = e.key === '/' && !inField && !e.metaKey && !e.ctrlKey

      if (isMeta || isSlash) {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onGlobalKey)

    const onOpenEvent = () => setOpen(true)
    window.addEventListener('open-command-palette', onOpenEvent)

    return () => {
      window.removeEventListener('keydown', onGlobalKey)
      window.removeEventListener('open-command-palette', onOpenEvent)
    }
  }, [])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  if (!open) return null

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closePalette()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const item = filtered[activeIndex]
      if (item) activate(item)
    }
  }

  let flatIndex = -1

  return (
    <div
      className="print:hidden fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-sm"
      onClick={closePalette}
      role="presentation"
    >
      <div
        className="w-full max-w-lg rounded-xl border border-white/15 bg-[#0e0e12] shadow-soft overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Jump to a section, project, or action..."
          className="w-full bg-transparent px-4 py-3.5 text-sm outline-none border-b border-white/10 placeholder:text-white/40"
          aria-label="Search"
        />

        <div className="max-h-96 overflow-y-auto py-1.5">
          {grouped.length === 0 && <div className="px-4 py-6 text-sm text-white/40 text-center">No matches</div>}
          {grouped.map((group) => (
            <div key={group.title} className="mb-1">
              <div className="px-4 pt-2 pb-1 text-[10px] uppercase tracking-wider text-white/35">{group.title}</div>
              {group.items.map((item) => {
                flatIndex += 1
                const isActive = flatIndex === activeIndex
                return (
                  <button
                    key={item.id}
                    onClick={() => activate(item)}
                    onMouseEnter={() => setActiveIndex(flatIndex)}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-2 text-sm text-left ${
                      isActive ? 'bg-[var(--accent)]/15 text-white' : 'text-white/80'
                    }`}
                  >
                    <span className="flex items-center gap-2 truncate">
                      {item.icon}
                      {item.label}
                    </span>
                    <span className="text-xs text-white/35 shrink-0">{item.hint}</span>
                  </button>
                )
              })}
            </div>
          ))}
        </div>

        <div className="px-4 py-2 border-t border-white/10 flex items-center gap-3 text-[10px] text-white/35">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  )
}
