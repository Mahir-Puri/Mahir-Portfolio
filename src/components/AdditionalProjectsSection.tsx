import Carousel from './Carousel'
import Card from './Card'
import { additionalProjectRows, type Project } from '../data/content'
import { useAppMode } from '../context/AppMode'

export default function AdditionalProjectsSection() {
  const { recruiterMode } = useAppMode()

  if (recruiterMode) return null

  return (
    <div className="space-y-10">
      {additionalProjectRows.map((row) => (
        <Carousel<Project>
          key={row.title}
          title={row.title}
          items={row.items}
          getKey={(p) => p.slug}
          renderItem={(p) => <Card item={p} />}
        />
      ))}
    </div>
  )
}
