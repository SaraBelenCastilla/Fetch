import React from 'react'
import { useEffect,useState } from 'react'

function OtrosUsuarios() {

const [persona,setPersona]=useState([]);
const { VITE_RANDOM } = import.meta.env

useEffect(()=>{

    let controller = new AbortController()
    let options ={
        method: 'GET',
        headers: {
            'content_type':'application/json'
        },
        signal: controller.signal
    }


    fetch(VITE_RANDOM,options)
    .then(response=> response.json())
    .then(data =>{
        console.log(data.results[0]);
        setPersona(data.results)

    })
    .catch(err =>console.log(err))
    .finally(()=>controller.abort())

},[])


  return (
    <>
    {persona.map(elemento=>{

        return <div key={elemento.id} className='tarjeta'>
            <div className='tarjeta__foto'>
             <img className='tarjeta__img'  src={elemento.picture.large} alt="" />
             </div>
        <h1 className='tarjeta__h1'>{elemento.name.first} {elemento.name.last}</h1>
        <h2 className='tarjeta__h2'>{elemento.email}</h2>
        <h2 className='tarjeta__h2'>{elemento.phone}</h2>
        </div>
        

    })}
    <div>
        <img src='' alt="" />
    </div>
    </>
    
  )
}

export default OtrosUsuarios