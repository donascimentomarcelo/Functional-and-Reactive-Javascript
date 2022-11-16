function order(array) {
    // [...array] cria um clone e mantem o array original
    return [...array].sort();
}

const nums = [9,6,5,3,2,1];
const orderdNums = order(nums);
console.log(nums, orderdNums);