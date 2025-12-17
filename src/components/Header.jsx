import { useState } from 'react'

const navItems = [
  { href: '#about', label: 'ABOUT ME' },
  { href: '#articles', label: 'ARTICLES' },
  { href: '#contributions', label: 'CONTRIBUTIONS' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#contact', label: 'CONTACT' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="relative">
      {/* Logo */}
      <div
        className="text-2xl md:text-3xl font-bold text-retro-yellow md:absolute md:top-10 md:left-2"
        style={{ textShadow: '1px 1px #ff00ff' }}
      >
        M.I
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden absolute top-0 right-0 p-2 text-retro-cyan border-2 border-retro-cyan"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center flex-wrap gap-2 mt-5 pt-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-retro-cyan border-2 border-retro-cyan px-4 py-1 
                       hover:bg-retro-cyan hover:text-black transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden absolute top-12 left-0 right-0 z-50 bg-black border-2 border-retro-green
                    flex flex-col gap-1 p-3 transition-all duration-300 origin-top
                    ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className="text-retro-cyan border-2 border-retro-cyan px-4 py-2 text-center
                       hover:bg-retro-cyan hover:text-black transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
