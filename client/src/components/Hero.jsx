import { profile } from '../data/profile'

export default function Hero({ variant = 'light' }) {
  return (
    <header className={`section-${variant}`}>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--sec-link)' }}>
          {profile.location}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">{profile.name}</h1>
        <p className="text-xl mb-6" style={{ color: 'var(--sec-muted)' }}>{profile.title}</p>
        <p className="max-w-xl mx-auto mb-2" style={{ color: 'var(--sec-muted)' }}>
          {profile.tagline}
        </p>
        <p className="text-sm mb-8" style={{ color: 'var(--sec-muted)' }}>
          {profile.phone} · {profile.email}
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
            className="px-5 py-2.5 rounded-full border text-sm font-medium hover:border-indigo-400 transition-colors"
            style={{ borderColor: 'var(--sec-border)' }}
          >
            Download Resume
          </a>
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline underline-offset-4 hover:opacity-80"
              style={{ color: 'var(--sec-muted)' }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
