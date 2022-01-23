// let input=readline()
let input = "abcd"
console.log([...input].reverse().join(''))


// 描述
// 接受一个只包含小写字母的字符串，然后输出该字符串反转后的字符串。（字符串长度不超过1000）

// 输入描述：
// 输入一行，为一个只包含小写字母的字符串。

// 输出描述：
// 输出该字符串反转后的字符串。

//有意思的答案
// let str = readline();
// let arr = str.split('');
// if(!/^[a-z]+$/.test(str)){
//     throw new Error('输入值错误');
// }
// console.log(str.split('').reverse().join(''));