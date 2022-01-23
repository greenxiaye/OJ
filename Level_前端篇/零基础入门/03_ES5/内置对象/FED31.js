function _keys(object) {
    // key可以是symbol，也可以是可枚举
    return Reflect.ownKeys(object)
}
console.log(_keys({ name: 'nowcoder', age: 7 }))

// 描述
// 请补全JavaScript函数，要求以数组的形式输出对象各个属性的键名。
// 示例：
// 1. _keys({name:'nowcoder',age:7}) -> ['name','age']
// 注意：只需考虑对象属性均为原始数据类型的情况。