function checkPermutation(str1, str2) {
    if(str1.length != str2.length) {
        return false;
    }

    str1 = str1.split('');
    str2 = str2.split('');

    let sorted1 = str1.sort();
    let sorted2 = str2.sort();

    console.log(sorted1);
    console.log(sorted2);

    for(let i = 0; i < sorted1.length; i++){
        if(sorted1[i] != sorted2[i]) {
            return false;
        }
    }

    return true;
}

console.log(checkPermutation('A1bc ', ' cb1a'));