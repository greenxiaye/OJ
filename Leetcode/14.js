/**
 * @param {string[]} strs
 * @return {string}
 */
let strs = ["flower", "flow", "flight", "flower"]

var cmp = function (a, b) {
    if (a.length != b.length) {
        return a.length - b.length
    }
}
var longestCommonPrefix = function (strs) {
    strs.sort()
    strs.sort(cmp)
    let ans = ""
    let arr = strs[0].split("")
    for (let i = 0; i < arr.length; i++) {
        if (strs.every(str => str.startsWith(ans + arr[i]))) {
            console.log(123)
            ans = ans + arr[i]
        } else {
            break
        }
    }
    return ans
};
console.log(longestCommonPrefix(strs))
