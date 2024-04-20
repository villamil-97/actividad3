document.getElementById('activarEvento').addEventListener('click', function() { 

    const evento = new CustomEvent('nuevaNotificacion', { 

        detail: { 

            mensaje: '¡Evento activado!', 

            hora: new Date().toLocaleTimeString() 

        } 

    }); 

    document.dispatchEvent(evento); 

}); 

 

document.addEventListener('nuevaNotificacion', function(e) { 

    const notificacion = document.createElement('div'); 

    notificacion.className = 'alert alert-info'; 

    notificacion.textContent = `${e.detail.mensaje} a las ${e.detail.hora}`; 

    document.getElementById('contenedorNotificaciones').appendChild(notificacion); 

}); 