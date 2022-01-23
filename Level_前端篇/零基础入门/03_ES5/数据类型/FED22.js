function _splice(left, right) {
    return [...String(left)].concat(...String(right)).join('');

}
let ans = _splice(223, -233)
console.log(ans)

// 描述
// 请补全JavaScript函数，要求以字符串的形式返回两个数字参数的拼接结果。
// 示例：
// 1. _splice(223,233) -> "223233"
// 2. _splice(-223,-233) -> "-223-233"



// 隐式转换
// 当遇到字符串值时，之后（包含当前字符串）的所有值都自动转换为字符串类型然后相拼接
function _splice_2(left, right) {
    return 3 + '' + left + right
}
// 隐式转换
function _splice_3(left, right) {
    return left + '' + right
}

//其他做法玩玩
function _splice_4(left, right) {
    // [Arguments] { '0': 223, '1': -233 }
    return Array.from(arguments).join("")
}
function _splice_5(left, right) {
    // [Arguments] { '0': 223, '1': -233 }
    return Array.prototype.slice.apply(arguments).join('')
}