let input = "200"
function solve(input) {
    let str = Number(input).toString(2);
    // let reg = /[1]+/g 
    let reg = /1+/g 
    let arr = str.match(reg)
    let ans = 0
    if (arr) {
        ans = Math.max(...arr).toString().length
    }
    console.log(ans)
}
solve(input)

// 描述
// 求一个int类型数字对应的二进制数字中1的最大连续数，例如3的二进制为00000011，最大连续2个1
// 本题含有多组样例输入。
// 数据范围：数据组数：，
// 进阶：时间复杂度：，空间复杂度：
// 输入描述：
// 输入一个int类型数字

// 输出描述：
// 输出转成二进制之后连续1的个数