const { interval } = require('rxjs');

const generateNumbers = interval(500);

const sub1 =
    generateNumbers
        .subscribe(num => console.log(Math.pow(2, num)));


setTimeout(() => sub1.unsubscribe(), 8000);