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

document.getElementById('ruleta-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Obtener los valores ingresados
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const numero = document.getElementById('numero').value;

    // Validar los datos y mostrar en consola (puedes personalizar esta parte)
    if (nombre && fecha && numero) {
        console.log(`Nombre: ${nombre}`);
        console.log(`Día seleccionado: ${fecha}`);
        console.log(`Número obtenido: ${numero}`);
        alert('Registro completado correctamente');
    } else {
        alert('Por favor completa todos los campos.');
    }
});

