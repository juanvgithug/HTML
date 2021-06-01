/*

Juan Vidal - Camada 17630

*/

function fSubmit(event) {


    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su formulario ha sido enviado',
        showConfirmButton: false,
        timer: 1500
    })
    console.log(`Form Submitted! Time stamp: ${event.timeStamp}`);
    event.preventDefault();
}

form.addEventListener('submit', fSubmit);