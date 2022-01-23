// 自己随心排序 非答案
let input = "aaddccdc"
function cmp(a, b) {
    let regNum = /\d/
    let regWord = /[a-zA-Z]/
    if (regNum.test(a) && regWord.test(b)) {
        // return 1
        return b.charCodeAt(0) - String(a).charCodeAt(0)
    }
    if (regNum.test(b) && regWord.test(a)) {
        console.log(1234, a, b)
        //b为数字
        // 数字的charCodeAt小于字母
        // return -1
        return String(b).charCodeAt(0) - a.charCodeAt(0)
    }
    if (regNum.test(a) && regNum.test(b)) {
        return a - b
    }
    if (regWord.test(a) && regWord.test(b)) {
        return b.charCodeAt(0) - a.charCodeAt(0)
    }
}
function solve(input) {
    let arr = Array.from(new Set(input.split("")))
    console.log(arr.sort(cmp).join(""))
}
solve(input)

// 描述
// 输入一个只包含小写英文字母和数字的字符串，按照不同字符统计个数由多到少输出统计结果，如果统计的个数相同，则按照ASCII码由小到大排序输出。
// 本题含有多组样例输入
// 数据范围：字符串长度满足

// 输入描述：
// 一个只包含小写英文字母和数字的字符串。

// 输出描述：
// 一个字符串，为不同字母出现次数的降序表示。若出现次数相同，则按ASCII码的升序输出。