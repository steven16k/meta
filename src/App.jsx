import { useState } from 'react'
<<<<<<< HEAD
import Formulario from "./Components/Formulario.jsx";

function App() {
=======
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
>>>>>>> 30e7a3de601baf07143f11d4601b87c446b4a2af

  return (
    <>
      <div>
<<<<<<< HEAD
      <Formulario/>
      </div>
    </>
  );
};

export default App;
=======
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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

export default App
>>>>>>> 30e7a3de601baf07143f11d4601b87c446b4a2af
