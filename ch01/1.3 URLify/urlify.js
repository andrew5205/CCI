
// URLify

// Write a method to replace all spaces in a string wit "%20" 
// you may use assume that the string has sufficient space at the end to hold the additional characters, 
// and that you are given a true length of the string 


// charCodeAt

function urlify(str) {
    var strToArr = str.trim().split('');
    for ( var i = 0; i < str.length; i++) {
        if ( strToArr[i] == " ") {
            strToArr[i] = "%20";
        }
        str = strToArr.join('');
    }
    return str;
}

console.log(urlify("H E L L O"));                  // H%20E%20L%20L%20O
console.log(urlify(" Have A Nice Day !! "))        // Have%20A%20Nice%20Day%20!!

