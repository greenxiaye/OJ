function _getday(value) {
    let arr = ['天', '一', '二', '三', '四', '五', '六'];
    return `星期${arr[value%7]}`
}
let ans = _getday(7)
console.log(ans)
// 描述
// 请补全JavaScript函数，要求以字符串的形式返回数字参数所对应的星期。
// 示例：
// 1. _getday(1) -> "星期一"
// 2. _getday(7) -> "星期天"