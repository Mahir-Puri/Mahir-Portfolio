import Carousel from './Carousel'
import Card from './Card'
import { additionalProjectRows, type Project } from '../data/content'
import { useAppMode } from '../context/AppMode'

export default function AdditionalProjectsSection() {
  const { recruiterMode } = useAppMode()

  if (recruiterMode) return null

  // Ongoing work gets its own dedicated section, so these rows show completed work only.
  const rows = additionalProjectRows
    .map((row) => ({ ...row, items: row.items.filter((p) => p.status !== 'Ongoing') }))
    .filter((row) => row.items.length > 0)

  return (
    <div className="space-y-10">
      {rows.map((row) => (
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
