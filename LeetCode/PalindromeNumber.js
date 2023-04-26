var isPalindrome = function(x) {
    let reverse = (x+'').split("").reverse().join("");

    return reverse == (x+'');
};

console.log(isPalindrome(-121))