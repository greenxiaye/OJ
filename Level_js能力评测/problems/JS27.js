function callIt(fn) {
    let arr = Array.prototype.slice.call(arguments, 1)
    return fn.apply(this, arr);
}
let ans = function () {
    var a = 1; b = 2; var c = 3;
    var test = function (first, second, third) {
        return first === a && second === b && third === c;
    };
    return callIt(test, a, b, c);
}
console.log(ans())
// 实现函数 callIt，调用之后满足如下条件
// 1、返回的结果为调用 fn 之后的结果
// 2、fn 的调用参数为 callIt 的第一个参数之后的全部参数

// 有意思的他人的答案
// 主要是eval的应用
// function callIt(fn) {
//     var a = Array.prototype.slice.call(arguments)
//     a.shift()
//     var str = a.toString()
//     return  eval('fn('+str+')')
// }