document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("sumForm");
    const resultParagraph = document.getElementById("result");

    form.addEventListener("submit", e => {
        e.preventDefault();

        const start = parseInt(document.getElementById("inicioInput").value);
        const end = parseInt(document.getElementById("finInput").value);

        if (isNaN(start) || isNaN(end)) {
            resultParagraph.textContent = "Por favor, ingresa números válidos.";
            return;
        }

        const sum = calculateSum(start, end);
        resultParagraph.textContent = "La suma es: " + sum;
    });

    function calculateSum(start, end) {
        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    }
});
