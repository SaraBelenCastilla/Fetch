import React from 'react'
import {Link} from 'react-router-dom'

function Header() {

   
        
    
  return (
   <>
   <header className='header'>
    <h1 className='header__titulo'> my fetch!</h1>
    <nav className='header__navegacion'>
        <ul className='header__lista'>
            <li className='header__elementoLista'> <Link to={'/'} className='header__linkLista'>Inicio</Link></li>
            <li className='header__elementoLista'> <Link to={'/productos'} className='header__linkLista'>Productos</Link></li>
            <li className='header__elementoLista'> <Link to={'/usuarios'} className='header__linkLista'>Usuarios</Link></li>
            <li className='header__elementoLista'> <Link to={'/dragones'} className='header__linkLista'>Dragones</Link></li>
            <li className='header__elementoLista'> <Link to={'/games'} className='header__linkLista'>Games</Link></li>
            <li className='header__elementoLista'> <Link to={'/pokemon'} className='header__linkLista'>Pokemon</Link></li>
           
            
            
        </ul>
    </nav>
   </header>
   </>
  )
}

export default Header