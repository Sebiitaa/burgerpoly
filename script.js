document.getElementById('ruleta-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Obtener los valores ingresados
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const numero = document.getElementById('numero').value;

    // Validar los datos y enviar al Google Apps Script
    if (nombre && fecha && numero) {
        fetch('https://script.google.com/macros/s/AKfycbxMdB3dNVgKJEAx2FdN7hluq4zrGxQTyIkfjsSk0Yd1CvA4AOMZy8VNf_eSqR8ofeLb/exec', {
            method: 'POST',
            body: new URLSearchParams({
                nombre: nombre,
                fecha: fecha,
                numero: numero
            })
        })
        .then(response => response.text())
        .then(data => {
            console.log('Respuesta de Google Apps Script:', data);
            alert('Registro completado correctamente');
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error);
            alert('Hubo un problema al enviar el formulario');
        });
    } else {
        alert('Por favor completa todos los campos.');
    }
});

// Rellenar el campo de fecha con los días de la semana
window.onload = function() {
    const fechaSelect = document.getElementById('fecha');
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    diasSemana.forEach(dia => {
        const option = document.createElement('option');
        option.value = dia;
        option.textContent = dia;
        fechaSelect.appendChild(option);
    });
};
