export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-6 py-16 scroll-mt-20">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-8">
        {title}
      </h2>
      {children}
    </section>
  )
}
