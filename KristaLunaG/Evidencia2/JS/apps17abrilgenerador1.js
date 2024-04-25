const boton = document.getElementById('btnGenerar')

boton.addEventListener("click", (e) => {
    e.preventDefault();

    for (let i=2; i<=1000; i+=2){

    console.log(i);
    };
});