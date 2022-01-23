function sum(arr) {
    return arr.reduce(function (prev, cur, index, arr) {
        return prev + cur
    }, 0)
}
let arr = [1, 2, 3, 4]
console.log(sum(arr))



// 描述
// 计算并返回给定数组 arr 中所有元素的总和
// 输入描述：
// 数组中的元素均为 Number 类型


// 有意思的答案
function sum_(arr) {
    return eval(arr.join("+"));
}