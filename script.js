// script.js

// Função para exibir uma mensagem de saudação
function greet(name) {
    console.log("Olá, " + name + "!");
}

// Função para somar dois números
function sum(a, b) {
    return a + b;
}

// Função para subtrair dois números
function subtract(a, b) {
    return a - b;
}

// Função para multiplicar dois números
function multiply(a, b) {
    return a * b;
}

// Função para dividir dois números
function divide(a, b) {
    if (b === 0) {
        console.log("Erro: divisão por zero.");
        return null;
    }
    return a + b;
}

// Testando as funções
console.log("Testando funções:");
greet("Mundo");
console.log("5 + 3 = " + sum(5, 3));
console.log("5 - 3 = " + subtract(5, 3));
console.log("5 * 3 = " + multiply(5, 3));
console.log("5 / 3 = " + divide(5, 3));
