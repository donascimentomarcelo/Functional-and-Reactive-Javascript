const cart = [
    { name: 'Pencil', qtd: 10, price: 7.99 },
    { name: 'Print', qtd: 4, price: 600 },
    { name: 'Book', qtd: 3, price: 5.82 },
];

const getTotal = item =>  item.qtd * item.price;
const sum = (accumulator, element) => accumulator + element;

const total = cart
    .map(getTotal)
    .reduce(sum);

console.log(total);