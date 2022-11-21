function generateElements(array) {
    return {
        start(fn) {
            let index = 0;
            const interval = setInterval(() => {
                if (index >= array.length) {
                    clearInterval(interval);
                } else {
                    fn(array[index]);
                    index++
                }
            }, 1000);

            return {
                stop() {
                    clearInterval(interval);
                }
            }
        }
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const temp1 = generateElements(nums);

const exec1 = temp1.start(num => {
    console.log(Math.pow(2, num));
});

setInterval(() => {
    exec1.stop();
}, 4000);

generateElements(['Ana', 'Bia', 'Carlos'])
    .start(console.log)