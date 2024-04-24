const boton = document.getElementById("btngenerar");

boton.addEventListener("click", e => {
    e.preventDefault();

    for (let i = 2; i <= 1000000; i +=2 ){
        console.log(i);
    }

    /* for (let i = 1000; i >= 2; i-= 2){
        console.log(i); 
    } */
})