/* Uso de For  */ 
for(let i = 1; i <= 100; i++){
	console.log("hola");
}
/*      2,4,6......1,000,000     */
const boton = console.getElementByID("btn");

boton.addEventListener("click", e => {
	e.preventDefault();
	for(let i=2; i<=1000000; i+=2){
		console.log(i)
    }
});

/*  
	     /*   1,000,000 .....6,4,2   
boton.addEventListener("click", e => {
	e.preventDefault();
	for(let i=1000000; i>=2; i-=2){
		console.log(i)
    }
}); */