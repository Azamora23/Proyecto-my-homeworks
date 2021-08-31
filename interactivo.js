var boton = document.getElementById("enviar")
var tarea = document.getElementById("ingresarTarea")
var listaTareas = document.getElementById("listaTareas")

//generar lista de tareas pendientes
boton.addEventListener("click", sumarTareaPendiente)
function sumarTareaPendiente(txt){
    var tareaPendiente = document.createElement("article")
    var texto = document.createElement("p")
    tareaPendiente.classList.add("tareaPendiente")
            
    tareaPendiente.innerHTML =  `
    <article id="tareasPendientes" class="tareaPendiente">
        <article class="message" id="tarea1">
        <div class="message-body">
            <p class="textoIngresado"> </p>
        </div>
        <div>
            <button class="eliminar" id="borrar"><i class="fas fa-trash-alt fa-2x"></i></button>
        </div>
        </article>
    </article>`
    
    listaTareas.appendChild(tareaPendiente)
      
    var texto = tareaPendiente.querySelector("p")
    texto.textContent = tarea.value
            
    tarea.focus()
    tarea.value = ""
    guardarTareas()
    
  
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
                guardarTareas()
            } 
        });
    }
    //hidratar tarea si hay contenido
    if(typeof txt === "string"){
        texto.textContent = txt
    }
}
//almacenamiento local
function guardarTareas(){
    var tareasActuales = document.querySelectorAll(".textoIngresado")
    var tareasAguardar = []

    for(var i = 0; i < tareasActuales.length; i++){
        tareasAguardar.push(tareasActuales[i].textContent)
    }
    localStorage.setItem("tareas", JSON.stringify(tareasAguardar))
}
//recuperar tareas almacenadas
var tareasGuardadas = JSON.parse(localStorage.getItem("tareas"))

if((tareasGuardadas)){
    tareasGuardadas.forEach(function(trea) {
        sumarTareaPendiente(trea)
    });
}
//obtener cantidad de tareas pendientes
var cantidad = document.getElementsByClassName("tareaPendiente").length/2
document.getElementById("numero").innerHTML = cantidad 
//actulizacion de cantidad de tareas
function actualizarCantidad(){
    window.location.reload();
} 






    
