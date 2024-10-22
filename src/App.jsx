import { useState } from "react";
import Tareas from "./components/Tareas";
import Formulario from "./Formulario";
import Swal from "sweetalert2";

const initialTareas = [
  {
    id: 1,
    title: "tarea #1",
    description: "description #1",
    state: false, // "pendiente"
    prioridad: false, // "no prioritario"
  },
  {
    id: 2,
    title: "tarea #2",
    description: "description #2",
    state: true, // "completado"
    prioridad: true, // "prioritario"
  },
  {
    id: 3,
    title: "tarea #3",
    description: "description #3",
    state: true, // "completado"
    prioridad: false, // "no prioritario"
  }
];

function App() {

  const [tareasArray, setTareasArray] = useState(initialTareas)

  //Agregar 
  const agregarTarea = (newTarea) => {
    setTareasArray([...tareasArray, newTarea])
  }


  // Editar
  const editarTarea = (id) => {
    const arrayActualizado = tareasArray.map(item => {
        if(item.id === id) {
            item.state = !item.state;
        } 
        return item;
    });
    setTareasArray(arrayActualizado);
  } 


  // Eliminar
const eliminarTarea = (id) => {
  
    // Mostrar alerta de confirmación
    Swal.fire({
        title: "¿Estás seguro?",
        text: "¿Estás seguro que quieres eliminar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        // Si el usuario confirma
        if (result.isConfirmed) {

            // Filtrar tareas y eliminar la tarea seleccionada
            const arrayFiltrado = tareasArray.filter(item => item.id !== id);
            setTareasArray(arrayFiltrado);

            // Mostrar mensaje de éxito
            Swal.fire({
                title: "Eliminado con éxito",
                text: "Su tarea ha sido eliminada",
                icon: "success"
            });
        }
    });
};



  

  return (
    <div className="container my-3">

        {/* Formulario */}
        <h2 className="mb-3 text-info">Formulario</h2>
        <Formulario agregarTarea={agregarTarea}/>
        
        {/* Tareas */}
        <Tareas tareasArray={tareasArray} eliminarTarea={eliminarTarea} editarTarea={editarTarea}/>
        
    </div>
  )
}

export default App;
