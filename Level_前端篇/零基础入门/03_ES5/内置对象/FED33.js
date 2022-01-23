function _stringtoobject(string) {
    // return new String(string)
    // return {string}
    // return [...string]
    // return {string:string}
    return new Object(string)
}
let ans = _stringtoobject('123')
console.log(ans, typeof ans)
// 描述
// 请补全JavaScript函数，要求将字符串参数转换为对象的形式返回。
// 示例：
// 1. typeof string === 'string' -> typeof _stringtoobject(string) === 'object'