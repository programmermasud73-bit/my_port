import Header from './components/Header'
import About from './components/About'
import Articles from './components/Articles'
import Skills from './components/Skills'
import Contributions from './components/Contributions'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  return (
    <div className="min-h-screen font-mono relative">
      <ParticlesBackground />
      
      <div className="max-w-4xl mx-auto px-5 py-5 relative z-10">
        <Header />
        
        <h1 className="text-center text-3xl md:text-4xl font-bold text-retro-green mt-2 mb-5"
            style={{ textShadow: '2px 2px #ff00ff' }}>
          WELCOME TO Miskat's WORLD <span className="animate-blink">_</span>
        </h1>
        
        <About />
        <Articles />
        <Skills />
        <Contributions />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
