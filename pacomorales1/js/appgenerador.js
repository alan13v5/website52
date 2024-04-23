/* Cuando el usuario de click al boton mandar a la consola los siguientes numero 2, 4, 6 ..... 1,000,00 */

const boton = document.getElementById("btnGenerar");

boton.addEventListener("click", e => {
    e.preventDefault();
    for(let i = 2; i<=1000000; i+=2){
        console.log(i);
    }

});