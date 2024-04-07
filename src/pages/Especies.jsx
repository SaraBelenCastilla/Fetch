import React from 'react'
import { useState,useEffect } from 'react'
import { useParams ,Link} from 'react-router-dom'

function Especies() {
     const { VITE_ESPECIES } = import.meta.env
let {especies}=useParams();

const[detalles, setDetalles] =useState({})

useEffect(()=>{

    let controller = new AbortController()
    let options ={
        method: 'GET',
        headers: {
            'content_type':'application/json'
        },
        signal: controller.signal
    }

    fetch(VITE_ESPECIES+especies.toLowerCase(),options)
    .then(response=> response.json())
    .then(data=>{
        console.log(data);
        setDetalles(data)

    })
    .catch(err =>console.log(err))
    .finally(()=>controller.abort())

},[])



  return (
   <>
   <div className='dragon'>
    <div className='dragon__foto'>
   <img className='dragon__img' src= {'https://www.dnd5eapi.co' +detalles.image}alt="" />
   </div>
   <h1 className='dragon__name'>nombre: {detalles.name}</h1>
   <h2 className='dragon__size'>size: {detalles.size}</h2>
   <h2 className='dragon__tipo'>tipo: {detalles.type}</h2>
   
   </div>
   <Link className='dragon__enlace' to={'/dragones'}>volver</Link>
   </>
  )
}

export default Especies