/*
*Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
*bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

function RotateMatrix(matrix) {
    let temp = [];





    for(let i = 0; i < matrix.length; i++) {
        temp.push(matrix[0][i]) 
        console.log(matrix[0][i]);
    }

    for(let i = matrix.length - 1; i > 0; i--) {
        matrix[0][i] = matrix[i][0];
        console.log(matrix[0][i]);
    }
    

    return matrix
}

1,2
let m1 = [
    [1, 3],
    [3, 4]
];


let m2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


console.log(RotateMatrix(m1));