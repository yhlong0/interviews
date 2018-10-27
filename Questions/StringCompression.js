/*
* Giving string aabccccdd convert to a2b1c4d2
*/

function StringCompression(str) {
    let counter = 1;
    let compressedStr = '';
    let temp = str.charAt(0);

    if(str.length == 1) {
        return false;
    }

    for(let i = 1; i< str.length; i++){
        if(temp == str.charAt(i)){
            counter++;
        } else {
            compressedStr = compressedStr + temp + counter;
            counter = 1;
            temp = str.charAt(i);
        }
    }

    if (compressedStr.length < str.length) {
        return compressedStr;
    }

    return false;
}

str1 = 'aabccccdd';

console.log(StringCompression(str1));