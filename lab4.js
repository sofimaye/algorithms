//наш ймовірний проміжок співпадіння від 1 до 5 по осі x тому підставляємо по черзі
// значення у функцію щоб розрахувати всі точки
// рівняння повинно = 0 при правильному значенні y дорівнювати 0.
function findPoint(x){
    return 10*Math.atan(5-x)-1;
}
// console.log(findPoint(1))
function rangeX(range){
    let arrayWithNearestPointsX = [];
    for (let num=0; num<range; num+=0.001){
        let y = 10*Math.atan(5-num)-1;
        if (y <= 0.05 && y >= 0){
            // console.log("Найближча точка x: ", `${num}`,"Найближча y:", y)
            arrayWithNearestPointsX.push(num)
        }
    }
    return arrayWithNearestPointsX
}
console.log("X: ", rangeX( 5))
let rangeOfX = rangeX(5)


function rangeY(range){
    let arrayWithNearestPointsY = [];
    for (let num=0; num<range; num+=0.001){
        let y = 10*Math.atan(5-num)-1;
        if (y <= 0.05 && y >= 0){
            // console.log("Найближча точка x: ", `${num}`,"Найближча y:", y)
            arrayWithNearestPointsY.push(y)
        }
    }
    return arrayWithNearestPointsY

}
let rangeOfY = rangeY(5)
console.log("Y: ", rangeOfY)

//обчислюємо точки перетину до осі x за допомогою функції,треба підставити всі знайдені x
//так як проінтегрована функція f(x)=-1, отримуємо
function calcXApproximate(arrayOfX){
    let prevX;
    let newArrayXForApproxPoints = [];
    for(let indexX = 0; indexX < arrayOfX.length; indexX++){
       if(indexX === 0){
           prevX = arrayOfX[0] - ((10*Math.atan(5-arrayOfX[0])-1)/-1);
           newArrayXForApproxPoints.push(prevX);
       }else if (prevX !== undefined){
           prevX = arrayOfX[indexX];
           newArrayXForApproxPoints.push(prevX - ((10*Math.atan(5-prevX)-1)/-1));

       }
    }
    return newArrayXForApproxPoints
}
//дотичні поступово наближаються до 0 значення
console.log("Approximate x: ", calcXApproximate(rangeOfX))
let findYForApproxX = calcXApproximate(rangeOfX)

function rangeApproxY(arrayApprY){
    let arrayWithNearestPointsY = [];
    for (let num=0; num<arrayApprY.length; num++){
        let y = 10*Math.atan(5-arrayApprY[num])-1;
            arrayWithNearestPointsY.push(y)
    }
    return arrayWithNearestPointsY
}

console.log("Approximate y: ", rangeApproxY(findYForApproxX))











