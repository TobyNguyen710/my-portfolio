export default function Section({ id, title, index, accent, children }) {
  return (
    <section id={id} className="scroll-mt-20 border-b py-16 px-6" style={{ borderColor: 'var(--panel-border)' }}>
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <span
            className="text-xs font-bold tracking-widest px-2 py-1 rounded"
            style={{ backgroundColor: `${accent}22`, color: accent }}
          >
            {String(index).padStart(2, '0')}
          </span>
          <h2 className="font-display text-2xl font-semibold tracking-tight">{title}</h2>
          <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${accent}55, transparent)` }} />
        </div>
        {children}
      </div>
    </section>
  )
}
