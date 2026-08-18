import Carousel from './Carousel'
import { additionalProjectRows } from '../data/content'
import { useAppMode } from '../context/AppMode'

export default function AdditionalProjectsSection() {
  const { recruiterMode } = useAppMode()

  if (recruiterMode) return null

  return (
    <div className="space-y-10">
      {additionalProjectRows.map((row) => (
        <Carousel key={row.title} title={row.title} items={row.items} />
      ))}
    </div>
  )
}
