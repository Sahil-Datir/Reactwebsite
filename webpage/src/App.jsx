import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
          <img src="https://demo.bifs.in/sahil.com/Resume/gojo.png" className='admin' />
        
        
      </div>
      <h1>Shil Datir</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
         
        </p>
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App
