import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import Navbar from './componentes/Navbar/Navbar'
import Contenido from './componentes/Contenido/Contenido'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header />
        <Navbar />
      
      <Contenido />
      <Footer />
    </>
  )
}

export default App
