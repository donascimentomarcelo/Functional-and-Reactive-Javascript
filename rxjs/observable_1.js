const { Observable } = require('rxjs');

const promise = new Promise(resolve => {
    resolve('Promise is cool');
});

promise.then(console.log);

// ----------------------------

const obs = new Observable(subscriber => {
    subscriber.next('Observer');
    subscriber.next('is');
    subscriber.next('cool');
});

obs.subscribe(console.log);