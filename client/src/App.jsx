import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-sm text-slate-500">
        Built with the MERN stack.
      </footer>
    </div>
  )
}
