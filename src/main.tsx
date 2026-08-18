import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './styles.css'
import App from './App'
import ProjectDetail from './pages/ProjectDetail'
import ExperienceDetail from './pages/ExperienceDetail'
import HackathonDetail from './pages/HackathonDetail'
import CommandPalette from './components/CommandPalette'

function RootLayout() {
  return (
    <>
      <Outlet />
      <CommandPalette />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/project/:slug', element: <ProjectDetail /> },
      { path: '/experience/:slug', element: <ExperienceDetail /> },
      { path: '/hackathon/:slug', element: <HackathonDetail /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
