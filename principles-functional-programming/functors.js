/**
 * Functors são objetos que implementam a função MAP
 * que também é um "wrapper" de um valor
 */

const nums = [1, 2, 3, 4, 5, 6];

// ARRAY é um exemplo de FUNCTORS
const newNums = nums
    .map(el => el + 10)
    .map(el => el * 2);

console.log(nums, newNums);

function SafeType(value) {
    return {
        value,
        invalid() {
            return this.value === null || this.value === undefined;
        },
        map(fn) {
            if (this.invalid()) return SafeType(null);

            const newValue = fn(this.value);
            return SafeType(newValue);
        }
    }
}

const result = SafeType('It is a text')
    .map(text => text.toUpperCase())
    .map(text => `${text}!!!`)
    .map(text => text.split('').join(' '));

console.log(result.value);

// Tratando valores null
const nullResult = SafeType('It is a text')
    .map(text => text.toUpperCase())
    .map(() => null)
    .map(text => text.split('').join(' '));

console.log(nullResult.value);