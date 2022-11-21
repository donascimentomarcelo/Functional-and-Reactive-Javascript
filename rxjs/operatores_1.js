// Operadores de criação
const { of } = require('rxjs');

// Operadores Encadeaveis (Pipe)
const { last, first, map } = require('rxjs/operators');

of(1, 2, 'Ana', false, 'Last')
    .pipe(
        last(),
        map(value => value[0]),
        map(value => `The letter found was: ${value}`))
    .subscribe(value => console.log(value));

of(1, 2, 'Ana', false, 'Last')
    .pipe(first())
    .subscribe(value => console.log(`The value is: ${value}`));