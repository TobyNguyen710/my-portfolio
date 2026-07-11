import Section from './Section'
import { profile } from '../data/profile'

const ACCENT = '#5eead4'

export default function About() {
  return (
    <Section id="about" title="Profile Summary" index={1} accent={ACCENT}>
      <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>{profile.about}</p>

      <div className="mt-8 space-y-5">
        {profile.skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-bold mb-2" style={{ color: ACCENT }}>
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg text-sm border"
                  style={{
                    backgroundColor: 'var(--pill-bg)',
                    color: 'var(--pill-text)',
                    borderColor: 'var(--panel-border)',
                  }}
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
