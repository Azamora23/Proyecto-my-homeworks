//ingresar tareas y agregar a pendientes
var tarea = document.getElementById("ingresarTarea");
var boton = document.getElementById("enviar");
var tareas = document.querySelector(".lista")

boton.addEventListener("click", function (){
    var nuevaTarea = ingresarTarea.value
    var li = document.createElement("li")
    var input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    var label = document.createElement("label")
    
    label.textContent = nuevaTarea
    
    tareas.appendChild(li)
    tareas.appendChild(input)
    tareas.appendChild(label)

    tarea.value = ""
})

