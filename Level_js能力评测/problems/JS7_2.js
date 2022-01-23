
// 简便的答案 但无需考虑拷贝问题
// function prepend_(arr, item) {
//     return [item].concat(arr);
// }
// let arr = [{ name: "Bob", age: 20 }]
// let item = { name: "Joe", age: 25 }
// let newArr = prepend_(arr, item)
// //现在得到的arr和newArr
// console.log(arr)
// console.log(newArr)
// //将来
// newArr[0].name = "Alice"
// console.log(arr)
// console.log(newArr)

// 浅拷贝
function prepend_(arr, item) {
    return arr.concat(item);
}
let arr = [{ name: "Bob", age: 20 }]
let item = { name: "Joe", age: 25 }
let newArr = prepend_(arr, item)
//现在得到的arr和newArr
console.log(arr)
console.log(newArr)
//将来
newArr[0].name = "Alice"
console.log(arr)
console.log(newArr)


// 无需考虑拷贝问题
// function prepend_(arr, item) {
//     return [].concat(item).concat(arr);
// }
// let arr = [{ name: "Bob", age: 20 }]
// let item = { name: "Joe", age: 25 }
// let newArr = prepend_(arr, item)
// //现在得到的arr和newArr
// console.log(arr)
// console.log(newArr)
// //将来
// newArr[0].name = "Alice"
// console.log(arr)
// console.log(newArr)

// 描述
// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组

