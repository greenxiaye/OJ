function square(arr) {
    return arr.map(item => item * item)
}
let arr = [1, 2, 3, 4]
console.log(square(arr))
// 描述
// 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组