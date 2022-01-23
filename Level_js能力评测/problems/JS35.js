function convertToBinary(num) {
    let arr = num.toString(2).split("")
    if (arr.length < 8) {
        let cnt = 8 - arr.length;
        for (let i = 0; i < cnt; i++) {
            arr.unshift('0')
        }
    }
    return arr.join("")
}
let num = 65

console.log(convertToBinary(num))

// 描述
// 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。

// 有意思的答案
function convertToBinary_1(num) {
    var s = num.toString(2);
    return '00000000'.slice(s.length) + s;
}