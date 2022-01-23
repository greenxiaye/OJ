function _numbertoobject(number) {
    return new Number(number)
    // return new Object(number)
    // return {number} //字面量形式，返回一个number对象 {number：number}
    // return  { number: number }
}

console.log(typeof _numbertoobject(123) === 'object')
// 描述
// 请补全JavaScript函数，要求将数字参数转换为对象的形式返回。
// 示例：
// 1. typeof number === 'number' -> typeof _numbertoobject(number) === 'object'