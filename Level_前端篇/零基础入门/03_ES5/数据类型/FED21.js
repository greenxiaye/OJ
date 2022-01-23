function _instanceof(left, right) {
    let flag = false;
    while (left.__proto__) {
        if (left.__proto__.constructor === right) {
            flag = true;
            break;
        } else {
            left = left.__proto__;
            // left = Object.getPrototypeOf(left)
        }
    }
    return flag;
}
function _instanceof_2(left, right) {
    return left instanceof right
 
}
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person1 = new Person('Alice', 18);
console.log(person1, _instanceof(person1, Person))


// 描述
// 请补全JavaScript函数，要求以Boolean的形式返回第一个参数是否属于第二个参数对象的实例。