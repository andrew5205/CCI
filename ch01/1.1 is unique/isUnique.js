// is unique 

// implement an algorithm to determine is a string has all unique characters.
// What is you can not use additional data structure? 


function isUnique(str) {
    var dict = {};
    for ( var i = 0; i <str.length; i++) {
        if (dict[str[i]]) {
            return false;
        } else {
            dict[str[i]] = true;
        }
    }
    return true;
}


console.log(isUnique('44'));    // false
console.log(isUnique('117'));   // false
console.log(isUnique('132'));   // true

console.log(isUnique('abc'));   // true
console.log(isUnique('aa'));    // false 
console.log(isUnique('abcab'));    // false 



