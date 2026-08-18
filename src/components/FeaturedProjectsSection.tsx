import Carousel from './Carousel'
import { featuredProjects } from '../data/content'
import { useAppMode } from '../context/AppMode'

export default function FeaturedProjectsSection() {
  const { recruiterMode } = useAppMode()
  const items = recruiterMode ? featuredProjects.filter((p) => p.recruiterPriority) : featuredProjects

  return (
    <div id="projects">
      <Carousel
        title="Featured Systems"
        subtitle={recruiterMode ? 'The 3 most relevant to a payments and security background' : "The systems I'm most proud of"}
        items={items}
      />
    </div>
  )
}
