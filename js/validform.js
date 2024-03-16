/*******************************************************************************************/
/*                   JAVA SCRIPT PARA VALIDACIONES DE INSERRCIÓN.HTML                      */
/*                         TRABAJO REALIZADO POR ALBA ROMERO                               */
/*                                  VERSIÓN: 1.1.0                                         */
/*                          LENGUAJE DE MARCAS (2ºTRIMESTRE)                               */
/*******************************************************************************************/

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('.form');
    var submitButton = form.querySelector('.submit');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        var nombre = document.getElementById('nombre').value.trim();
        var apellido = document.getElementById('apellido').value.trim();
        var email = document.getElementById('email').value.trim();
        var dni = document.getElementById('dni').value.trim();
        var pago = document.getElementById('pago').value.trim();
        var producto = document.getElementById('producto').value;
        var factura = document.querySelector('input[name="factura"]:checked');
        var ofertas = document.getElementById('ofertas').checked;

        var errores = [];

        if (nombre === '' || email === '' || dni === '' || pago === '' || producto === null || factura === null) {
            errores.push('Por favor, complete todos los campos obligatorios.');
        }

        if (!/^[a-zA-Z]{2,}$/.test(nombre)) {
            errores.push('El nombre debe contener al menos dos letras.');
        }

        if (!/^[a-zA-Z]{2,}$/.test(apellido)) {
            errores.push('El apellido debe contener al menos dos letras.');
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            errores.push('El email ha de tener un formato válido.');
        }

        if (!(/^\d{8}[a-zA-Z]$/.test(dni) || /^[a-zA-Z]\d{7}[a-zA-Z]$/.test(dni))) {
            errores.push('El DNI o NIF ha de tener un formato válido.');
        }

        if (isNaN(pago) || pago < 20 || pago > 500) {
            errores.push('El pedido mínimo es de 20 y el máximo de 500.');
        }

        if (producto === '') {
            errores.push('Debe seleccionar un producto.');
        }

        if (!ofertas) {
            errores.push('Por favor, marque la casilla para recibir nuestras ofertas.');
        }

        if (errores.length > 0) {
            var mensajeError = errores.join('\n');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: mensajeError,
                customClass: {confirmButton: 'confirm-button'}
            });
            return; 
        }
    });
});
