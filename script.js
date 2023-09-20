console.log("page loaded...");

function cambiarNombre(elemento){
    const elementoNombreUsuario = document.querySelector('#userNames');
    userNames.innerText = "Maria Miller";
}

function removerInvitacion(elemento, opcion) {
    let contenidoInvitacion = elemento.closest('.card-list-item');
    contenidoInvitacion.remove();
    let numeroDeConexiones = document.querySelector('#connectionRequestNumber').innerText;
    numeroDeConexiones --;
    document.querySelector('#connectionRequestNumber').innerText = numeroDeConexiones;
    if (opcion === 'aceptar') {
        let numeroTotalDeConexiones = document.querySelector('#totalConnections').innerText;
        numeroTotalDeConexiones ++;
        document.querySelector('#totalConnections').innerText = numeroTotalDeConexiones;
    }

}