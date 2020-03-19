
//  Check Permutation 

// Given two String, write a method to decide if one is a permutation of the other 

function checkPermutation(str1, str2) {
    if ( str1.length !== str2.length) {
        return false;
    } else {
        str1 = str1.split('').sort().join('');
        str2 = str2.split('').sort().join('');
    }
    return str1 == str2 ? true : false ;
}

console.log(checkPermutation("aba", "aab"));        // true 
console.log(checkPermutation("aba", "aaab"));      // false 
console.log(checkPermutation("aba", "aa"));       // false 

