const contributions = [
  {
    label: 'Check my GitHub →',
    url: 'https://github.com/Miskat-UL',
    reputation: null,
  },
  {
    label: 'StackOverflow →',
    url: 'https://stackoverflow.com/users/15202290/miskat',
    reputation: '21',
  },
  {
    label: 'OpenAI Community →',
    url: 'https://community.openai.com/u/miskat_showmik',
    reputation: null,
  },
]

function Contributions() {
  return (
    <section id="contributions" className="bg-black border-2 border-dashed border-retro-green p-5 mt-6">
      <h2 
        className="text-retro-yellow text-2xl font-bold mb-4"
        style={{ textShadow: '1px 1px #ff00ff' }}
      >
        CONTRIBUTIONS
      </h2>
      
      <div className="flex flex-wrap gap-4">
        {contributions.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-retro-green text-retro-green px-4 py-3 
                       text-center hover:bg-retro-green hover:text-black 
                       transition-colors min-w-[180px]"
          >
            <div>{item.label}</div>
            {item.reputation && (
              <div className="mt-2 border-2 border-orange-400 text-orange-400 
                              px-2 py-1 text-sm inline-block">
                Reputation: {item.reputation}
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contributions

