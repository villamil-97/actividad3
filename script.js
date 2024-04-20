// Lista de tareas
let tareas = [];

// Función para renderizar la lista de tareas
function renderizarTareas() {
    const listaTareas = document.getElementById('listaTareas');
    listaTareas.innerHTML = '';

    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        
        // Crear checkbox para marcar tarea como completada
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarea.completada;
        checkbox.addEventListener('change', () => marcarTareaCompletada(index));
        li.appendChild(checkbox);
        
        // Añadir texto de la tarea
        const tareaTexto = document.createElement('span');
        tareaTexto.textContent = tarea.texto;
        tareaTexto.style.textDecoration = tarea.completada ? 'line-through' : 'none';
        li.appendChild(tareaTexto);
        
        // Crear botón para eliminar tarea
        const btnEliminar = document.createElement('button');
        btnEliminar.className = 'btn btn-danger btn-sm float-end';
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.addEventListener('click', () => eliminarTarea(index));
        li.appendChild(btnEliminar);
        
        listaTareas.appendChild(li);
    });
}

// Función para agregar una nueva tarea
function agregarTarea() {
    const nuevaTareaInput = document.getElementById('nuevaTareaInput');
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if (nuevaTareaTexto !== '') {
        tareas.push({ texto: nuevaTareaTexto, completada: false });
        nuevaTareaInput.value = '';
        renderizarTareas();
    }
}

// Función para marcar una tarea como completada
function marcarTareaCompletada(index) {
    tareas[index].completada = !tareas[index].completada;
    renderizarTareas();
}

// Función para eliminar una tarea
function eliminarTarea(index) {
    tareas.splice(index, 1);
    renderizarTareas();
}

// Manejador de eventos para el botón de agregar tarea
document.getElementById('agregarTareaBtn').addEventListener('click', agregarTarea);

// Inicialización
renderizarTareas();
