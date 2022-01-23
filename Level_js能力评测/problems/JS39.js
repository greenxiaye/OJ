function iterate(obj) {
    // console.log(obj); //C { foo: 'bar', baz: 'bim' }
    // console.log(obj.__proto__) //{ bop: 'bip' }
    let keys = Object.keys(obj)
    let arr = []
    keys.forEach(key => {
        arr.push(`${key}: ${obj[key]}`)
    })
    return arr
}


var C = function () {
    // console.log(this) //C {}
    this.foo = 'bar'; this.baz = 'bim';
};
//console.log(C.prototype)//{}
// 原型模式：
C.prototype.bop = 'bip';
let ans = iterate(new C());
console.log(ans)


//注意
// 1. Object.getOwnPropertyNames返回的是对象所有自己的属性，包括可枚举和不可枚举，即返回的是所有实例属性。
// 2. Object.keys(obj)返回的是所有可枚举属性, 只会遍历实例属性key值，不会遍历原型上的属性，即返回可枚举的实例属性的数组。
// 3. for in可以遍历到obj的原型属性和方法，如果不想遍历原型上的，可以在循环内通过obj.hasOwnProperty()判断其是否是自己的实例属性。即for in用于遍历所有属性，obj.hasOwnProperty()判断是否为实例属性。


// 描述
// 找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
// 1、返回数组，格式为 key: value
// 2、结果数组不要求顺序