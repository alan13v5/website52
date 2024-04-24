/* Uso de For  */ 
for(let i = 1; i <= 100; i++){
	console.log("hola");
}
/*    DE  2,4,6......1,000     */
const boton = document.getElementById("btn");

boton.addEventListener("click", e => {
	e.preventDefault();
	for(let i=2; i<=1000; i+=2){
		console.log(i)
    }
});

/*  
	     /*  DE 1,000 .....6,4,2   /*  */
boton.addEventListener("click", e => {
	e.preventDefault();
	for(let i=1000; i>=2; i-=2){
		console.log(i)
    }
});