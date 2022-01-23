function _unshift(array, value) {
    array.unshift(value);//3
    return array;
}
console.log(_unshift([1, 2], 3))
// 描述
// 请补全JavaScript函数，要求将第二个参数插入第一个参数数组的头部，并且以数组的形式返回。