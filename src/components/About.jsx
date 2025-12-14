const socialLinks = [
  {
    icon: '/insta.png',
    label: 'Instagram',
    url: 'https://www.instagram.com/m.i_showmik/',
  },
  {
    icon: '/linkedin.png',
    label: 'LinkedIn',
    url: 'https://bd.linkedin.com/in/miskat-ul-islam-84922a161',
  },
]

function About() {
  return (
    <section id="about" className="bg-black border-2 border-dashed border-retro-green p-5 mt-6">
      <h2 
        className="text-retro-yellow text-2xl font-bold mb-4"
        style={{ textShadow: '1px 1px #ff00ff' }}
      >
        ABOUT ME
      </h2>
      
      <div className="flex flex-col md:flex-row gap-5 items-start">
        <img 
          src="/my_prof.png" 
          alt="Miskat" 
          className="w-36 h-36 border-2 border-retro-green object-cover"
        />
        
        <div className="flex flex-col gap-3">
          <p className="text-retro-green">
            Hello! I am a software engineer who loves building things that look more
            modern than this website, but nostalgia wins today. I write code, break code,
            fix code, and sometimes ship code.
          </p>
          
          <div className="flex flex-wrap gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-retro-cyan transition-colors"
              >
                <img src={link.icon} alt={link.label} className="w-5 h-5" />
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-2 mt-1">
            <img src="/gmail.png" alt="Email" className="w-5 h-5" />
            <span className="text-white">miskatshowmik@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

