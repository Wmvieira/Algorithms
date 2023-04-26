/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    const convert = new Map();

    convert.set('I', 1);
    convert.set('V', 5);
    convert.set('X', 10);
    convert.set('L', 50);
    convert.set('C', 100);
    convert.set('D', 500);
    convert.set('M', 1000);

    convert.set('IV', 4);
    convert.set('IX', 9);
    convert.set('XL', 40);
    convert.set('XC', 90);
    convert.set('CD', 400);
    convert.set('CM', 900);

    let result = 0;

    for(let i = 0; i < s.length; i++) {

        if(i+1 < s.length && convert.has(s.substring(i, i+2))) {
            result += convert.get(s.substring(i, i+2)); 
            i++;
        } else {
            result += convert.get(s[i]);
        }

    }

    return result;
};


console.log(romanToInt('MCMXCIV'));
