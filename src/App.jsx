import { useState } from 'react'
import Taskcard from './Components/Taskcard' 
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <header>
              <main>
                  <h1>Lista de Tareas</h1>
                  <Taskcard
                      materia="Interacción Hombre Computador"
                      docente="Ing. Juan Pérez"
                      fecha="2026-10-15"
                      estado="Pendiente"
                  />
              </main>
          </header>
      </div>
  )
}

export default App
