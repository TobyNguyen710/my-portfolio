import { useState } from 'react'
import Section from './Section'
import { profile } from '../data/profile'

const API_URL = import.meta.env.VITE_API_URL || ''
const ACCENT = '#34d399'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    borderColor: 'var(--panel-border)',
    color: 'var(--text)',
    backgroundColor: 'var(--pill-bg)',
  }

  return (
    <Section id="contact" title="Get in touch" index={4} accent={ACCENT}>
      <p className="mb-6" style={{ color: 'var(--muted)' }}>
        Reach me directly at{' '}
        <a href={`mailto:${profile.email}`} className="font-bold hover:underline" style={{ color: ACCENT }}>
          {profile.email}
        </a>{' '}
        or send a message below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            required
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
            style={{ ...inputStyle, '--tw-ring-color': ACCENT }}
          />
          <input
            required
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
            style={{ ...inputStyle, '--tw-ring-color': ACCENT }}
          />
        </div>
        <textarea
          required
          rows={4}
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
          style={{ ...inputStyle, '--tw-ring-color': ACCENT }}
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-game border-b-4 px-5 py-2.5 rounded-lg text-sm font-bold disabled:opacity-50"
          style={{ backgroundColor: ACCENT, color: '#0f1117', borderColor: '#059669' }}
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'sent' && (
          <p className="text-sm" style={{ color: ACCENT }}>Thanks — your message has been sent!</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-400">Something went wrong. Please email me directly instead.</p>
        )}
      </form>
    </Section>
  )
}
