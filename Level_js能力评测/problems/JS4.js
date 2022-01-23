function removeWithoutCopy(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            arr.splice(i--, 1);
        }
    }
    return arr
}
let arr = [1, 2, 2, 3, 4, 2, 2]
let item = 2
console.log(removeWithoutCopy(arr, item))
// 描述
// 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回

//有意思的答案
// 不需要i--
// idx=arr.indexOf(item))!=-1