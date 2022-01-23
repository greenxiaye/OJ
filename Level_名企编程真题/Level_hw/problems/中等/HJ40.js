let input = "1Qazxsw23 edcvfr45tgbn hy67uj m,ki89ol.\\/;p0-=\\]["
function solve(input) {
    let arr1 = input.match(/[a-z]+/gi) // i不区分大小写
    let num1 = arr1 ? arr1.join("").length : 0
    let arr2 = input.match(/\u0020/g)
    // str.match(/\s+?/gi)
    let num2 = arr2 ? arr2.length : 0
    let arr3 = input.match(/\d/g)
    let num3 = arr3 ? arr3.join("").length : 0
    console.log(num1 + '\n' + num2 + '\n' + num3)
    console.log(input.length - num1 - num2 - num3)
    // console.log(' '.charCodeAt(0))
}
solve(input)

// 描述
// 输入一行字符，分别统计出包含英文字母、空格、数字和其它字符的个数。

// 本题包含多组输入。

// 数据范围：输入的字符串长度满足 

// 输入描述：
// 输入一行字符串，可以有空格

// 输出描述：
// 统计其中英文字符，空格字符，数字字符，其他字符的个数