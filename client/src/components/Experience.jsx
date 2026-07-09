import Section from './Section'
import { profile } from '../data/profile'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {profile.experience.map((job) => (
          <div key={job.role + job.company} className="border-l-2 border-indigo-200 dark:border-indigo-900 pl-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                {job.role} · {job.company}
              </h3>
              <span className="text-sm text-slate-500 dark:text-slate-500">{job.period}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mt-1">{job.description}</p>
          </div>
        ))}
      </div>

      {profile.education.length > 0 && (
        <div className="mt-10">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Education</h3>
          <div className="space-y-4">
            {profile.education.map((edu) => (
              <div key={edu.school} className="border-l-2 border-slate-200 dark:border-slate-800 pl-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <p className="font-medium text-slate-800 dark:text-slate-200">{edu.school}</p>
                  <span className="text-sm text-slate-500 dark:text-slate-500">{edu.period}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">{edu.degree}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}
