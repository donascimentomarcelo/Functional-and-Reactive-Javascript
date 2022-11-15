/**
 * Funções que opram em outras funções,
 * tomando-as como argumentos ou retornando-as,
 * são chamadas de higher-order functions.
 */

function execute(fn, ...params) {
    return function(initialText) {
        return `${initialText} ${fn(...params)}`;
    }
}

function sum(a, b, c) {
    return a + b + c;
}

function multiply(a, b) {
    return a * b;
}

const r1 = execute(sum, 20, 10, 5)('The sum result is: ');
const r2 = execute(multiply, 20, 30)('The multiply result is: ');

console.log(r1);
console.log(r2);