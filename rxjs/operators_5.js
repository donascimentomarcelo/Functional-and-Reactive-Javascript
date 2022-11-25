const { Observable, of } = require('rxjs');


function endWith(name) {
    return function (source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(v) {
                    subscriber.next(
                        v.filter(el => el.endsWith(name)));
                },
                complete() {
                    subscriber.complete();
                }
            })
        });
    }
}

of(['Ana Silva', 'Maria Silva', 'Pedro Rocha'])
    .pipe(endWith('Silva'))
    .subscribe(console.log);