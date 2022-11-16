/**
 * Closure é quando uma função "lembra"
 * seu escopo léxico, mesmo quando a função
 * é executada fora desse escopo léxico
 */

const sumXPlus3 = require('./closure_scope');

const x = 10000;
console.log(sumXPlus3());