function captureThreeNumbers(str) {
    let arr = str.match(/\d{3}/);
    if (arr) {
        return arr[0]
    }
    else return false
}
let str = '13902'
console.log(captureThreeNumbers(str))

// 描述
// 实际考察的是字符串中是否含有连续的三个任意数字
// 若存在连续的三个任意数字，则返回最早出现的三个数字
// 给定字符串 str，检查其是否包含 连续3个数字，请使用正则表达式实现。
// 1、如果包含，返回最先出现的 3 个数字的字符串
// 2、如果不包含，返回 false

// 普通的做法
function captureThreeNumbers_(str) {
    for (var i = 0; i < str.length - 2; i++) {
        var a = Number(str[i]);
        var b = Number(str[i + 1]);
        var c = Number(str[i + 2]);
        if (Math.abs(a - b) == 1 && Math.abs(b - c) == 1) {
            return a * 100 + b * 10 + c;
        }
    }
    return false;
}