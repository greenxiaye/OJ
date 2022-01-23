function curtail(arr) {
    let newarr = [].concat(arr)
    newarr.shift()
    return newarr
}
let arr = [1, 2, 3, 4]
console.log(curtail(arr))
console.log(arr)
// 描述
// 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组

// 简单点
function curtail(arr) {
    return arr.slice(1)
}