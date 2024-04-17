document.getElementById("generarBtn").addEventListener("click", function() {
    generarPares();
});

function generarPares() {
    var inicio = parseInt(document.getElementById("inicio").value);
    var fin = parseInt(document.getElementById("fin").value);

    if (isNaN(inicio) || isNaN(fin)) {
        alert("Por favor ingresa números válidos en ambos campos.");
        return;
    }

    var serie = "";
    for (var i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            serie += i + ", ";
        }
    }
    if (serie === "") {
        serie = "No hay números pares en este rango.";
    } else {
        serie = serie.slice(0, -2); // Eliminar la última coma y espacio
    }
    document.getElementById("output").innerHTML = "<p>Inicio: " + inicio + "</p><p>Fin: " + fin + "</p><p>Serie: " + serie + "</p>";
}
