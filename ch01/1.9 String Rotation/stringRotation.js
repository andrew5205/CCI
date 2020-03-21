
//  String Rotation 

// Assume you have a method called isSubstring which checks if one word is a substring of another. 
// Given two stringCompression, s1 s2, write code to check if s2 is a rotation of s1 using one call to isSubstring.

// "waterbottle" is a rotation of "erbottlewat"


function isRotation(str1, str2) {

    if ( str1.length != str2.length) {
        return false;
    }
    
    return (str2 + str2).includes(str1); 
}

console.log(isRotation("waterbottle", "erbottlewat"));      // true
console.log(isRotation("waterbottle", "erbottlewata"));     // false 
console.log(isRotation("WATERbottle", "erboTTlewat"));      // false 

// ********************************************************************* // 

// regardless case sensitive 
function strRotation(str1, str2) {

    if ( str1.length != str2.length) {
        return false;
    }

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    return (str2 + str2).includes(str1); 
}

console.log(strRotation("waterbottle", "erbottlewat"));      // true
console.log(strRotation("waterbottle", "erbottlewata"));     // false 
console.log(strRotation("WATERbottle", "erboTTlewat"));      // true 