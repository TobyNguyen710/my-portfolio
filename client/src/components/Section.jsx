export default function Section({ id, title, variant = 'light', children }) {
  return (
    <section id={id} className={`section-${variant} scroll-mt-20`}>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8">{title}</h2>
        {children}
      </div>
    </section>
  )
}
