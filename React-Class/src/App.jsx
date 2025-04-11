import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Inicial from './vistas/Inicial.jsx'
import Perfil from './vistas/Perfil.jsx'
import Login from './vistas/Login.jsx'
import ResponsiveAppBar from './components/ResponsiveAppBar.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react'


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const login = async (user) => {
    const data = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    const datos = await data.json();
    setIsLogin(datos.isLogin);
    return datos.isLogin;
  };
  const logout = () => {
    setIsLogin(false);
  };

  return (
    <BrowserRouter>
    {isLogin && <ResponsiveAppBar logout={logout} />}
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route path="/home" element={isLogin ? <Inicial /> : <Login login={login} />} />
        <Route path="/user/profile" element={isLogin ? <Perfil /> : <Login login={login} />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
