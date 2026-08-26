export interface RecentRepo {
  name: string
  description: string | null
  url: string
  language: string | null
  stars: number
  pushedAt: string
}

export interface GithubStats {
  publicRepos: number | null
  lastCommitDate: string | null
  topLanguage: string | null
  recentRepos: RecentRepo[]
}

// Baked in at build time from the real GitHub API (see scripts/githubStats.mjs
// and the `define` in vite.config.ts), refreshed on every deploy. Never
// fetched at runtime, so there's no token exposure and no rate-limit risk for
// visitors. Vite's `define` substitutes this as a raw object literal, not a
// JSON string, so it's used directly rather than JSON.parsed.
const stats = __GITHUB_STATS__ as GithubStats

export function useGithubStats() {
  return stats
}

export function formatRelativeTime(isoDate: string): string {
  const then = new Date(isoDate).getTime()
  const now = Date.now()
  const diffMs = now - then
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays <= 0) return 'today'
  if (diffDays === 1) return 'yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  const diffWeeks = Math.floor(diffDays / 7)
  if (diffWeeks === 1) return '1 week ago'
  if (diffWeeks < 5) return `${diffWeeks} weeks ago`
  const diffMonths = Math.floor(diffDays / 30)
  if (diffMonths <= 1) return '1 month ago'
  return `${diffMonths} months ago`
}
