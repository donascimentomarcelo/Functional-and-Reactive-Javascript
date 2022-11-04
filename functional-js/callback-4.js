const cart = [
    { name: 'Pencil', qtd: 10, price: 7.99 },
    { name: 'Print', qtd: 0, price: 600 },
    { name: 'Book', qtd: 3, price: 5.82 },
];

const qtdHigherThanZero = item => item.qtd > 0;
const getName = item => item.name;

const result = cart
    .filter(qtdHigherThanZero)
    .map(getName)

console.log(result);