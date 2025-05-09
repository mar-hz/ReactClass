import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import Boton from '../components/Boton.jsx'

function Inicial() {
  const [count, setCount] = useState(0)
  const msg = () => alert("Hola le diste click!");

  return (
    <>
      <div className="logo container">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        count: {count}
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <Boton texto={"suma"} onClick={() => setCount((count) => count + 1)}/>
          <Boton texto={"resta"} onClick={() => setCount((count) => count - 1)}/>
          <Boton texto={"mensaje"} onClick={() => {msg()}}/>
        </div>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Inicial