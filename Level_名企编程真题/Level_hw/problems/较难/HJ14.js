let input = "abc"
function solve() {
    let reg = /.{8}/g
    let arr = input.match(reg)
    if (arr) {
        console.log(arr.join("\n"))
    }
    let len = input.length
    if (len % 8) {
        let lastStr = input.slice(Number(`-${len % 8}`))
        for (let i = 0; i < 8 - len % 8; i++) {
            lastStr += "0"
        }
        console.log(lastStr)
    }
}
solve(input);




// 描述
// •连续输入字符串，请按长度为8拆分每个输入字符串并进行输出；
// •长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。
// （注：本题有多组输入）
// 输入描述：
// 连续输入字符串(输入多次,每个字符串长度小于等于100)

// 输出描述：
// 依次输出所有分割后的长度为8的新字符串

//有意思的答案
function solve_() {
    let line = "abc"
    const overNumber = line.length % 8
    const result = line.concat(new String("0").repeat(overNumber ? 8 - overNumber : 0))
    for (let i = 0; i < result.length;) {
        console.log(result.substring(i, i += 8))
    }
}
