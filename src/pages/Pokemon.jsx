import React from 'react'
import{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';



function Pokemon() {

    const[personajes, setPersonajes]= useState([]);
    const { VITE_POKE } = import.meta.env
    


    useEffect(()=>{

        let controller = new AbortController()
        let options ={
            method: 'GET',
            headers: {
                'content_type':'application/json'
            },
            signal: controller.signal
        }
        fetch(VITE_POKE,options)
        .then(response=>response.json()
        ).then(data =>{
            console.log(data.results
                );
            setPersonajes(data.results)
        })
        .catch(err =>console.log(err))
    .finally(()=>controller.abort())

    },[])
  return (
    <>
    
    {personajes.map((personaje,index)=>{
        return<ul key={index} className='lista'>
             <li className='elemento__lista' ><Link className='enlace__lista' to={'/pokemon/' + (index+1)}>{personaje.name}</Link></li>
             </ul>
    })}
    
     
    
   
    

    
   
    </>
  )
}

export default Pokemon