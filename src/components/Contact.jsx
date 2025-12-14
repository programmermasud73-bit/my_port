import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    const form = e.target
    const data = new FormData(form)
    const endpoint = 'https://formspree.io/f/xqavbvjj'
    
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
      
      if (response.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
      console.error(error)
    }
  }
  
  return (
    <section id="contact" className="bg-black border-2 border-dashed border-retro-green p-5 mt-6">
      <h2 
        className="text-retro-yellow text-2xl font-bold mb-2"
        style={{ textShadow: '1px 1px #ff00ff' }}
      >
        CONTACT
      </h2>
      
      <p className="text-retro-green text-sm mb-4">
        Wanna talk philosophy/tech. Have project in mind? Feel free to reach out!
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-md space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full p-2 bg-black border-2 border-retro-green text-retro-green 
                     font-mono placeholder:text-retro-green/50 focus:outline-none 
                     focus:border-retro-cyan"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-2 bg-black border-2 border-retro-green text-retro-green 
                     font-mono placeholder:text-retro-green/50 focus:outline-none 
                     focus:border-retro-cyan"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full p-2 bg-black border-2 border-retro-green text-retro-green 
                     font-mono placeholder:text-retro-green/50 focus:outline-none 
                     focus:border-retro-cyan"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          required
          className="w-full p-2 bg-black border-2 border-retro-green text-retro-green 
                     font-mono placeholder:text-retro-green/50 focus:outline-none 
                     focus:border-retro-cyan resize-none"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-4 py-2 bg-black border-2 border-retro-green text-retro-green 
                     font-mono hover:bg-retro-green hover:text-black transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>
        
        {status === 'success' && (
          <p className="text-retro-cyan">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500">Failed to send message. Try again.</p>
        )}
      </form>
    </section>
  )
}

export default Contact

