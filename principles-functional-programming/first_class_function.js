/**
 * Diz-se que uma linguagemd de programação possui
 * funções de primeira classe qnd funções nessa
 * linguagem são tratadas como qualquer outra variável.
 */

const x = 3;
const y = function(txt) {
    return `This is the text: ${txt}`;
}

console.log(x);
console.log(y('Hey'));