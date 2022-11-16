// Recursividade 
function sumArray(array, total = 0) {
    if (array.length === 0)
        return total;
    return sumArray(array.slice(1), total + array[0]);
}

const nums = [9,6,5,3,2,1];
const total = sumArray(nums);
console.log(total);