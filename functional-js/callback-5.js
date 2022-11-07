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

Array.prototype.customReduce = function(fn, initial) {
    let acc = initial;
    for (let i = 0; i < this.length; i++) {
        if (!acc && i === 0) {
            acc = this[i];
            continue;
        }
        acc = fn(acc, this[i], i, this);
    }
    return acc;
}

const customTotal = cart
    .map(getTotal)
    .customReduce(sum);

console.log(customTotal);