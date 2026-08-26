import Carousel from './Carousel'
import Card from './Card'
import { featuredProjects, type Project } from '../data/content'
import { useAppMode } from '../context/AppMode'

export default function FeaturedProjectsSection() {
  const { recruiterMode } = useAppMode()
  // Ongoing work gets its own dedicated section, so this row stays proven/shipped work only.
  const shipped = featuredProjects.filter((p) => p.status !== 'Ongoing')
  const items = recruiterMode ? shipped.filter((p) => p.recruiterPriority) : shipped

  return (
    <div id="projects">
      <Carousel<Project>
        title="Featured Systems"
        subtitle={recruiterMode ? 'The 3 most relevant to a payments and security background' : "The systems I'm most proud of"}
        items={items}
        getKey={(p) => p.slug}
        renderItem={(p) => <Card item={p} />}
      />
    </div>
  )
}
