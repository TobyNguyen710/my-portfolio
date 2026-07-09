import { profile } from '../data/profile'

export default function Hero() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-3">
          {profile.location}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          {profile.name}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">{profile.title}</p>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8">
          {profile.tagline}
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="px-5 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors"
          >
            Contact Me
          </a>
          <a
            href={profile.resumeUrl}
            className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-indigo-400 transition-colors"
          >
            Download Resume
          </a>
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-500 underline underline-offset-4"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
