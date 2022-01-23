function multiply(a, b) {
    let str1 = String(a)
    let str2 = b.toString()
    let len1 = 0, len2 = 0
    if (str1.indexOf('.') !== -1) {
        len1 = len1 + str1.split('.')[1].length
    }
    if (str2.indexOf('.') !== -1) {
        len2 = len2 + str2.split('.')[1].length
    }
    let f1 = Math.pow(10, len1)
    let f2 = Math.pow(10, len2)
    let a1 = Number(str1.replace('.', ''))
    let a2 = Number(str2.replace('.', ''))
    let ans = a1 * a2 / f1 / f2
    return ans;
}
let a = 1
let b = 3
console.log(multiply(a, b))

// 描述
// 求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题


//有意思他人的答案
function multiply_1(a, b) {
    var mul = [1, 1]
    var ab = [a, b].map((num, index) => ('' + num).replace(/\.(\d*)/, (_, $) => {
        mul[index] = Math.pow(10, $.length)
        return $
    }))
    return ab.reduce((a, b) => a * b) / mul.reduce((a, b) => a * b)
}



// 这里注意toFixed的用法
// let a = 3
// let b = 0.02
// console.log((a*b).toFixed(2)) //0.06

function multiply_2(a, b) {
    // 1.先将两个数转成字符串
    let str1 = a.toString()
    let str2 = b.toString()

    // 2.获取小数点后的位数,不一定有小数位
    let lenA = (str1.indexOf('.') === -1) ? 0 : (str1.length - str1.indexOf('.') - 1)
    let lenB = (str2.indexOf('.') === -1) ? 0 : (str2.length - str2.indexOf('.') - 1)

    // 3.取最精确的小数位数
    let len = lenA + lenB

    return (a * b).toFixed(len);
}

// let a = 0.2
// let b = 0.02
// console.log((a*b).toFixed(3))//0.004

// let a = 2
// let b = 2
// console.log((a*b).toFixed(0))//4