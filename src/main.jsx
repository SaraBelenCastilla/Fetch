import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Usuarios from './pages/Usuarios'
import Dragones from './pages/Dragones'
import Games from './pages/Games'
import Pokemon from './pages/Pokemon'
import Detalles from './pages/Detalles'
import Especies from './pages/Especies'
import Header from './components/Header'
import './css/style.css'


ReactDOM.createRoot(document.getElementById('root')).render(

  <Router>
    <Header/>

    <Routes>

    <Route path='/' element={<Inicio/>}/>
    <Route path='/productos' element={<Productos/>}/>
    <Route path='/usuarios' element={<Usuarios/>}/>
    <Route path='/dragones' element={<Dragones/>}/>
    <Route path='/games' element={<Games/>}/>
    <Route path='/pokemon' element={<Pokemon/>}/>
    <Route path='/pokemon/:detalles' element={<Detalles/>}/>

    <Route path='/dragones/:especies' element={<Especies/>}/>
    
    </Routes>



  </Router>
  
)
