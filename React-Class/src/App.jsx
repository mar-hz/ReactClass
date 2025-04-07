import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicial from './vistas/Inicial.jsx'
import Perfil from './vistas/Perfil.jsx'
import Login from './vistas/Login.jsx'
import ResponsiveAppBar from './components/ResponsiveAppBar.jsx'


function App() {
  return (
    <BrowserRouter>
    <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Inicial />} />
        <Route path="/user/profile" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
