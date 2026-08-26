import Carousel from './Carousel'
import Card from './Card'
import { featuredProjects, type Project } from '../data/content'
import { useAppMode } from '../context/AppMode'

export default function FeaturedProjectsSection() {
  const { recruiterMode } = useAppMode()
  const items = recruiterMode ? featuredProjects.filter((p) => p.recruiterPriority) : featuredProjects

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
