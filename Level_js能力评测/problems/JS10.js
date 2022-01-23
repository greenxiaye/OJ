function insert(arr, item, index) {
    let newarr = [].concat(arr)
    newarr.splice(index, 0, item)
    return newarr
}
let arr = [1, 2, 3, 4]
let item = "z"
let index = 2
console.log(insert(arr, item, index))


// 描述
// 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组