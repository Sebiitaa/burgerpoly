document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const dia = document.getElementById('dia').value;

    if (nombre && dia) {
        // Aquí va la URL de tu script de Google Apps (la que obtuviste al desplegarlo como Web App)
        const url = 'https://script.google.com/macros/s/AKfycbyU3uVAC3QpCJkW0fbcvButI69zyCn3YVcZ8NqgWDi-moL-vW7_aCDj2vCeK_ott1Ng/exec';

        // Enviar los datos a Google Apps Script
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `nombre=${encodeURIComponent(nombre)}&dia=${encodeURIComponent(dia)}`
        })
        .then(response => response.text())
        .then(data => {
            alert('Formulario enviado correctamente');
            document.getElementById('formulario').reset(); // Limpiar el formulario
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error);
            alert('Hubo un error al enviar el formulario. Intenta de nuevo.');
        });
    }
});
