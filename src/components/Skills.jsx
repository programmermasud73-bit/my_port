const skills = [
  'Python',
  'Flutter',
  'Firebase',
  'Open AI Agent SDK',
  'AI chatbot',
  'Go',
  'SQL',
  'Debugging nightmares',
  'Fixing merge conflicts',
]

function Skills() {
  return (
    <section id="skills" className="bg-black border-2 border-dashed border-retro-green p-5 mt-6">
      <h2 
        className="text-retro-yellow text-2xl font-bold mb-4"
        style={{ textShadow: '1px 1px #ff00ff' }}
      >
        SKILLS
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 text-retro-green">
          <p className="mb-3">
            My expertise spans across mobile and web development, with a strong focus on creating efficient,
            scalable, and user-friendly applications.
          </p>
          <p>
            I'm passionate about open source contributions and continuously strive to improve the developer
            ecosystem through my work on various packages and libraries.
          </p>
        </div>
        
        <div className="flex-1">
          <ul className="list-square pl-5 text-retro-green space-y-1">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills

