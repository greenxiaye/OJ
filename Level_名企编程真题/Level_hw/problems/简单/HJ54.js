let input = "3+2*(1+2*(-4/(8-6)+7))"
let numStack = [] //双栈法
let signStack = []
let flag = false
solve(input)
function compute() {
    let b = Number(numStack.pop())
    let a = Number(numStack.pop())
    let op = signStack.pop()
    let computeResult = 0
    switch (op) {
        case '+':
            computeResult = a + b
            break
        case '-':
            computeResult = a - b
            break
        case '*':
            computeResult = a * b
            break
        case '/':
            computeResult = a / b
            break
    }
    numStack.push(computeResult)
}
function isPrior(m, n) {
    if (m == '(') {
        return false
    }
    if ((m == '+' || m == '-') && (n == '*' || n == '/')) {
        return false;
    } //加减法小于乘除法
    return true
}

function solve(str) {
    numStack = []
    signStack = []
    signStack.push('(')
    str = str + ')'
    flag = false//上一位是符号
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            signStack.push(str[i])
        } else if (str[i] == ')') { //遇到右括号
            while ((tmp = signStack.pop()) != '(') { //弹出开始计算直到遇到左括号
                signStack.push(tmp)
                compute();
            }
        } else if (flag) {
            let tmp = signStack.pop()
            signStack.push(tmp)
            while (isPrior(tmp, str[i])) {
                compute()
                tmp = signStack.pop()
                signStack.push(tmp)
            }
            signStack.push(str[i])
            flag = false
        } else {//数字
            let index = i
            if (str[index] == '-' || str[index] == '+') {
                i++//正负号
            }
            let reg = /\d/
            while (reg.test(str[i])) {
                i++
            }
            let tmpNum = str.slice(index, i);
            numStack.push(tmpNum)
            i--;
            flag = true;
        }
    }
    console.log(numStack.pop())
}
// 参考这位大佬的思路
// https://blog.nowcoder.net/n/7be5ce2958214ad1a94ea6e7bdb62907?f=comment

// 描述
// 给定一个字符串描述的算术表达式，计算出结果值。

// 输入字符串长度不超过 100 ，合法的字符包括 ”+, -, *, /, (, )” ， ”0-9” 。

// 数据范围：运算过程中和最终结果均满足  ，即只进行整型运算，确保输入的表达式合法
// 输入描述：
// 输入算术表达式

// 输出描述：
// 计算出结果值

// let input = readline()
// let ans = eval(input)
// console.log(ans)


