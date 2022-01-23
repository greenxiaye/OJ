// let input = readline();
let input = 5
let str = Number(input).toString(2)
let obj = new Object()
let ans = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
        ans++
    }
}
console.log(ans)

// 描述
// 输入一个 int 型的正整数，计算出该 int 型数据在内存中存储时 1 的个数。

// 数据范围：保证在 32 位整型数字范围内
// 输入描述：
//  输入一个整数（int类型）

// 输出描述：
//  这个数转换成2进制后，输出1的个数

// 注意
// 数组[1,2] newSet([1,2])
// 字符串"12" newSet("12")

