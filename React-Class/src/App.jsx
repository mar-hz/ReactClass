import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicial from './vistas/Inicial.jsx'
import Boton from './components/Boton.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/home" element={<Inicial />} />
        <Route path="/boton" element={<Boton texto={"Vista del Boton"} onClick={() => {}} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
