const navItems = [
  { href: '#about', label: 'ABOUT ME' },
  { href: '#articles', label: 'ARTICLES' },
  { href: '#contributions', label: 'CONTRIBUTIONS' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#contact', label: 'CONTACT' },
]

function Header() {
  return (
    <header className="relative">
      <div 
        className="absolute top-10 left-2 text-3xl font-bold text-retro-yellow"
        style={{ textShadow: '1px 1px #ff00ff' }}
      >
        M.I
      </div>
      
      <nav className="flex justify-center flex-wrap gap-2 mt-5 pt-2">
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
    </header>
  )
}

export default Header

