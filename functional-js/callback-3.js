const numbers = [1,2,3,4,5];
const double = n => n * 2;
console.log(numbers.map(double));

const cart = [
    { name: 'Pencil', qtd: 10, price: 7.99 },
    { name: 'Print', qtd: 0, price: 600 },
    { name: 'Book', qtd: 3, price: 5.82 },
];

const getName = item => item.name;
console.log(cart.map(getName));

const sum = item => item.qtd * item.price;
console.log(cart.map(sum));

