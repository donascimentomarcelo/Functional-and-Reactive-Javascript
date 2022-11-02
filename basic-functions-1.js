function goodMorning() {
    console.log('Good morning!')
}

function goodAfternoon() {
    console.log('Good afternoon!')
}

function execute(fn) {
    fn();
}

execute(goodMorning);
execute(goodAfternoon);

// Return a function from another function

function pow(base) {
    return function(exp) {
        return Math.pow(base, exp);
    }
}

const powerOfTwo = pow(2);
console.log(powerOfTwo(8));

//  or

const powerOfThree = pow(3)(4);
console.log(powerOfThree);