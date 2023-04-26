/**
 * 
 * @param {String} s 
 */
function superReducedString(s) {
    
    let i = 0

    let a = s.replace(/[^\w\s]|(.)\1/gi, (s, m) => m[0])

    return a
}


superReducedString('aaabccddd')