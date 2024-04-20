/* Cuando el usuario de clic al boton mandar a la consola los siguientes numeros:
   2, 4, 6, ..., 1000000  */

   boton = document.getElementById("btnGenerar");
   
   boton.addEventListener("click", e => {
       e.preventDefault();
       for (let i=2; i<1000000;i+=2){
           console.log(i);
       }
   });