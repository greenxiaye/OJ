/**
 * @param {string} s
 * @return {number}
 */
let s = "   fly me   to   the moon  "
var lengthOfLastWord = function (s) {
    let str = s.trim().split(/\s+/).reverse();
    return str[0].length
};
console.log(lengthOfLastWord(s))