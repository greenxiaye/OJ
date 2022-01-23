let input1 = "bca"
let input2 = "abc"
function solve(input1, input2) {
    let set1 = new Set([...input1])
    let set2 = new Set([...input2])
    let flag = true
    for (let item of set1) {
        if (!set2.has(item)) {
            flag = false
        }
    }
    console.log(flag)
}
solve(input1, input2)

// 描述
// 判断短字符串S中的所有字符是否在长字符串T中全部出现。
// 请注意本题有多组样例输入。
// 数据范围:
// 进阶：时间复杂度：，空间复杂度：
// 输入描述：
// 输入两个字符串。第一个为短字符串，第二个为长字符串。两个字符串均由小写字母组成。

// 输出描述：
// 如果短字符串的所有字符均在长字符串中出现过，则输出字符串"true"。否则输出字符串"false"。

