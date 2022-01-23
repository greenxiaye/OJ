let input = "5 7"
function gcd(a, b) { //最大公因数
    while (a % b) {
        let tmp = a
        a = b
        b = tmp % b
    }
    return b
}
function solve(input) {
    let [a, b] = input.split(/\s+/)
    let ans = a * b / gcd(a, b)
    console.log(ans)
}
solve(input)

// 描述
// 正整数A和正整数B 的最小公倍数是指 能被A和B整除的最小的正整数值，设计一个算法，求输入A和B的最小公倍数。

// 数据范围：
// 输入描述：
// 输入两个正整数A和B。

// 输出描述：
// 输出A和B的最小公倍数。

