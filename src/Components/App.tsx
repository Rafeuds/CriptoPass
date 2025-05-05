import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/electron-vite.animate.svg'
import '../Styles/App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  
  const handleClick1 = () => {
    const newCount = count + 1
    setCount(newCount)
    if (newCount === 10) {
      setCount2(0)
    }
  }

  const handleClick2 = () => {
    const newCount2 = count2 + 1
    setCount2(newCount2)
    if (newCount2 === 10) {
      setCount(0)
    }
  }

  return (
    <>
      <div>
        <a href="https://google.com" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite sa React</h1>
      <div className="card">
        <button onClick={handleClick1}>
          count is {count}
        </button>
        <button onClick={handleClick2}>
          count is {count2}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
