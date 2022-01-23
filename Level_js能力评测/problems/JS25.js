function partial(fn, str1, str2) {
    return fn.bind(this, str1, str2)
}

var sayIt = function (greeting, name, punctuation) {
    return greeting + ', ' + name + (punctuation || '!');
};
let ans = partial(sayIt, 'Hello', 'Ellie');
console.log(ans('!!!'));



// 描述
// 已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
// 1、返回一个函数 result，该函数接受一个参数
// 2、执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致


//call
// function partial(fn, str1, str2) {
//     return function (str3) {
//         return fn.call(this, str1, str2, str3)
//     }
// }

//将对象数组变成数组
//Array.prototype.slice.call(arguments, 1);
// [].slice.call(arguments)

//复杂点
// let arr = [...arguments]
// var args = arr.slice(1)

// 比如
// function partial(fn, str1, str2) {
//     //将对象数组变成数组
//     var args = Array.prototype.slice.call(arguments, 1);
//     return function () {
//         return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)))
//     }
// }


//有意思的答案
// function partial(fn, str1, str2) {
//     return function(str3) {
//         return fn(str1, str2, str3);
//     }
// }

//有意思的答案之简写
// const partial = (fn, str1, str2) => str3 => fn(str1, str2, str3);