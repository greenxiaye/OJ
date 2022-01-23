function createModule(str1, str2) {
    // 字面量模式
    let obj = {
        greeting: str1,
        name: str2,
        sayIt: function () {
            console.log(this)//指向obj 注意区别剪头函数
            return obj.greeting + ', ' + obj.name;
        }
    }
    return obj
}

// 浅拷贝
let ans = function () {
    var o = createModule('hello', 'matt');
    o.name = 'katniss'; o.greeting = 'hi';
    return o.sayIt();
}
console.log(ans());
// 描述
// 完成函数 createModule，调用之后满足如下要求：
// 1、返回一个对象
// 2、对象的 greeting 属性值等于 str1， name 属性值等于 str2
// 3、对象存在一个 sayIt 方法，该方法返回的字符串为 greeting属性值 + ', ' + name属性值

// 有意思的答案
// 原型模式：
function createModule_1(str1, str2) {
    function Obj() {
        this.greeting = str1;
        this.name = str2;
    }
    Obj.prototype.sayIt = function () { return this.greeting + ", " + this.name; }
    return new Obj();
}

//构造函数模式
function createModule_2(str1, str2) {
    function Obj() {
        this.greeting = str1;
        this.name = str2;
        this.sayIt = function () { return this.greeting + ", " + this.name; }
    }
    return new Obj();
}

//创建对象模式：
function createModule_3(str1, str2) {
    function CreateObj() {
        obj = new Object;
        obj.greeting = str1;
        obj.name = str2;
        obj.sayIt = function () { return this.greeting + ", " + this.name; }
        return obj;
    }
    return CreateObj();
}