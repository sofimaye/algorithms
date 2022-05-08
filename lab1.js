// linear algorithm
function factorial(finalNum) {
    let result = 1;
    for (let i = 1; i <= finalNum; i++) {
        result *= i;
    }
    return result
}

function linear(a, c) {
    return (a * a - c * c) / 7 + factorial(a) / (factorial(c) * factorial(a - c))
}

console.log("the result of linear algorithm: ", linear(3, 2))

//branched algorithm
function branchedAlgorithm(x, c, b, k) {
    if (x > 0) {
        return k * (x ** 2) + c * x + b
    } else {
        return b * (x ** 2) + c * x + k
    }
}

console.log("branched algorithm with x: ", branchedAlgorithm(2, 1, 3, 5))
console.log("branched algorithm with -x: ", branchedAlgorithm(-2, 1, 3, 5))

//cyclic algorithm function in function
function cyclicAlgorithm(a) {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        let product = 1;
        for (let j = 0; j < a.length; j++) {
            product *= (a[i] + a[j] ** 2);
        }
        result += product
    }
    return result
}

console.log("Cyclic algorithm: ", cyclicAlgorithm([8, 2, 3]))


