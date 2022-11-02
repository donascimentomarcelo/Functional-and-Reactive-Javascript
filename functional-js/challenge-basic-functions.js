function calculate (num1) {
    return (num2) => {
        return (fn) => fn(num1, num2);
    }
}

const sum = (a, b) => a + b;

const subtraction = (a, b) => a - b;

console.log(calculate(10)(10)(sum));
console.log(calculate(10)(10)(subtraction));