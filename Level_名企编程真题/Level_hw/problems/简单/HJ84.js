let input = "A 1 0 11B"
function solve(input) {
    let reg = /[A-Z]/g
    let arr = input.match(reg) 
    if (arr) {
        console.log(arr.length)
    } else { //防止找不到的时候 arr为null，null不能.lengh
        console.log(0)
    }

}
solve(input)
// 描述
// 找出给定字符串中大写字符(即'A'-'Z')的个数。
// 数据范围：字符串长度：
// 字符串中可能包含空格或其他字符
// 进阶：时间复杂度：，空间复杂度：
// 输入描述：
// 本题含有多组样例输入
// 对于每组样例，输入一行，代表待统计的字符串

// 输出描述：
// 对于每组样例，输出一个整数，代表字符串中大写字母的个数