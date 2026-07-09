import Section from './Section'
import { profile } from '../data/profile'

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{profile.about}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  )
}
