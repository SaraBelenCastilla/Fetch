import React from 'react'
import { useState,useEffect } from 'react'
import { useParams ,Link} from 'react-router-dom'

function Detalles() {

  let {detalles} = useParams()
  const { VITE_DETALLES } = import.meta.env
  

  const[pokemons,setPokemons]=useState({})

  useEffect(()=>{

    let controller = new AbortController()
    let options ={
        method: 'GET',
        headers: {
            'content_type':'application/json'
        },
        signal: controller.signal
    }

    fetch(VITE_DETALLES+detalles,options )
    .then(response=> response.json())
    .then(data =>{
      console.log(data.sprites);
      setPokemons(data.sprites)
    })
    .catch(err =>console.log(err))
    .finally(()=>controller.abort())


  },[])
  return (
    
    <><div className='poke'>
    <div className='poke__foto'>
    <img className='poke__img' src={pokemons.front_default} alt="pokemon" />
    </div>
    </div>
    <Link className='poke__enlace' to={'/pokemon'}>volver</Link>
    </>
  )
}

export default Detalles