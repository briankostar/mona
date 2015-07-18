// Question 2
// Write a JavaScript function that orders two version strings. A version string contains a period-
// separated list of numbers or strings.

// For example, "1.3.0", "2.2.0.2" or "1.13.a".

//TO RUN: Copy all content here, go to http://repl.it/languages/JavaScript, paste it, then run it to see results on the online console.

//This function takes two period-seperated numbers or strings and returns them in Ascending order
function versionCompare(versionOne, versionTwo) {
    var difference;
    var order = [];

    a = versionOne.split('.');
    b = versionTwo.split('.');
    var length = Math.min(a.length, b.length);
    var stringDifference = 0;

    //Compare each 'dot' separated sections of the string for difference
    for (var i = 0; i < length; i++) {
        stringDifference = compareString(a[i], b[i]);
        if (stringDifference !== 0) {
            break;
        }
    }
    //If no difference found, compare by length. ie. 1.2.3 vs 1.2
    if (stringDifference === 0) {
        stringDifference = checkLength(a.length, b.length);
    }

    if (stringDifference > 0) {
        order.push(versionTwo, versionOne);
    } else {
        order.push(versionOne, versionTwo);
    }

    return order;
}

// //return -1 if b is greater, 0 if same, 1 if a is greater
var compareString = function(first, second) {
    //Compare digits only
    var regex = /\D/g;
    var a = first.replace(regex, '');
    var b = second.replace(regex, '');
    var aStringLength = a.length;
    var bStringLength = b.length;
    var stringLength = Math.min(aStringLength, bStringLength);
    //Compare string length. Longer is assumed to be later version. ei. 121 vs 21
    var lengthDifference = aStringLength - bStringLength;
    var difference = 0;
    //Compare each character if both string length are equal.
    if (lengthDifference === 0) {
        for (j = 0; j < stringLength; j++) {
            difference = compareChar(a[j], b[j]);
            if (difference !== 0) {
                break;
            }
        }
    } else {
        //Again. Longer is assumed to be later version. ei. 121 vs 21
        difference = checkLength(aStringLength, bStringLength);
    }
    //If still no difference, compare via alphabet
    if (difference === 0) {
        if (first.match(/[a-z]/i) || second.match(/[a-z]/i)) {
            alphaA = first.replace(/[0-9]/g, '');
            alphaB = second.replace(/[0-9]/g, '');
            // console.log('alpha', alphaA, alphaB)
            if(alphaA > alphaB){
                difference = 1;
            }else{
                difference = -1;
            }
        }
    }

    return difference;
};

//return - if b is greater, 0 if same, + if a is greater
var compareChar = function(a, b) {
    var difference = parseInt(a, 10) - parseInt(b, 10);
    if (difference !== 0) {
        return difference;
    } else {
        return 0;
    }
};

//return - if b is greater, 0 if same, + if a is greater
var checkLength = function(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
};

console.log(versionCompare('1.0', '1'));
console.log(versionCompare('0.0.1', '0.0.2'));
console.log(versionCompare('1.2', '1.2.3'));
console.log(versionCompare('2a.2.4.5', '2b.3.1.5'));
console.log(versionCompare('2.6.g.1.s1', '4.6.a.1'));
console.log(versionCompare('1.4.7b.a.2', '1.4.7.2.a'));
console.log(versionCompare('1.4a', '1.4.5'));
console.log(versionCompare('1.4', '1a.4'));
console.log(versionCompare('121.1', '21a.2.1a'));
console.log(versionCompare('a.b1', 'b.c.e'));


//Possible Improvements:
//Handle non alphanumeric values
//Compare multiple arguments or take in array
//Handle cases such as 'ab21.1.a' vs '21ab.1', when alphabet is first


