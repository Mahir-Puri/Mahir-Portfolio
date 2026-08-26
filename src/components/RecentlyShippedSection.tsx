import Carousel from './Carousel'
import RepoCard from './RepoCard'
import { useGithubStats, type RecentRepo } from '../hooks/useGithubStats'

export default function RecentlyShippedSection() {
  const { recentRepos } = useGithubStats()

  return (
    <Carousel<RecentRepo>
      title="Recently Shipped"
      subtitle="Live from GitHub, refreshed on every deploy"
      items={recentRepos}
      getKey={(r) => r.name}
      renderItem={(r) => <RepoCard repo={r} />}
    />
  )
}
