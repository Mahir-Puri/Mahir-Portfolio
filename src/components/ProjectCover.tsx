const PALETTES: Record<string, string> = {
  Featured: 'linear-gradient(135deg, #1a1a1a 0%, #2b0a0c 55%, #3f0d10 100%)',
  'Distributed Systems': 'linear-gradient(135deg, #16171a 0%, #241417 60%, #34181a 100%)',
  'Backend & Data': 'linear-gradient(135deg, #17181a 0%, #221619 60%, #2f1215 100%)',
  Security: 'linear-gradient(135deg, #18181b 0%, #2a1013 60%, #3a0f12 100%)',
  'Infrastructure & Tooling': 'linear-gradient(135deg, #17181a 0%, #201417 60%, #2c1416 100%)',
  'Embedded & Hardware': 'linear-gradient(135deg, #191919 0%, #251517 60%, #331416 100%)',
  'Earlier Builds': 'linear-gradient(135deg, #1a1a1a 0%, #221718 60%, #2c1517 100%)',
}

function initials(title: string) {
  const cleaned = title.split(':')[0].trim()
  const words = cleaned.split(/\s+/).filter((w) => /[A-Za-z]/.test(w))
  if (words.length === 0) return '••'
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

export default function ProjectCover({ title, category }: { title: string; category: string }) {
  const background = PALETTES[category] || PALETTES.Featured
  return (
    <div
      className="relative aspect-[16/9] overflow-hidden"
      style={{ background }}
      aria-hidden="true"
    >
      <span className="absolute inset-0 flex items-center justify-center select-none text-5xl md:text-6xl font-black tracking-tight text-white/10">
        {initials(title)}
      </span>
      <span className="absolute left-3 top-3 text-[10px] uppercase tracking-[0.15em] text-white/40">
        {category}
      </span>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
    </div>
  )
}
