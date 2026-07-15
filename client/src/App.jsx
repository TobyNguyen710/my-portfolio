import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import { useTheme } from './context/ThemeContext'
import { accents } from './theme/accents'

export default function App() {
  const { theme } = useTheme()
  const footerAccent = accents.teal[theme].base

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="py-8 px-6 text-center text-sm" style={{ color: 'var(--muted)' }}>
        <span style={{ color: footerAccent }}>&gt;</span> built with the MERN stack
      </footer>
    </div>
  )
}
