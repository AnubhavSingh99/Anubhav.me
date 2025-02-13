import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div className="container">
      <h1>hi i'm anubhav singh.</h1>

      <p className="subtitle">i'm just a guy that loves creating things for others.</p>

      <div className="content">
        <p>
          i started my coding journey when i was 15, building small games and websites
          just for fun.
        </p>

        <p>
          selling stuff online turned into my high school obsession
          and i grew that into something meaningful by building
          <a href="#"> these</a> and <a href="#"> these</a>.
        </p>

        <p>
          been making stuff ever since.
        </p>

        <p>
          most recently, i've been working on <a href="#">buildspace</a> — 
          where we help people turn their ideas into reality through code.
        </p>

        <p>
          during this time i built <a href="#">nights & weekends</a>
          reaching over 10,000 developers, created a
          <a href="#"> learning platform</a> for aspiring developers,
          and grew our <a href="#">community</a> to thousands of builders.
        </p>

        <p>
          some stuff above worked out.<br />
          most of it didn't.<br />
          but, i learned a lot.
        </p>

        <p className="email-text">
          sometimes i write about my journey building stuff or when
          things go really right! if you want me to hyu when i write,
          drop your email below.
        </p>

        <form onSubmit={handleSubmit} className="email-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="naruto@gmail.com"
            className="email-input"
          />
          <button type="submit" className="submit-button">
            leggo
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
