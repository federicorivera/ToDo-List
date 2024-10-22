import React from 'react'

const Cards = ({ item, eliminarTarea, editarTarea} ) => {

    const { title, description, prioridad, state, id } = item;

    return (

        <li className="list-group-item d-flex justify-content-between align-items-start mt-2 border p-3">

            <div className='ms-2 me-auto'>
                <div className='fw-bold'>{title} 

                    {state ? ( 
                        <span className='bg-success text-light badge ms-5'>Completado</span> 
                    ) : (
                        <span className='bg-info text-light badge ms-5'>Pendiente</span>
                    )}
                    
                </div>
                <p>{description}</p>
                <div>

                    <button className='btn btn-danger me-1' onClick={() => eliminarTarea(id)}>Eliminar</button>
                    <button className='btn btn-warning' onClick={() => editarTarea(id)}>Editar</button>
                </div>
            </div>


            {prioridad ? (
                <span className='badge bg-primary  rounded-pill'>Prioritario</span>
            ) : (
                <span className='badge bg-warning  rounded-pill'>No prioritario</span>
            )}

        </li>
    )
}

export default Cards;