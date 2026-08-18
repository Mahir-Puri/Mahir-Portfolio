import { useParams, Navigate } from 'react-router-dom'
import { allProjects } from '../data/content'

// Older hackathon projects (e.g. Studium) now live in the unified project list
// under /project/:slug. This route stays alive so any existing /hackathon/:slug
// link still resolves, and simply redirects to the canonical project page.
export default function HackathonDetail() {
  const { slug } = useParams()
  const project = allProjects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/" replace />
  return <Navigate to={`/project/${project.slug}`} replace />
}
