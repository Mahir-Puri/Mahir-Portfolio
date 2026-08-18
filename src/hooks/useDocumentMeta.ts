import { useEffect } from 'react'

const DEFAULT_TITLE = 'MAHIRFLIX | Mahir Puri, Software Engineer'
const DEFAULT_DESCRIPTION =
  "Mahir Puri is a Software Engineering student at the University of Victoria (4.0 GPA), returning to RBC's Real-Time Payments Cloud Team after a co-op with RBC Global Security."

function setMeta(attr: 'property' | 'name', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function applyMeta(title: string, description: string) {
  document.title = title
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', description)
  setMeta('name', 'twitter:title', title)
  setMeta('name', 'twitter:description', description)
}

export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    applyMeta(title, description)
    return () => applyMeta(DEFAULT_TITLE, DEFAULT_DESCRIPTION)
  }, [title, description])
}
