let input = "nowcoder"
function solve(input) {
    let index = input.lastIndexOf(" ")
    if (index !== -1) {
        let str = input.slice(index + 1)
        console.log(str.length)
    } else {
        console.log(input.length)
    }

}
solve(input)

// 描述
// 计算字符串最后一个单词的长度，单词以空格隔开，字符串长度小于5000。（注：字符串末尾不以空格为结尾）
// 输入描述：
// 输入一行，代表要计算的字符串，非空，长度小于5000。

// 输出描述：
// 输出一个整数，表示输入字符串最后一个单词的长度。

