/*----------------------------------------------Problema 10------------------------------------------------------ */
/*Numeros perfectos(Son los numeros que al sumar con sus propios divisores da el mismo numero) 
*/
const nums = document.getElementById("nums");
const boton = document.getElementById("btnVer");
const Lista = document.getElementById("Lista");

boton.addEventListener("click", e => {
    e.preventDefault();

    const np = parseInt(nums.value);
    let numero = 1;
    let perfect = 0;

    while(perfect < np){
        if(perfect == 0){
            Lista.innerHTML="";
        }
        let suma=0;
        for(let i =1; i< numero; i++){
            if(numero%i==0){
                suma += i;
            }
        }

        if(suma==numero){
            const item = document.createElement('li');
            item.textContent=numero;
            Lista.appendChild(item);
            perfect++;

         }   
         numero++;
    }

});