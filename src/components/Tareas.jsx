import React from 'react'
import Cards from './Cards';

const Tareas = ({ tareasArray, eliminarTarea, editarTarea}) => {


    return (
        <div className="my-5">
            <h2 className="text-center text-info">Tareas</h2>

            <ul>

                {tareasArray.map((item) =>
                    <Cards item={item}  key={item.id} eliminarTarea={eliminarTarea} editarTarea={editarTarea}/>
                )}

            </ul>
        </div>
    )
}

export default Tareas;