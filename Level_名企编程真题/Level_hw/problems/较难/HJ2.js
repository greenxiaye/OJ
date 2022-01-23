let input = "c"
let sign = "j"
// hash
function solve(input, sign) {
    let map = new Map();
    let inputLower = input.toLowerCase();
    for (let i = 0; i < inputLower.length; i++) {
        let strCode = inputLower[i].charCodeAt(0)
        let v = 0
        if (v = map.get(strCode)) {
            map.set(strCode, v + 1)
        } else {
            map.set(strCode, 1)
        }
    }
    let ans = map.get(sign.toLowerCase().charCodeAt(0))
    if (ans) {
        console.log(ans)
    } else {
        console.log(0)
    }

}
solve(input, sign)

// 正则
function solve_2(input, sign) {
    let reg = new RegExp(`${sign}`, 'ig')
    let arr = input.toLowerCase().match(reg) || []
    console.log(arr.length)
}

// 遍历
function solve_3(input, sign) {
    let inputLower = input.toLowerCase().split("")
    return inputLower.filter(item => {
        if (item == sign.toLowerCase()) {
            return true
        }
        return false
    }).length
}


// 描述
// 写出一个程序，接受一个由字母、数字和空格组成的字符串，和一个字符，然后输出输入字符串中该字符的出现次数。（不区分大小写字母）

// 数据范围： 
// 输入描述：
// 第一行输入一个由字母和数字以及空格组成的字符串，第二行输入一个字符。

// 输出描述：
// 输出输入字符串中含有该字符的个数。（不区分大小写字母）