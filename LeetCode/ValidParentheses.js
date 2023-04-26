/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let removing = true
    let prevL = s.length
    while(removing) {

        s = s.replace('()', '')
        s = s.replace('{}', '')
        s = s.replace('[]', '')

        if(s.length == prevL)
            removing = false
        else 
            prevL = s.length
    }
    
    return prevL == 0
};

console.log(isValid('((((((((((((()))))))))))))'));