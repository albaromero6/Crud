/*******************************************************************************************/
/*                     JAVA SCRIPT PARA VALIDACIONES DE LOGIN.HTML                         */
/*                         TRABAJO REALIZADO POR ALBA ROMERO                               */
/*                                  VERSIÓN: 1.1.0                                         */
/*                          LENGUAJE DE MARCAS (2ºTRIMESTRE)                               */
/*******************************************************************************************/

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.login form');
    var usernameInput = form.querySelector('input[name="user"]');
    var passwordInput = form.querySelector('input[name="pswd"]');
    var submitButton = form.querySelector('.letgo');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        var username = usernameInput.value;
        var password = passwordInput.value;

        if (username.trim() === '' || password.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Los campos de usuario y contraseña no pueden estar vacíos",
                customClass: {
                    confirmButton: 'green-button'
                }});
            return;
        }

        if (!validateUsername(username)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "El nombre de usuario debe tener entre 8 y 12 caracteres",
                customClass: {
                    confirmButton: 'green-button'
                }});
            return;
        }

        if (!validatePassword(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Ops...',
                text: "La contraseña debe tener entre 8 y 15 caracteres, al menos una mayúscula, una minúscula y un dígito",
                customClass: {
                    confirmButton: 'green-button'
                }});
            return;
        }

        Swal.fire({text: '¡Bienvenido!', customClass: {confirmButton: 'green-button'}}).then(function() {
            form.submit();
        });
    });

    function validateUsername(username) {
        return username.trim() !== '' && username.length >= 8 && username.length <= 12;
    }

    function validatePassword(password) {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/;
        return password.trim() !== '' && regex.test(password);
    }
});