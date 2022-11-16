function eager(a, b) {
    // Processamento mais pesado
    const end = Date.now() + 2500
    while(Date.now() < end) {}

    const value = Math.pow(a, 3);
    return value + b;
}

function lazy(a) {
    // Processamento mais pesado
    const end = Date.now() + 2500
    while(Date.now() < end) {}

    const value = Math.pow(a, 3);
    return function(b) {
        return value + b;
    }
}

console.time('#1');
console.log(eager(3, 100));
console.log(eager(3, 100));
console.log(eager(3, 100));
console.timeEnd('#1');

console.time('#2');
const lazy3 = lazy(3);
console.log(lazy3(100));
console.log(lazy3(100));
console.log(lazy3(100));
console.timeEnd('#2');

