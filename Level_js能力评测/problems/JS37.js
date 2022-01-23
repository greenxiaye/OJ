function alterContext(fn, obj) {
    return fn.call(obj)
}
let ans = alterContext(function () {
    return this.greeting + ', ' + this.name + '!';
}, { name: 'Rebecca', greeting: 'Yo' })

console.log(ans)
// 描述
// 将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值

function alterContext_(fn, obj) {
    return fn.call(obj,obj.name,obj.greeting);
}