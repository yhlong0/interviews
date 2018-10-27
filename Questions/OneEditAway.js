
function OneEditAway(str1, str2) {
    let diff = str1.length - str2.length;
    let count = 0;

    if (diff == 0) {
        for(let i = 0; i < str1.length; i++) {
            if(str1.charAt(i) != str2.charAt(i)) {
                count++;
            }
        }
        if(count > 1) {
            return false;
        }
        return true;
    }

    if (str2.length + 1 == str1.length ) {
        return oneEditInsert(str1, str2);
    }

    if (str1.length + 1 == str2.length) {
        return oneEditInsert(str2, str1);
    }

    if (diff > 1 || diff < -1) {
        return false;
    }
}

function oneEditInsert(long, short) {
    for(let i = 0; i < short.length; i++){
        long = long.replace(short.charAt(i), '');
    }
    if(long.length > 1){
        return false;
    }
    return true;
}




let str1 = 'av2b2c';
let str2 = 'avdbc';

console.log(OneEditAway(str1, str2));