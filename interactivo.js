//ingresar tareas y agregar a pendientes
var tarea = document.getElementById("ingresarTarea");
var listaTarea = document.getElementById("listaTareas");
var template = document.getElementById("tareasPendientes").content;
var fragment = document.createDocumentFragment();
var boton = document.getElementById("enviar");
var sumarTareas = {
    
}

boton.addEventListener("click", agregarTarea)
function agregarTarea(){
    if(tarea === ""){
        console.log("esta vacio")
        return
    }
    var sumarTarea = {
        id: Date.now(),
        texto: tarea.value,
        estado: false
    }
    
    sumarTareas[sumarTarea.id] = sumarTarea
    tarea.value = ""
    tarea.focus()

    colorTareas()
}

var colorTareas = () => {
    listaTarea.innerHTML = ""
    Object.values(sumarTareas).forEach(sumarTarea => {
       var clone = template.cloneNode(true)
       clone.querySelector('p').textContent = sumarTarea.texto
       fragment.appendChild(clone)
    })
    listaTarea.appendChild(fragment)
    
}





    /*var nuevaTarea = ingresarTarea.value
    var li = document.createElement("li")
    var input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    var label = document.createElement("label")
    
    label.textContent = nuevaTarea
    
    tareas.appendChild(li)
    tareas.appendChild(input)
    tareas.appendChild(label)

    tarea.value = ""*/

