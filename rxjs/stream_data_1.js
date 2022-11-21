function generateNumbers() {
    return {
        start(fn, time = 1000) {
            let num = 0;
            const interval = setInterval(() => {
                fn(num++);
            }, time);

            return {
                stop() {
                    clearInterval(interval);
                }
            }
        }
    }
}

const temp1 = generateNumbers();
const exec1 = temp1.start(num => {
    console.log(`#1 ${num * 2}`);
});

const temp2 = generateNumbers();
const exec2 = temp2.start(num => {
    console.log(`#1 ${num + 100}`);
}, 2000);

setInterval(() => {
    exec1.stop();
    exec2.stop();
}, 10000);