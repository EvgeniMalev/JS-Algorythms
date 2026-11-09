
let A = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];


let B = [
    [2, 4, 5],
    [5, 10, 6],
    [7, 8, 9]
];

let C = [];


for (let i = 0; i < A.length; i++) {
    C[i] = [];

    for (let j = 0; j < A[i].length; j++) {

        if (B[i][j] !== 0) {
            C[i][j] = A[i][j] / B[i][j];
        } else {
            console.log("Division by zero!");
            C[i][j] = null;
        }
    }
}

console.log("Result matrix:");

for (let i = 0; i < C.length; i++) {
    console.log(C[i]);
}
