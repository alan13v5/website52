const boton = document.getElementById("btnGenerar")

boton.addEventListener("click", e => {
    e.preventDefault();
    
    for (let i=2;i<=10;i+=2){
        console.log(i)
    }
});