function remove(arr, item) {
    return arr.filter(element => {
        return element !== item
    })
}
let arr = [1, 2, 3, 4, 2]
let item = 2
console.log(remove(arr, item))




// 描述
// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组