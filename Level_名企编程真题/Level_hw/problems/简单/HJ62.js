let input = 5
let str = input.toString(2)
let reg = /1/g
let arr = str.match(reg)
if (arr) {
    console.log(arr.length)
}else{
    console.log(0)
}


// 描述
// 输入一个正整数，计算它在二进制下的1的个数。
// 注意多组输入输出！！！！！！

// 数据范围： 
// 输入描述：
// 输入一个整数

// 输出描述：
// 计算整数二进制中1的个数