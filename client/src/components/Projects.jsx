import { useEffect, useState } from 'react'
import Section from './Section'
import { fallbackProjects } from '../data/profile'

const API_URL = import.meta.env.VITE_API_URL || ''

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects)

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setProjects(data)
      })
      .catch(() => {
        // Backend not reachable yet — keep showing fallback projects.
      })
  }, [])

  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl border border-slate-200 dark:border-slate-800 p-5 text-left hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors"
          >
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech?.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
