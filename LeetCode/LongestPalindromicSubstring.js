/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//   const isPalidrome = (s) => {
//     let strReverse = s.split("").reverse().join("");

//     return s == strReverse;
//   };

//   let longest = "";
//   let longestL = 0;

//   if (s.length == 1) return s;

//   for (let i = 0; i < s.length - 1; i++) {
//     let subString = "";
//     for (let j = i; j < s.length; j++) {
//       subString += s[j];

//       if (isPalidrome(subString)) {
//         if (longestL < subString.length) {
//           longest = subString;
//           longestL = subString.length;
//         }
//       }
//     }
//   }

//   return longest;
// };
var longestPalindrome = function (s) {
 
};

console.log(longestPalindrome("babad"));
