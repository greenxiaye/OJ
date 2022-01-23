function truncate(arr) {
    let newArr = JSON.parse(JSON.stringify(arr));
    [].pop.apply(newArr)
    return newArr
}

let arr = [1, 2, 3, 4]
console.log(truncate(arr))

// 描述
// 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组

// 简便的答案
function truncate_(arr) {
    return arr.slice(0, arr.length - 1);
}