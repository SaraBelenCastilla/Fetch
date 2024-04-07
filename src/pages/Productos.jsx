import React from 'react'
import { useEffect, useState } from 'react'

const { VITE_PROD } = import.meta.env

function Productos() {

    const [links, setLinks] = useState([]);


    useEffect(() => {

        let controller = new AbortController()
        let options = {
            method: 'GET',
            headers: {
                'content_type': 'application/json'
            },
            signal: controller.signal
        }

        fetch(VITE_PROD, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setLinks(data)
            })
            .catch(err => console.log(err))
            .finally(() => controller.abort())


    }, []);
    return (
        
            <section className='productos'>

                {links.map(enlace => {
                    

                    return<div key={enlace.id} className='contenedor__productos'>
                    <div className='productos__foto'>
                        <img className='foto__img' src={enlace.image} alt="" />
                    </div>
                    <div className='productos__info'>
                        <h1  className='productos__h1'>{enlace.title}</h1>

                        <h2 className='productos__h2'>{enlace.price} Euros</h2>
                    </div>
                </div>


                })}


            </section>

        
    )
}

export default Productos