function append(arr, item) {
    //深拷贝一波
    let newArr = JSON.parse(JSON.stringify(arr));
    newArr.push(item)
    return newArr
}
let arr = [1, 2, 3, 4]
let item = 10
console.log(append_(arr, item))
console.log(arr)

// 描述
// 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组

// 有意思的答案
function append_(arr, item) {
    newarr = [item];
    [].unshift.apply(newarr, arr);
    return newarr;
}

// 因为要返回新的数组，所以用深拷贝
// 用slice和concat无法完成对象数组的深拷贝

