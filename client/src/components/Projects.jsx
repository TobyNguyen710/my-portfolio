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
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 text-left"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                {project.title}
              </h3>
              {project.period && (
                <span className="text-sm text-slate-500 dark:text-slate-500">{project.period}</span>
              )}
            </div>
            {project.location && (
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-0.5">{project.location}</p>
            )}

            {project.bullets?.length > 0 ? (
              <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{project.description}</p>
            )}

            <div className="flex flex-wrap items-center gap-3 mt-3">
              {project.tech?.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                >
                  {t}
                </span>
              ))}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-indigo-500 hover:underline underline-offset-4 ml-auto"
                >
                  View project →
                </a>
              )}
              {project.secondaryLink && (
                <a
                  href={project.secondaryLink.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-indigo-500 hover:underline underline-offset-4"
                >
                  {project.secondaryLink.label} →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
