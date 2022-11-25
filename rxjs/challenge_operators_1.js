const { Observable, from } = require('rxjs');

function createPipeableOperator(fnNext, fnComplete) {
    return function (source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(v) {
                    fnNext(subscriber, v);
                },
                complete() {
                    fnComplete(subscriber)
                }
            })
        });
    }
}

function first() {
    return createPipeableOperator((subscriber, v) => {
        subscriber.next(v);
        subscriber.complete(v);
    }, () => {})
}

function last() {
    let last;
    return createPipeableOperator(
        (_, v) => {
            last = v;
        },
        (subscriber) => {
            if (last !== undefined)
                subscriber.next(last);
            subscriber.complete();
        });
}

from([1, 2, 3, 4, 5])
    // .pipe(first())
    .pipe(last())
    .subscribe(console.log);