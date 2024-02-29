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

        if (nombre === '' || email === '' || dni === '' || pago === '' || producto === null || factura === null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, complete todos los campos obligatorios',
                customClass: {confirmButton: 'confirm-button'}
            });
            return; 
        }

        if (!/^[a-zA-Z]{2,}$/.test(apellido)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El apellido debe contener al menos dos letras',
                customClass: {confirmButton: 'confirm-button'}
            });
            return; 
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, introduzca un correo electrónico válido',
                customClass: {confirmButton: 'confirm-button'}
            });
            return; 
        }

        if (!(/^\d{8}[a-zA-Z]$/.test(dni) || /^[a-zA-Z]\d{7}[a-zA-Z]$/.test(dni))) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, introduzca un DNI o NIF válido',
                customClass: {confirmButton: 'confirm-button'}
            });
            return; 
        }

        if (isNaN(pago) || pago < 20 || pago > 500) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El pedido mínimo es de 20 y el máximo de 500 euros',
                customClass: {confirmButton: 'confirm-button'}
            });
            return; 
        }

        if (producto === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, seleccione un producto',
                customClass: {confirmButton: 'confirm-button'}
            });
            return; 
        }

        if (!ofertas) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, marque la casilla para recibir nuestras ofertas',
                customClass: {confirmButton: 'confirm-button'}
            });
            return; 
        }

    });
});