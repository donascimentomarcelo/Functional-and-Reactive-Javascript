const { Observable, noop } = require('rxjs');

function between(min, max) {
    return new Observable(subscriber => {
        for (let i = min; i <= max; i++)
            subscriber.next(i);
        subscriber.complete();
    });
}

between(5, 10)
    .subscribe({
        next(value) { console.log(value) },
        noop,
        complete() { console.log('The End...') },
    })