// lab2
// написати програму сортування масиву данних
// (у програмі передбачити вимірювання часу сортування з максимальною точністю)
// побудувати графік залежності часу виконання алгоритму від розміру вхідного масиву даних
//побудувати графік теоретично відомої обчислювальної складності
const { performance } = require('perf_hooks');
//fast sorting
//recursive method of realization
function recursion(array) {
    if (array.length <= 1) return array
    const leftSide = [];
    const rightSide = [];
    const middle = [];
    const indexOfMiddleNumber = Math.floor(array.length / 2);
    const middleNum = array[indexOfMiddleNumber];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < middleNum) {
            leftSide.push(array[i]);
        } else if (array[i] > middleNum) {
            rightSide.push(array[i]);
        } else {
            middle.push(array[i])
        }
    }
    return recursion(leftSide).concat(middle).concat(recursion(rightSide))
}

// create a function which makes random arrays
function randomArray(num){
    let newArr = [];
    for(let i =0; i<=num; i++){
       newArr.push(Math.floor(Math.random() * num))
    }
    return newArr
}
console.log("Random array: ", randomArray(20))
console.log("Random array: ", randomArray(10))

// create a cycle for warm up the function before testing
function warmUp(times){
    for(let i=0; i <= times; i++){
        recursion(randomArray(20))
    }
    console.log(`warmed ${times}`)
}

warmUp(20)

const start = performance.now();
console.log(recursion(randomArray(10)))
console.log("Duration: ", performance.now() - start)

const secondStart = performance.now();
console.log(recursion(randomArray(15)))
console.log("Duration array №2: ", performance.now()-secondStart)

const thirdStart = performance.now();
console.log(recursion(randomArray(20)))
console.log('Duration array №3: ', performance.now()-thirdStart)

const start4 = performance.now();
console.log(recursion(randomArray(20)))
console.log('Duration array №4: ', performance.now()-start4)

const start5 = performance.now();
console.log(recursion(randomArray(20)))
console.log('Duration array №5: ', performance.now()-start5)




