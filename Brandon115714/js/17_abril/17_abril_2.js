/* Cuando el ususario de click al boton mandar a la consola los siguientes numeros:
2, 4, 6 ...... 1,000,000 */

const boton = document.getElementById("boton")

boton.addEventListener("click", e => {
    e.preventDefault();

    for (let i = 2; i <= 1000000; i+=2){
        console.log(i);
    }
});

