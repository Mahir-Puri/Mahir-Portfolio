import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'node:child_process'
import { getGithubStats } from './scripts/githubStats.mjs'

function gitCommit() {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim()
  } catch {
    return 'unknown'
  }
}

export default defineConfig(async () => {
  const githubStats = await getGithubStats()

  return {
    plugins: [react()],
    define: {
      __BUILD_COMMIT__: JSON.stringify(gitCommit()),
      __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
      __GITHUB_STATS__: JSON.stringify(githubStats),
    },
  }
})
