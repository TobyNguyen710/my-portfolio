import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero variant="light" />
      <About variant="dark" />
      <Experience variant="light" />
      <Projects variant="dark" />
      <Contact variant="light" />
      <footer className="section-dark py-8 text-center text-sm">
        Built with the MERN stack.
      </footer>
    </div>
  )
}
