
// Rotate Matrix 

// Given an image represented by an N x N SVGFEColorMatrixElement, 
// where each pixel is represented by an integer, 
// write a method to relocate the image  by 90 degrees, 
// Can you do this in one place?



// The Nth row in the result is the Nth column in the input.

// using .map on the input and getting the right value from each row will give you the new row 
// (have to reverse it too).

// var row = matrix.map(function(e) {
//     return e[i]
// }).reverse();



function rotate(matrix) {
    let result = [];
    for(let i = 0; i < matrix[0].length; i++) {
        let row = matrix.map(e => e[i]).reverse();      // gather all i-th element of each column, and then reverse it 
        result.push(row);
    }
    return result;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));     //[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]

console.log(rotate([[1,2,3,4],[5,6,7,8],[9,10,11,12], [13,14,15,16]]));     
// [
//     [ 13, 9, 5, 1 ],
//     [ 14, 10, 6, 2 ],
//     [ 15, 11, 7, 3 ],
//     [ 16, 12, 8, 4 ]
// ]



// // ****************************************************************************************************** //
// function rotate2(matrix) {
//     let result = [];
//     for(let i = 0; i < matrix[0].length; i++) {
//         let row = matrix.map(e => e[i]);      // gather all i-th element of each column 
//         result.push(row);
//     }
//     return result;
// };

// console.log(rotate2([[1,2,3],[4,5,6],[7,8,9]]));        // [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]


// let row = matrix.map(e => e[i]);
// matrix = 
// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// .map( (e) => { return e[i]} );

// map into each matrix element(array), 
// and return each i-th element, compose as a new array 
// and then store into a variable called row 

// e[0] = [1,4,7];
// e[1] = [2,5,8];
// e[2] = [3,6,9];



// result.push(row);

// result = 
// [ e[0], e[1], e[2]]

// => 

// [
//     [1,4,7],
//     [2,5,8],
//     [3,6,9]
// ]




