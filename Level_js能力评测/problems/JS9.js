function concat(arr1, arr2) {
    return arr1.concat(arr2);
}
let arr1 = [1, 2, 3, 4]
let arr2 = ['a', 'b', 'c', 1]
console.log(concat(arr1, arr2))
console.log(arr1)
console.log(arr2)
// 描述
// 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组

// 有意思的答案
function concat_(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(...arr1)