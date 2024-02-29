/*******************************************************************************************/
/*                           JAVA SCRIPT PARA LISTADO.HTML                                 */
/*                         TRABAJO REALIZADO POR ALBA ROMERO                               */
/*                                  VERSIÓN: 1.1.0                                         */
/*                          LENGUAJE DE MARCAS (2ºTRIMESTRE)                               */
/*******************************************************************************************/

document.addEventListener("DOMContentLoaded", function() {

    var editButtons = document.querySelectorAll(".edit");

    editButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            Swal.fire({
                title: '¿Estás seguro que deseas editar este pedido?',
                showCancelButton: true,
                confirmButtonText: 'Editar',
                cancelButtonText: 'Cancelar',
                customClass: {
                    confirmButton: 'swal-button-green',
                    cancelButton: 'swal-button-green'
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {

    var deleteButtons = document.querySelectorAll(".delete");

    deleteButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            Swal.fire({
                title: '¿Estás seguro que deseas borrar este pedido?',
                showCancelButton: true,
                confirmButtonText: 'Borrar',
                cancelButtonText: 'Cancelar',
                customClass: {
                    confirmButton: 'swal-button-green',
                    cancelButton: 'swal-button-green'
                }
            });
        });
    });
});