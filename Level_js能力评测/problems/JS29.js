function curryIt(fn) {
    let args = []
    let len = fn.length
    let _c = function (newArgs) {
        args = [...args, newArgs]
        if (args.length < len) {
            return _c
        } else {
            return fn.apply(this, args)
        }
    }
    return _c
}

var fn = function (a, b, c) {
    return a + b + c
};
let ans = curryIt(fn)(1)(2)(3);
console.log(ans);

// let ans = function () {
//     var fn = function (a, b, c) {
//         return a + b + c
//     };
//     return curryIt(fn).length;
// }
// console.log(ans());

// 注意 arguments.callee其作用是引用当前正在执行的函数
// return arguments.callee相当于
// return _c


// 描述
// 已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
// 1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
// 2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
// 3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
// 4、调用 c 之后，返回的结果与调用 fn 的返回值一致
// 5、fn 的参数依次为函数 a, b, c 的调用参数


// 注意这里
// 没有办法
// function (...newArgs) 和
// args = [...args, newArgs]
// 是因为第二个例子

// 有意思的答案
function curryIt_(fn) {
    return function fun(a) {
        console.log(a)
        if (fn.length === 1) {
            console.log(123)
            return fn(a)
        }
        console.log('123',
            fn
        )
        fn = fn.bind(this, a)
        return fun
    }
}
