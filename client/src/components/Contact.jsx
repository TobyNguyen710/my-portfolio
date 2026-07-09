import { useState } from 'react'
import Section from './Section'
import { profile } from '../data/profile'

const API_URL = import.meta.env.VITE_API_URL || ''

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

  return (
    <Section id="contact" title="Get in touch">
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Reach me directly at{' '}
        <a href={`mailto:${profile.email}`} className="text-indigo-500 hover:underline">
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
            className="rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            required
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <textarea
          required
          rows={4}
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-5 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'sent' && (
          <p className="text-sm text-emerald-600 dark:text-emerald-400">
            Thanks — your message has been sent!
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-600 dark:text-red-400">
            Something went wrong. Please email me directly instead.
          </p>
        )}
      </form>
    </Section>
  )
}
