import Section from './Section'
import { profile } from '../data/profile'

export default function Experience({ variant = 'light' }) {
  return (
    <Section id="experience" title="Experience" variant={variant}>
      <div className="space-y-8">
        {profile.experience.map((job) => (
          <div key={job.role + job.company} className="border-l-2 pl-5" style={{ borderColor: 'var(--sec-border)' }}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="font-semibold">
                {job.role} · {job.company}
              </h3>
              <span className="text-sm" style={{ color: 'var(--sec-muted)' }}>{job.period}</span>
            </div>
            {job.location && (
              <p className="text-sm mt-0.5" style={{ color: 'var(--sec-muted)' }}>{job.location}</p>
            )}
            <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
              {job.bullets.map((bullet, i) => (
                <li key={i} className="leading-relaxed" style={{ color: 'var(--sec-muted)' }}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {profile.education.length > 0 && (
        <div className="mt-10">
          <h3 className="font-semibold mb-4">Education</h3>
          <div className="space-y-4">
            {profile.education.map((edu) => (
              <div key={edu.school} className="border-l-2 pl-5" style={{ borderColor: 'var(--sec-border)' }}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <p className="font-medium">{edu.school}</p>
                  <span className="text-sm" style={{ color: 'var(--sec-muted)' }}>{edu.period}</span>
                </div>
                <p style={{ color: 'var(--sec-muted)' }}>
                  {edu.degree}
                  {edu.details ? ` · ${edu.details}` : ''}
                </p>
                {edu.bullets?.length > 0 && (
                  <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
                    {edu.bullets.map((bullet, i) => (
                      <li key={i} className="leading-relaxed" style={{ color: 'var(--sec-muted)' }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {profile.additional?.length > 0 && (
        <div className="mt-10">
          <h3 className="font-semibold mb-4">Additional Experience</h3>
          <div className="space-y-3">
            {profile.additional.map((item) => (
              <div key={item.title} className="border-l-2 pl-5" style={{ borderColor: 'var(--sec-border)' }}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <p className="font-medium">{item.title}</p>
                  <span className="text-sm" style={{ color: 'var(--sec-muted)' }}>{item.period}</span>
                </div>
                <p style={{ color: 'var(--sec-muted)' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}
