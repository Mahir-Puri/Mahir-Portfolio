const REPO_URL = 'https://github.com/Mahir-Puri/Mahir-Portfolio'

export default function Footer(){
  return (
    <footer className="print:hidden px-4 md:px-8 py-10 text-center text-white/50 text-sm space-y-2">
      <div>MAHIRFLIX · Mahir Puri, {new Date().getFullYear()}</div>
      <div className="text-white/25 text-xs font-mono">
        build {__BUILD_COMMIT__} · {__BUILD_DATE__}
      </div>
      <div className="flex items-center justify-center gap-3 pt-1">
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/40 hover:text-[var(--accent)] transition-colors underline underline-offset-2"
        >
          View Source
        </a>
        <a href={`${REPO_URL}/actions/workflows/ci.yml`} target="_blank" rel="noopener noreferrer">
          <img
            src={`${REPO_URL}/actions/workflows/ci.yml/badge.svg`}
            alt="Build status for this site's CI workflow"
            className="h-[18px]"
          />
        </a>
      </div>
    </footer>
  )
}
