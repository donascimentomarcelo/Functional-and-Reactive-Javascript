const { Observable, from } = require('rxjs');

function createPipeableOperator(operatorFn) {
    return function (source) {
        return Observable.create(subscriber => {
            const sub = operatorFn(subscriber);
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (e => subscriber.complete(e)),
            });
        });
    }
}

function first() {
    return createPipeableOperator(subscriber => ({
        next(value) {
            subscriber.next(value);
            subscriber.complete(value);
        }
    }));
}

function last() {
    let last;
    return createPipeableOperator(subscriber => ({
        next(value) {
            last = value;
        },
        complete() {
            if (last !== undefined)
                subscriber.next(last);
            subscriber.complete();
        }
    }));
}

from([1, 2, 3, 4, 5])
    .pipe(first())
    // .pipe(last())
    .subscribe(console.log);