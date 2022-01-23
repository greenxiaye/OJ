var obj = {
    a: 1,
    b: 2,
    fn: function () {
        return this.a + this.b
        // return obj.a + this.b;
        // return obj.a + obj.b;
    }
}
console.log(obj.fn())

// 描述
// 请补全JavaScript函数，使obj对象中fn函数返回该对象中a属性和b属性的和。