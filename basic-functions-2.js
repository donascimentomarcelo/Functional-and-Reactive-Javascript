// Arrow Function

const hey = () => console.log('Hey!');
hey();

const greetings = name => `Hey ${name}!`;
console.log(greetings('Crane'));

const sum = (...numbers) => {
    let total = 0;
    for (const n of numbers) {
        total += n;
    }
    return total;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6));
console.log(sum(20,30,40));

// this

Array.prototype.lastElement = function() {
    console.log(this[this.length - 1]);
}

const numbers = [1,2,3,500];
numbers.lastElement();

