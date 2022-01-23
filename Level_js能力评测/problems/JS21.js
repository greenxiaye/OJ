function argsAsArray(fn, arr) {
    return fn.call(null, ...arr)
    // return fn.apply(null, arr)
}
let fn = function (greeting, name, punctuation) { return greeting + ', ' + name + (punctuation || '!'); }
let arr = ['Hello', 'Ellie', '!']
console.log(argsAsArray(fn, arr))
// 描述
// 将数组 arr 中的元素作为调用函数 fn 的参数
// 输出：
// Hello, Ellie!

// 调用函数有3种方式：
// obj.func();
// func.call(obj,args);//参数列出
// func.apply(obj,[m,n......]);//参数数组