// let input = readline();
let input = 5.5
let index = String(input).indexOf('.')
let num = String(input).slice(index + 1, index + 2)
let ans = 0
if (num < 5) {
    ans = Math.floor(input)
}
if (num >= 5) {
    ans = Math.ceil(input)
}
console.log(ans)


// 描述
// 写出一个程序，接受一个正浮点数值，输出该数值的近似整数值。如果小数点后数值大于等于 0.5 ,向上取整；小于 0.5 ，则向下取整。

// 数据范围：保证输入的数字在 32 位浮点数范围内
// 输入描述：
// 输入一个正浮点数值

// 输出描述：
// 输出该数值的近似整数值

// 注意
// parseInt像floor
// ceil()向上舍入，即它总是将数值向上舍入为最接近的整数；
// floor()向下舍入,即它总是将数值向下舍入为最接近的整数；
// round()执行标准舍入,即它总是将数值四舍五入为最接近的整数
// toFixed 四舍五入