const { Observable, from } = require('rxjs');


function first() {
    return function (source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(v) {
                    subscriber.next(v);
                    subscriber.complete(v);
                }
            })
        });
    }
}

function last() {
    return function (source) {
        return Observable.create(subscriber => {
            let last;
            source.subscribe({
                next(v) {
                    last = v;
                },
                complete() {
                    if (last !== undefined)
                        subscriber.next(last);
                    subscriber.complete();
                }
            })
        });
    }
}

from([1, 2, 3, 4, 5])
    // .pipe(first())
    .pipe(last())
    .subscribe(console.log);