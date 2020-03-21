
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
        let row = matrix.map(e => e[i]).reverse();
        result.push(row);
    }
    return result;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));



