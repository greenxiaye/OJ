function alterObjects(constructor, greeting) {
    // console.log(constructor) //[Function: C]
    return constructor.prototype.greeting = greeting
}

var C = function (name) {
    console.log(this) // C {}
    this.name = name;
    return this;
};
var obj1 = new C('Rebecca');
alterObjects(C, 'What\'s up');
let ans = obj1.greeting;
console.log(ans);

// 注意一
//所有实例的某个属性都改变，改变这个构造函数的原型即可
// 原型链问题
// 访问一个对象的方法或者是属性，在该对象中若未找到，
// 则在其原型链上面向上寻找，直至基原型

// 注意二
// 构造函数通过prototype 属性访问原型对象
// 通过设置 构造函数的原型对象的greeting 属性
// 该构造函数的实例对象就可以通过原型，也能访问greeting 属性了
// prototype有种共享的感觉

// 注意三
// 如果在对象上就有找到了greeting属性，改原型也没有用。
// 所以，只有在对象还没有new出来，而且构造函数中没有对greeting属性初始化，对象才会继承原型中的greeting属性。
// 如下图，obj1_.greeting为456
function alterObjects_(constructor, greeting) {
    console.log("123", greeting)
    console.log("1234", constructor.prototype.greeting)
    return constructor.prototype.greeting = greeting
}

var C_ = function (name) {
    this.name = name;
    this.greeting = "456"
    return this;
};
alterObjects_(C_, 'What\'s up');
var obj1_ = new C_('Rebecca');

let ans_ = obj1_.greeting;
console.log(ans_);



// 描述
// 给定一个构造函数 constructor，请完成 alterObjects 方法，将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量。
