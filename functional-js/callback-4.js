const cart = [
    { name: 'Pencil', qtd: 10, price: 7.99 },
    { name: 'Print', qtd: 0, price: 600 },
    { name: 'Book', qtd: 3, price: 5.82 },
];

const qtdHigherThanZero = item => item.qtd > 0;
const getName = item => item.name;

const result = cart
    .filter(qtdHigherThanZero)
    .map(getName);

console.log(result);

Array.prototype.customFilter = function(fn) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i]))
            newArray.push(this[i]);
    }
    return newArray;
}

console.log(
    cart
    .customFilter(qtdHigherThanZero)
    .map(getName)
)