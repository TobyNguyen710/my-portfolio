import Section from './Section'
import { profile } from '../data/profile'

export default function About({ variant = 'light' }) {
  return (
    <Section id="about" title="Profile Summary" variant={variant}>
      <p className="leading-relaxed" style={{ color: 'var(--sec-muted)' }}>{profile.about}</p>

      <div className="mt-8 space-y-5">
        {profile.skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold mb-2">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm"
                  style={{ backgroundColor: 'var(--sec-pill-bg)', color: 'var(--sec-pill-text)' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
