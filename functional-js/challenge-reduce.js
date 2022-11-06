const cart = [
    { name: 'Pencil', qtd: 10, price: 7.99, fragile: true },
    { name: 'Print', qtd: 4, price: 600, fragile: false },
    { name: 'Book', qtd: 3, price: 5.82, fragile: true },
    { name: 'Item A', qtd: 12, price: 12.52, fragile: false },
    { name: 'Item B', qtd: 10, price: 7.44, fragile: true },
];

const isFragile = item => item.fragile;
const getTotal = item =>  item.qtd * item.price;
const getAvg = (accumulator, element) => {
    const newQtd = accumulator.qtd + 1;
    const newTotal = accumulator.total + element;

    return {
        qtd: newQtd,
        total: newTotal,
        avg: newTotal / newQtd
    }
}

const initialAvg = { qtd: 0, total: 0, avg: 0 }

const result = cart
    .filter(isFragile)
    .map(getTotal)
    .reduce(getAvg, initialAvg)
    .avg;

console.log(result);