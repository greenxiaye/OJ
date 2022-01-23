function _int(value) {
    console.log(~2.49)//-3
    console.log(~~2.49)//2
    console.log(2.49 >> 0)//2
    console.log(Math.trunc(value))
    return Math.floor(value)
}
console.log(_int(2.49))
// 描述
// 请补全JavaScript函数，要求返回数字参数的整数部分。
