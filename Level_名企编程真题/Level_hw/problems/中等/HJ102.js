let input = "1b1bbbbbbbbb"
let obj = new Object()
function cmp(a, b) {
    if (obj[b] === obj[a]) {
        //按ASCII码的升序输出
        return String(a).charCodeAt(0) - String(b).charCodeAt(0)
    }
    return obj[b] - obj[a]

}
function solve(input) {
    for (let i = 0; i < input.length; i++) {
        if (obj.hasOwnProperty(input[i])) {
            obj[input[i]]++
        } else {
            obj[input[i]] = 1
        }
    }
    let arr = Object.keys(obj)
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