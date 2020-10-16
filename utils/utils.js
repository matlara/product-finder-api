
function mergeArrays(...arrays) {
    let jointArray = []
  
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });
    return Array.from(new Set([...jointArray]))
}

function palindrome(str) {
    if(str.length > 2) {
        var re = /[\W_]/g;
        var lowRegStr = String(str).toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join(''); 
        return reverseStr === lowRegStr;
    }
    else {
        return false;
    }
}

function fiftyPercent(number) {
    return number * 0.5;
}

module.exports = { mergeArrays, palindrome, fiftyPercent };