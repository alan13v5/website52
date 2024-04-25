for(let i = 1; i <= 100; i ++){
    console.log("hola");
}

boton = document.getElementById("btnGenerar");
boton.addEventListener("click", (e) => {
    e.preventDefault();
    for(let i = 2; i <= 1000000; i + 2){
        console.log(i);
    }
})