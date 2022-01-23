// let input1 = readline();
// let input2 = readline();
// let input3 = readline();

let input1 = "8"
let input2 = "1 2 4 9 3 55 64 25"
let input3 = "0"
let arr = input2.split(' ')
var cmp = function (a, b) {
    return Number(a) - Number(b)
}

if (input3 === "0") {
    arr.sort(cmp)
}
if (input3 === "1") {
    arr.sort(cmp).reverse()
}
console.log(arr.join(' '))




// 描述
// 输入整型数组和排序标识，对其元素按照升序或降序进行排序

// 数据范围：  ，元素大小满足 
// 输入描述：
// 第一行输入数组元素个数
// 第二行输入待排序的数组，每个数用空格隔开
// 第三行输入一个整数0或1。0代表升序排序，1代表降序排序

// 输出描述：
// 输出排好序的数字