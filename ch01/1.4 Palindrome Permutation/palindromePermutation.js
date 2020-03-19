
//  Palidrome Permutation 

// Given a string, write a function to check if it is a permutation of a palindrome. 

// A palindrome is a word or phrase that is the smae forwards and backwords. 

// A permutation is a rearrange of letters.

// the palindrome does not need to just dictionary words. you can ignore casing and non-letter characters. 

function palindromePermutaton(str) {
    var dict = {};
    var count = 0;
    var strToArr = str.toLowerCase().replace(/[\W_]/g, "").split('');
    for ( var i = 0; i < strToArr.length; i++) {
        if ( !dict[strToArr[i]] ) {
            dict[strToArr[i]] = 1;
        } else {
            dict[strToArr[i]] = 0;
        }
    }
    for ( k in dict) {
        count += dict[k];
    }
    return count <= 1? true: false;
}

console.log(palindromePermutaton("Taco Cat"));      // true 
console.log(palindromePermutaton("Taco Cot "));      // true 
console.log(palindromePermutaton("Taco Boa"));      // false 


/* ************************************************************************************************************************ */
// function palidrome(str) {
//     var newStr = str.toLowerCase().replace(/[\W_]/g, "");
//     for ( var i = 0; i < newStr.length/2; i++) {
//         if ( newStr[i] !== newStr[newStr.length -1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(palidrome("Taco Cat"));     // true 
// console.log(palidrome("Tact ba"));      // false 



