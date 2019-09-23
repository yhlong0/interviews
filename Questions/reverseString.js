const reverseString = function(s) {
    helper(0, s)
};

const helper = (index, s) => {
    if(index > s.length / 2 - 1) {
        return 
    }
    helper(index + 1, s)
    let temp = s[index]
    s[index] = s[s.length - 1 - index]
    s[s.length - 1 - index] = temp
}
