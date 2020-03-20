
// One Away 

// there are three types of edits that can be performed on strings: 
// insert a character. remove a character , or replace a character. 

// Given two string, write a function to check if they are one edit ( or zero edits) away. 


function oneAway( str1, str2) {
    var dict = {};
    var arr1 = str1.toLowerCase().split('').sort().join('');
    var arr2 = str2.toLowerCase().split('').sort().join('');

    for ( var i = 0; i < arr1.length; i++) {
        if ( dict[arr1[i]]) {
            dict[arr1[i]]++;
        } else {
            dict[arr1[i]] = 1;
        }
    }

    for ( var j = 0; j < arr2.length; j++) {
        if ( dict[arr2[j]]) {
            dict[arr2[j]]--;
        } else {
            dict[arr2[j]] = 1;
        }
    }

    var count = 0;
    for ( k in dict) {
        count += dict[k];
    }

    if ( count > 2) {
        return false;
    } else {
        return true;
    }
}

console.log("str1 <= str2");
console.log(oneAway('abc', 'abc')); // true
console.log(oneAway('abc', 'abcd')); // true
console.log(oneAway('abc', 'abcde')); // false
console.log("*******************************");
console.log("str1 > str2");
console.log(oneAway('abcd', 'abc')); // true
console.log(oneAway('abcde', 'abc')); // false
console.log("*******************************");
console.log(oneAway("pale", "pal"));    // true
console.log(oneAway("pales", "pale"));    // true
console.log(oneAway('pale', 'bale'));   // true 
console.log(oneAway("pale", "bake"));   // false
