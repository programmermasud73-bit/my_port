const articles = [
  {
    title: 'Django Rest API x Flutter',
    description: 'How to make api with django rest and slight taste of flutter app.',
    url: 'https://dev.to/miskat/django-rest-api-x-flutter-3346',
  },
  {
    title: "The 'else' Keyword in \"for\" loop",
    description: 'Learn how else keyword works on python for loop.',
    url: 'https://dev.to/miskat/the-else-keyword-in-for-loop-3e04',
  },
]

function Articles() {
  return (
    <section id="articles" className="bg-black border-2 border-dashed border-retro-green p-5 mt-6">
      <div className="flex items-center gap-3 mb-1">
        <h2 
          className="text-retro-orange text-2xl font-bold"
          style={{ textShadow: '1px 1px #ff00ff' }}
        >
          LATEST ARTICLES
        </h2>
        <a 
          href="https://dev.to/miskat" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-retro-green hover:text-retro-cyan transition-colors"
        >
          <img src="/dev.png" alt="Dev.to" className="w-10 h-10" />
          <span>Dev.to</span>
        </a>
      </div>
      
      <p className="text-retro-green text-sm mb-4">
        My latest thoughts and insights on development, technology, and more.
      </p>
      
      <div className="grid md:grid-cols-2 gap-5">
        {articles.map((article) => (
          <article key={article.url} className="border-2 border-retro-green p-4">
            <h3 className="text-retro-yellow font-bold mb-2">{article.title}</h3>
            <p className="text-retro-green text-sm mb-3 line-clamp-2">
              {article.description}
            </p>
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-retro-cyan font-bold hover:underline"
            >
              read more →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Articles

