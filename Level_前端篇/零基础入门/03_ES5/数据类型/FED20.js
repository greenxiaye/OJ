function _typeof(value) {
    // let reg1 = /^\[object\s(.*)\]$/
    let reg = /^\[object\s(.+)\]$/
    let type = Object.prototype.toString.call(value)
    // console.log(reg.exec(type)[1])//Symbol
    // console.log(type.match(reg)[1])//Symbol
    reg.test(type)
    return RegExp.$1.toLowerCase()
}
let sy = Symbol("KK");
let ans = _typeof(sy)
console.log(ans)
// 描述
// 请补全JavaScript函数，要求以字符串的形式返回参数的类型。
// 注意：只需检测基本数据类型。