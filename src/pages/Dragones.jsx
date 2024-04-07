import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Dragones() {

    const [dragones, setDragones] = useState([]);
    const { VITE_DRAGONES } = import.meta.env
    useEffect(() => {

        let controller = new AbortController()
        let options = {
            method: 'GET',
            headers: {
                'content_type': 'application/json'
            },
            signal: controller.signal
        }
        fetch(VITE_DRAGONES, options)
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setDragones(data.results)
            })
            .catch(err => console.log(err))
            .finally(() => controller.abort())


    }, [])
    return (
        <>
            
                {dragones.map(dragon => {

                    return <ul key={dragon.index} className='lista'>
                        <li className='elemento__lista'><Link className='enlace__lista' to={'/dragones/' + dragon.index}>{dragon.name}</Link></li>

                        </ul>



                    

                })}
            

        </>
    )
}

export default Dragones