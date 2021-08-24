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
        <article class="message is-info" id="tarea1">
        <div class="message-body">
            <p> </p>
        </div>
        <div>  
            <span class="icon has-text-success">
            <button><i class="fas fa-check-square fa-2x"></i></button>
            </span>
            <span class="icon has-text-danger">
            <button class="eliminar" id="borrar"><i class="fas fa-trash-alt fa-2x" role="button"></i></button>
            </span>
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
        tareaPendiente.remove()
    }
}


    
