function count(arr, item) {
    let ans = 0
    arr.forEach(ele => {
        console.log(ans)
        ele === item && ans++;
    })
    return ans
}
let arr = [1, 2, 4, 4, 3, 4, 3]
let item = 3
console.log(count(arr, item))

// 描述
// 统计数组 arr 中值等于 item 的元素出现的次数

//有意思的答案
// function count(arr, item) {
//     return arr.filter(function(ele){
//         return item===ele;
//     }).length
// }