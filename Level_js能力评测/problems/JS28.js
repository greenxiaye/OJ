function partialUsingArguments(fn) {
    let args = Array.prototype.slice.call(arguments, 1)
    let result = function () {
        let newArgs = Array.prototype.slice.call(arguments)
        return fn.apply(this, args.concat(newArgs))
    }
    return result
}

let ans = function () {
    var a = 1; var b = 2; var c = 3; var d = 4;
    var test = function (first, second, third, forth) {
        return first + second + third + forth;
    };
    return partialUsingArguments(test, a, b)(c, d);
}
console.log(ans())


// 描述
// 实现函数 partialUsingArguments，调用之后满足如下条件：
// 1、返回一个函数 result
// 2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
// 3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数


// 有意思的答案
// 对象解构
function partialUsingArguments_(fn) {
    const [f, ...res] = arguments
    return (...rest) => fn(...res, ...rest);
}


// 未解决错误
// 段错误:您的程序发生段错误，可能是数组越界，堆栈溢出（比如，递归调用层数太多）等情况引起
// return fn.apply(null, [...args, ...newArgs])
// 但
//  return fn(...args, ...newArgs) 是可以的
