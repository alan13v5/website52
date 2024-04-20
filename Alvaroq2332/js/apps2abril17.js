/* Cuando de click muestre 2, 4 ,6 ,8, 1000000 */

const boton = document.getElementById("btnGenerar");

boton.addEventListener("click", e => {
    e.preventDefault();

    /* De 2 a un millón */
    for(let i = 2; i < 1000; i += 2) {
        console.log(i);
    }

    
   /*  for (let i = 1000; i >= 2; i -= 2) {
        consDe un millón a 2ole.log(i);
    } */
});
