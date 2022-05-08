//розв'язання лінійних алгебраїчних рівнянь
// для матриці 4*4
// type of data array of arrays
function matrix1(matrix){
    const m2 = matrix[1][0]/matrix[0][0];
    const m3 = matrix[2][0]/matrix[0][0];
    for(let coefficient = 0; coefficient < matrix.length; coefficient++){
        matrix[1][coefficient] = matrix[1][coefficient] - (matrix[0][coefficient]*m2);
        matrix[2][coefficient] = matrix[2][coefficient] - (matrix[0][coefficient]*m3);
    }
    const m4 = matrix[2][1]/matrix[1][1];
    for(let coefficient = 0; coefficient < matrix.length; coefficient++){
        matrix[2][coefficient] = matrix[2][coefficient] - (matrix[1][coefficient]*m4);
    }
    const x3 = matrix[2][3]/matrix[2][2];
    const x2 = (matrix[1][3]-(matrix[1][2]*x3))/matrix[1][1];
    const x1 = (matrix[0][3]-(matrix[0][1]*x2+matrix[0][2]*x3))/matrix[0][0];
    console.log("x1: ", x1, "x2: ", x2,"x3: ", x3)
    return matrix

}
console.log("Changed Matrix: ",matrix1([[7.09, 1.17, -2.23, -4.75], [0.43, 1.4, -0.62, -1.05], [3.21, -4.25, 2.13, -5.06]]))
