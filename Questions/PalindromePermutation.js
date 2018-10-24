function checkPP(str){
    var array = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0
    ];

    

    for (let i = 0; i < str.length; i++) {
        let key = str.charAt(i);
        debugger;
        switch (key) {
            case 'a':
                if(array[0] == 1) {
                    array[0] = 0;
                } else {
                    array[0] = 1;
                }
                break;       
            case 'b':
                if(array[1] == 1) {
                    array[1] = 0;
                } else {
                    array[1] = 1;
                }
                break;
            case 'c':
                if(array[2] == 1) {
                    array[2] = 0;
                } else {
                    array[2] = 1;
                } 
                break;        
            case 'd':
                if(array[3] == 1) {
                    array[3] = 0;
                } else {
                    array[3] = 1;
                }
                break;
            case 'e':
                if(array[4] == 1) {
                    array[4] = 0;
                } else {
                    array[4] = 1;
                }
                break;
            case 'f':
                if(array[5] == 1) {
                    array[5] = 0;
                } else {
                    array[5] = 1;
                }
                break;
            case 'g':
                if(array[6] == 1) {
                    array[6] = 0;
                } else {
                    array[6] = 1;
                }
                break;
            case 'h':
                if(array[7] == 1) {
                    array[7] = 0;
                } else {
                    array[7] = 1;
                }
                break;
            case 'i':
                if(array[8] == 1) {
                    array[8] = 0;
                } else {
                    array[8] = 1;
                }
                break;
            case 'j':
                if(array[9] == 1) {
                    array[9] = 0;
                } else {
                    array[9] = 1;
                }
                break;
            case 'k':
                if(array[10] == 1) {
                    array[10] = 0;
                } else {
                    array[10] = 1;
                }
                break;
            case 'l':
                if(array[11] == 1) {
                    array[11] = 0;
                } else {
                    array[11] = 1;
                }
                break;
            case 'm':
                if(array[12] == 1) {
                    array[12] = 0;
                } else {
                    array[12] = 1;
                }
                break;
            case 'n':
                if(array[13] == 1) {
                    array[13] = 0;
                } else {
                    array[13] = 1;
                }
                break;
            case 'o':
                if(array[14] == 1) {
                    array[14] = 0;
                } else {
                    array[14] = 1;
                }
                break;
            case 'p':
                if(array[15] == 1) {
                    array[15] = 0;
                } else {
                    array[15] = 1;
                }
                break;
            case 'q':
                if(array[16] == 1) {
                    array[16] = 0;
                } else {
                    array[16] = 1;
                }
                break;
            case 'r':
                if(array[17] == 1) {
                    array[17] = 0;
                } else {
                    array[17] = 1;
                }
                break;
            case 's':
                if(array[18] == 1) {
                    array[18] = 0;
                } else {
                    array[18] = 1;
                }
                break;
            case 't':
                if(array[19] == 1) {
                    array[19] = 0;
                } else {
                    array[19] = 1;
                }
                break;
            case 'u':
                if(array[20] == 1) {
                    array[20] = 0;
                } else {
                    array[20] = 1;
                }
                break;
            case 'v':
                if(array[21] == 1) {
                    array[21] = 0;
                } else {
                    array[21] = 1;
                }
                break;
            case 'w':
                if(array[22] == 1) {
                    array[22] = 0;
                } else {
                    array[22] = 1;
                }
                break;
            case 'x':
                if(array[23] == 1) {
                    array[23] = 0;
                } else {
                    array[23] = 1;
                }
                break;
            case 'y':
                if(array[24] == 1) {
                    array[24] = 0;
                } else {
                    array[24] = 1;
                }
                break;
            case 'z':
                if(array[25] == 1) {
                    array[25] = 0;
                } else {
                    array[25] = 1;
                }
                break;
            default:
                break;
        }
    }

    console.log(array);
    let count = 0
    for(let i = 0; i < array.length; i++) {
        if(array[i] == 1) {
            count++;
        }
    }

    if (count > 1) {
        return false;
    } 
    
    return true;
}

console.log(checkPP('aoa'));

