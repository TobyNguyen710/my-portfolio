import { profile } from '../data/profile'
import { useTheme } from '../context/ThemeContext'
import { accents } from '../theme/accents'

export default function Hero() {
  const { theme } = useTheme()
  const { base: ACCENT, border, text: btnText } = accents.teal[theme]

  return (
    <header className="border-b px-6 py-24 text-center" style={{ borderColor: 'var(--panel-border)' }}>
      <div className="mx-auto max-w-3xl">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-4 inline-block px-2 py-1 rounded"
          style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
        >
          {profile.location}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">
          {profile.name}
          <span className="cursor-blink" style={{ color: ACCENT }}>
            _
          </span>
        </h1>
        <p className="text-xl mb-6" style={{ color: 'var(--muted)' }}>
          {profile.title}
        </p>
        <p className="max-w-xl mx-auto mb-2" style={{ color: 'var(--muted)' }}>
          {profile.tagline}
        </p>
        <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>
          {profile.phone} · {profile.email}
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="btn-game border-b-4 px-5 py-2.5 rounded-lg text-sm font-bold"
            style={{ backgroundColor: ACCENT, color: btnText, borderColor: border }}
          >
            Contact Me
          </a>
          <a
            href={profile.resumeUrl}
            className="btn-game border-b-4 px-5 py-2.5 rounded-lg text-sm font-bold"
            style={{ borderColor: 'var(--panel-border)', color: 'var(--text)', backgroundColor: 'var(--pill-bg)' }}
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
              style={{ color: 'var(--muted)' }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
