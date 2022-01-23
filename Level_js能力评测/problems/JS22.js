function speak(fn, obj) {
    return fn.call(obj);
    // return fn.apply(obj);
}
let fn = function () { return this.greeting + ', ' + this.name + '!!!'; }
let obj = { greeting: 'Hello', name: 'Rebecca' }
console.log(speak(fn, obj))

// 描述
// 将函数 fn 的执行上下文改为 obj 对象
// 输出
// Hello, Rebecca!!!

//或者
//  return fn.bind(obj)();