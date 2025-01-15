// Este es el JavaScript que se ejecutará al enviar el formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío normal del formulario

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const dia = document.getElementById('dia').value;

    // Mostrar los datos en la consola (esto es solo para pruebas)
    console.log('Nombre:', nombre);
    console.log('Día:', dia);

    // Si deseas realizar algún otro proceso con los datos aquí es el lugar para hacerlo
    alert('Formulario enviado con éxito!\nNombre: ' + nombre + '\nDía: ' + dia);
});


//API: AIzaSyDJNRhdoFp4ZtzzcgpGp37nxSflqXJHj3M