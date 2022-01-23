function prepend(arr, item) {
    let newArr = JSON.parse(JSON.stringify(arr));
    [].unshift.call(newArr, item);
    return newArr;
}
let arr = [1, 2, 3, 4]
let item = 10
console.log(prepend_(arr, item))
console.log(arr)

// 描述
// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组

// 简便的答案
function prepend_(arr, item) {
    // 相当于在新开的一个数组，不需要考虑深拷贝
    return [item].concat(arr);
}