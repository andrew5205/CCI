
//  String Compression 

// Implement a method to perform basic string compression using the counts of repeted characters. 
// for example, the string "aabcccccaaa" would become a2b1c5a3

// If the compress string would not become smaller than orginal string, 
// yotr method should return the orginal string. 

// you can assume the string has only upper and lower cases. 


function stringCompression (str) {
    if ( str.length == 0) {
        console.log('Please enter valid string.');
        return;
    }
    var output = '';
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        count++;
        if (str[i] != str[i+1]) {
        output += str[i] + count;
        count = 0;
        }
    }
    return ( output.length > str.length)? str: output;
}

console.log(stringCompression("abcde"));    // abcde
console.log(stringCompression("aabccc"));    // a2b1c3
console.log(stringCompression("aaabbbaaabbbassss"));    // a3b3a3b3a1s4