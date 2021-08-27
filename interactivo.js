var boton = document.getElementById("enviar")
var tarea = document.getElementById("ingresarTarea")
var listaTareas = document.getElementById("listaTareas")

//generar lista de tareas pendientes
boton.addEventListener("click", sumarTareaPendiente)
function sumarTareaPendiente(){
    var tareaPendiente = document.createElement("article")
    var texto = document.createElement("p")
    tareaPendiente.classList.add("tareaPendiente")
            
    tareaPendiente.innerHTML =  `
    <article id="tareasPendientes" class="tareaPendiente">
        <article class="message" id="tarea1">
        <div class="message-body">
            <p> </p>
        </div>
        <div>
            <button class="enProceso"><i class="fas fa-check-square fa-2x"></i>Move</button>
            <button class="eliminar" id="borrar"><i class="fas fa-trash-alt fa-2x"></i>Delete</button>
        </div>
        </article>
    </article>`
    
    listaTareas.appendChild(tareaPendiente)
      
    var texto = tareaPendiente.querySelector("p")
    texto.textContent = tarea.value
        
    tarea.focus()
    tarea.value = ""
    
  
    //boton eliminar
    var botonEliminar = tareaPendiente.querySelector(".eliminar")
    botonEliminar.addEventListener("click", eliminarTarea)
    function eliminarTarea(){
        swal.fire({
            title: "Are you sure to delete this homework?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete",
            cancelButtonText: "Cancel",
            confirmButtonColor: "hsl(217, 71%, 53%)",
          })
          .then(resultado => {
            if (resultado.value) {
                tareaPendiente.remove()
            } 
        });
    }
    //boton mover a hecho
    var listaProcesos = document.getElementById("listaProceso")
    var botonProceso = tareaPendiente.querySelector(".enProceso")
    botonProceso.addEventListener("click", moverProceso)
    function moverProceso(){
        listaProcesos.appendChild(tareaPendiente)
    }
        
}









    
