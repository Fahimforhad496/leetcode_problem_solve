// Basic factorial

function factorial(number, memo = 1) {
    if (number === 1) {
        return 1;
    }
    return memo * factorial(number - 1);
}

console.log(factorial(6));
