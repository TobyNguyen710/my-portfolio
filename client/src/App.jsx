import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="py-8 px-6 text-center text-sm" style={{ color: 'var(--muted)' }}>
        <span style={{ color: '#5eead4' }}>&gt;</span> built with the MERN stack
      </footer>
    </div>
  )
}
