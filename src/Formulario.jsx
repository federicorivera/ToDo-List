import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Formulario = ({agregarTarea}) => {

   // Valores iniciales
   const [tareas, setTareas] = useState({
      title: "",
      description: "",
      state: "Pendiente",
      prioridad: false,
   });

   const { title, description, state, prioridad } = tareas;


   const enviarFormulario = (e) => {
      e.preventDefault();
   
      // Alert de error
      if(!title.trim() || !description.trim()) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Complete la tarea y la descripcion",
          });
    } else {


      // Nueva tarea
    const newTareas = {
      id: Date.now(),
      title: title,
      description: description,
      state: state === "Completado" ? true : false, 
      prioridad: prioridad, 
    }
    
    
   //  Agregar tarea
    agregarTarea(newTareas);
      

   //  Alert de exito
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Tarea agregada con exito",
            showConfirmButton: false,
            timer: 1500,
          });
    }
    }
    

   return (
      <>
         <form className='mt-5' onSubmit={enviarFormulario}>

            {/* tareas */}
            <input
               className='form form-control mb-2'
               type='text'
               placeholder='Ingrese tarea'
               value={title}
               onChange={(e) => setTareas({ ...tareas, title: e.target.value })}
            />

            {/* descripcion */}
            <textarea
               className='form form-control mb-2'
               placeholder='Ingrese descripcion'
               value={description}
               onChange={(e) => setTareas({ ...tareas, description: e.target.value })}>
            </textarea>
 
            {/* select */}
            <select className='form form-control mb-2' value={state} onChange={(e) => setTareas({ ...tareas, state: e.target.value })}>
               <option value={"Pendiente"}>Pendiente</option>
               <option value={"Completado"}>Completado</option>
            </select>

            {/* checkbox */}
            <div className='form-check mb-3'>
               <input
                  className='form-check-input'
                  type='checkbox' checked={prioridad}
                  onChange={(e) => setTareas({ ...tareas, prioridad: e.target.checked })} />

               <label className='form-check-label'>Prioridad</label>
            </div>

            <button className='btn btn-info'>Enviar</button>
         </form>
      </>
   )
}

export default Formulario;
