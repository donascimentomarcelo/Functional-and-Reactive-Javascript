const { timer, Subject } = require('rxjs');

const obs = timer(3000, 500);

const sub1 = obs.subscribe(num => console.log(`#1 Number ${num}`));
const sub2 = obs.subscribe(num => console.log(`#2 Number ${num}`));

sub1.add(sub2);

setTimeout(() => {
    sub1.unsubscribe();
    // sub2.unsubscribe();
}, 5000);