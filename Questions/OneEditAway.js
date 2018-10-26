
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

    if (diff > -2 && diff < 2 ) {
        if(str1.length > str2.length) {
            for(let i = 0; i < str2.length; i++){
                str1 = str1.replace(str2.charAt(i), '');
            }
            if(str1.length > 1){
                return false;
            }
            return true;
        } else {
            for(let i = 0; i < str1.length; i++){
                str2 = str2.replace(str1.charAt(i), '');
            }
            if(str2.length > 1){
                return false;
            }
            return true;
        }
    }

    if (diff > 1 || diff < -1) {
        return false;
    }
}




let str1 = 'avbc';
let str2 = 'avdbc';

console.log(OneEditAway(str1, str2));