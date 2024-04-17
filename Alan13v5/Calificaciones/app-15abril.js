document.addEventListener("DOMContentLoaded", function() {
    const calificacionInput = document.getElementById("calificacion");
    const resultadoDiv = document.getElementById("resultado");
    const botonCalcular = document.getElementById("btnNota");

    botonCalcular.addEventListener("click", function(event) {
        event.preventDefault();

        const calificacion = parseFloat(calificacionInput.value);

        if (isNaN(calificacion)) {
            resultadoDiv.textContent = "Por favor, ingrese una calificación válida.";
            resultadoDiv.style.color = "red";
        } else if (calificacion < 0 || calificacion > 100) {
            resultadoDiv.textContent = "La calificación debe estar entre 0 y 100.";
            resultadoDiv.style.color = "red";
        } else {
            if (calificacion === 100) {
                resultadoDiv.textContent = "Nota: Excelente";
                resultadoDiv.style.color = "green";
            } else if (calificacion >= 90 && calificacion < 100) {
                resultadoDiv.textContent = "Nota: Muy bien";
                resultadoDiv.style.color = "green";
            } else if (calificacion >= 80 && calificacion < 90) {
                resultadoDiv.textContent = "Nota: Bien";
                resultadoDiv.style.color = "green";
            } else if (calificacion >= 70 && calificacion < 80) {
                resultadoDiv.textContent = "Nota: Regular";
                resultadoDiv.style.color = "orange";
            } else {
                resultadoDiv.textContent = "Nota: Reprobado";
                resultadoDiv.style.color = "red";
            }
        }
    });
});
