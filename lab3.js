//intelpolation
// find all y, x Є [0,2]
function calcAllX(range){
    let arrayOfX = [];
    for(let i = 0; i < range; i+=0.2){
        arrayOfX.push(i)
    }
    return arrayOfX
}
const rangeX = calcAllX(2);

function realFx(x) {
    return 1/(0.5 + (x**2));
}
function calcAllY(arrayOfX){
    let arrayOfY = [];
    let newY;
    for(let x = 0; x<arrayOfX.length; x++){
        newY = 1/(0.5 + (arrayOfX[x]**2))
        arrayOfY.push(newY)
    }
    return arrayOfY
}
console.log("All y: ", calcAllY(rangeX))
const rangeY = calcAllY(rangeX);

//Lagrange's intelpolation formula
// for one number in a chain (we need all)
function passIndex(index){
    return index
}
function interpolation(xPoint, xArray, yArray, passIndex){
    let numerator = 1, denominator = 1;
    for (let indexX = 0; indexX < xArray.length; indexX++){ // з кожним кроком пропускати ітерацію теперішнього числа
       if(passIndex === indexX) {
       }else{
           numerator*=xPoint-xArray[indexX];}
    }
    for (let indexX = 0; indexX < xArray.length; indexX++){
        if(indexX !== passIndex){
            denominator*= xArray[passIndex] - xArray[indexX]
        }
    }
    return yArray[passIndex] * (numerator/denominator)
}
function fx(x) {
    const quantityOfCalls = rangeX.length;
    let totalSum = 0;
    for (let funcCall = 0; funcCall < quantityOfCalls; funcCall++){
        let add = interpolation(x, rangeX, rangeY, passIndex(funcCall));
        totalSum += add;
    }
    return totalSum
}
console.log("point y0: ", interpolation(0, rangeX, rangeY, passIndex(0)));
console.log("point y1: ", interpolation(0, rangeX, rangeY, passIndex(1)));
console.log("point y(0): ", fx(0))
console.log("point y(1): ", fx(0.2))
console.log("point y(1): ", fx(0.4))
console.log("point y(1): ", fx(0.6))
// and so on...
//оцінка похибки
function compareResults(){
    let allInterpolarY = [];
    for (let num = 0; num < rangeX.length; num++){
        console.log(`y(${rangeX[num]})=${fx(rangeX[num])}, real value: ${rangeY[num]}`)
        allInterpolarY.push(rangeY[num] - fx(rangeX[num]));
    }
    return allInterpolarY
}
console.log("difference: ", compareResults(rangeY, rangeX))
console.log(`y(0.3)=${fx(0.3)}, real value: ${realFx(0.3)}, diff: ${realFx(0.3)-fx(0.3)}`)
