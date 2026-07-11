import { useEffect, useState } from 'react'
import Section from './Section'
import { fallbackProjects } from '../data/profile'

const API_URL = import.meta.env.VITE_API_URL || ''
const ACCENT = '#fbbf24'

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
    <Section id="projects" title="Projects" index={3} accent={ACCENT}>
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="rounded-lg border p-5 text-left"
            style={{ borderColor: 'var(--panel-border)', backgroundColor: 'var(--pill-bg)' }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="font-display font-semibold flex items-center gap-2">
                <span className="text-xs font-bold" style={{ color: ACCENT }}>
                  #{String(idx + 1).padStart(2, '0')}
                </span>
                {project.title}
              </h3>
              {project.period && (
                <span className="text-sm" style={{ color: 'var(--muted)' }}>{project.period}</span>
              )}
            </div>
            {project.location && (
              <p className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>{project.location}</p>
            )}

            {project.bullets?.length > 0 ? (
              <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm mt-2" style={{ color: 'var(--muted)' }}>{project.description}</p>
            )}

            <div className="flex flex-wrap items-center gap-2 mt-3">
              {project.tech?.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded border"
                  style={{ borderColor: 'var(--panel-border)', color: 'var(--pill-text)' }}
                >
                  {t}
                </span>
              ))}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold hover:underline underline-offset-4 ml-auto"
                  style={{ color: ACCENT }}
                >
                  View project →
                </a>
              )}
              {project.secondaryLink && (
                <a
                  href={project.secondaryLink.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold hover:underline underline-offset-4"
                  style={{ color: ACCENT }}
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
