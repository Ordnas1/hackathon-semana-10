// Reto 1 

function ejer1(a,b) {
    return a + b
}

function ejer2(a,b) {
    return a ** b
}

function ejer3(a,b,c) {
    return a ** 3 + b ** 3 + c ** 3
}

function ejer4(base, altura) {
    return base * altura / 2
}

function ejer5(num1, operador, num2) {
    switch (operador) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "%":
            return num1 % num2;
        default:
            return "El parámetro no es reconocido"
    }
}

