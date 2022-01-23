let input = "1000"
function isPerfectNum(num) {
    let sqrtNum = Math.ceil(Math.sqrt(num))
    let sum = 1;
    for (let n = 2; n < sqrtNum; n++) {
        if (num % n == 0) {
            sum = sum + n + num / n; //对称，6能被2整除，也能被3整除
        }
    }
    if (sqrtNum * sqrtNum === num) { //例如16=4*4，去掉一个4
        sum = sum - sqrtNum
    }
    if (sum === num) {
        return true
    }
}
function solve(input) {
    let ans = 0
    for (let num = 2; num < Number(input); num++) {
        if (isPerfectNum(num)) {
            ans++
        }
    }
    console.log(ans)
}
solve(input)



// 描述
// 完全数（Perfect number），又称完美数或完备数，是一些特殊的自然数。

// 它所有的真因子（即除了自身以外的约数）的和（即因子函数），恰好等于它本身。

// 例如：28，它有约数1、2、4、7、14、28，除去它本身28外，其余5个数相加，1+2+4+7+14=28。

// 输入n，请输出n以内(含n)完全数的个数。

// 数据范围： 


// 本题输入含有多组样例。

// 输入描述：
// 输入一个数字n

// 输出描述：
// 输出不超过n的完全数的个数

