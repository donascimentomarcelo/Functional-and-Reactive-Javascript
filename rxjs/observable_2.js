const { Observable } = require('rxjs');

const obs = new Observable(subscriber => {
    subscriber.next('Observer is cool');

    if (Math.random() > 0.5)
        subscriber.complete();
    else
        subscriber.error('WTF')
});

// obs.subscribe(
//     value => console.log(value),
//     error => console.log(`Error: ${error}`),
//     () => console.log('The End...')
// );

obs.subscribe({
    next(value) { console.log(value) },
    error(error) { console.log(`Error: ${error}`) },
    complete() { console.log('The End...') },
})