/* ------------------------------------------Ciclo for(Generadores de pares)---------------------------------------- */
/*1.contador con un valor inicial
  2.Condicion a evaluar que determine si repite una interacion mas o no.
  3.Que tanto incrementa o decrementa el contador
*/


/*Cuando el usuario le de click al boton mandar a la consola los siguientes numero;
2,4,6...,100,000 */

const boton = document.getElementById("btnGenerar");

boton.addEventListener("click", e =>{
    e.preventDefault();
    for(let i=2;i<100000;i+=2){
        console.log(i);
    
    }

});