function _factorial(number) {
    if (number === 1) {
        return 1
    } else {
        return number * _factorial(number - 1)
    }

}
console.log(_factorial(4))

// 描述
// 请补全JavaScript函数，要求返回数字参数的阶乘。
// 注意：参数为大于等于0的整数。