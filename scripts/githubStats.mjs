const USERNAME = 'Mahir-Puri'
const EXCLUDE_REPOS = new Set(['Mahir-Portfolio', 'Mahir-Puri'])
const FETCH_TIMEOUT_MS = 8000

const EMPTY_STATS = {
  publicRepos: null,
  lastCommitDate: null,
  topLanguage: null,
  recentRepos: [],
}

async function fetchJson(url) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'mahirflix-build-script',
        Accept: 'application/vnd.github+json',
      },
    })
    if (!res.ok) throw new Error(`GitHub API ${res.status} for ${url}`)
    return await res.json()
  } finally {
    clearTimeout(timeout)
  }
}

// Fetches real public GitHub activity at build time only. Never runs in the
// browser, so no token is needed and none is ever shipped to the client.
// Falls back to empty stats on any failure so a GitHub API hiccup can never
// break the production build.
export async function getGithubStats() {
  try {
    const [profile, repos] = await Promise.all([
      fetchJson(`https://api.github.com/users/${USERNAME}`),
      fetchJson(`https://api.github.com/users/${USERNAME}/repos?sort=pushed&per_page=20`),
    ])

    const eligible = repos.filter((r) => !r.fork && !EXCLUDE_REPOS.has(r.name))

    const languageCounts = {}
    for (const r of eligible) {
      if (!r.language) continue
      languageCounts[r.language] = (languageCounts[r.language] || 0) + 1
    }
    const topLanguage =
      Object.entries(languageCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null

    const lastCommitDate = eligible[0]?.pushed_at ?? null

    const recentRepos = eligible.slice(0, 8).map((r) => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      language: r.language,
      stars: r.stargazers_count,
      pushedAt: r.pushed_at,
    }))

    return {
      publicRepos: profile.public_repos ?? null,
      lastCommitDate,
      topLanguage,
      recentRepos,
    }
  } catch (err) {
    console.warn('[githubStats] Falling back to empty stats:', err.message)
    return EMPTY_STATS
  }
}
