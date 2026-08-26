import Carousel from './Carousel'
import Card from './Card'
import { allProjects, type Project } from '../data/content'
import { useAppMode } from '../context/AppMode'

export default function OngoingProjectsSection() {
  const { recruiterMode } = useAppMode()

  if (recruiterMode) return null

  const items = allProjects.filter((p) => p.status === 'Ongoing')

  return (
    <Carousel<Project>
      title="Ongoing"
      subtitle="Actively being built right now"
      items={items}
      getKey={(p) => p.slug}
      renderItem={(p) => <Card item={p} />}
    />
  )
}
