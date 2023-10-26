const calcularButton = document.getElementById("calcular");
const numero1Input = document.getElementById("numero1");
const numero2Input = document.getElementById("numero2");
const operadorSelect = document.getElementById("operador");
const resultadoPara = document.getElementById("resultado");

calcularButton.addEventListener("click", function() {
    const numero1 = parseFloat(numero1Input.value);
    const numero2 = parseFloat(numero2Input.value);
    const operador = operadorSelect.value;

    if (!isNaN(numero1) && !isNaN(numero2)) {
        let resultado = 0;
        switch (operador) {
            case "soma":
                resultado = numero1 + numero2;
                break;
            case "subtracao":
                resultado = numero1 - numero2;
                break;
            case "multiplicacao":
                resultado = numero1 * numero2;
                break;
            case "divisao":
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                } else {
                    resultadoPara.textContent = "Não é possível dividir por zero.";
                    return;
                }
                break;
        }
        resultadoPara.textContent = resultado;
    } else {
        resultadoPara.textContent = "Por favor, insira valores numéricos válidos.";
    }
});