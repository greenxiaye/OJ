let input1 = "2OA92AptLq5G1lW8564qC4nKMjv8C"
let input2 = "B5WWIj56vu72GzRja7j5"
function encryt(input) {
    let arr = input.split("")
    for (let i = 0; i < arr.length; i++) {
        if (/[a-z]/.test(arr[i])) {
            if (arr[i] === 'z') {
                arr[i] = 'a'
            } else {
                arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 1)
            }
            arr[i] = arr[i].toUpperCase()
        }
        else if (/[A-Z]/.test(arr[i])) {
            if (arr[i] === 'Z') {
                arr[i] = 'A'
            } else {
                arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 1)
            }
            arr[i] = arr[i].toLowerCase()
        }
        else if (/[0-9]/.test(Number(arr[i]))) {
            if (Number(arr[i]) === 9) {
                arr[i] = '0'
            } else {
                arr[i] = String.fromCharCode(Number(arr[i].charCodeAt(0)) + 1)
            }
        }
    }
    console.log(arr.join(''))
}
function decryt(input) {
    let arr = input.split("")
    for (let i = 0; i < arr.length; i++) {
        if (/[a-z]/.test(arr[i])) {
            if (arr[i] === 'a') {
                arr[i] = 'z'
            } else {
                arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - 1)
            }
            arr[i] = arr[i].toUpperCase()
        }
        else if (/[A-Z]/.test(arr[i])) {
            if (arr[i] === 'A') {
                arr[i] = 'Z'
            } else {
                arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - 1)
            }
            arr[i] = arr[i].toLowerCase()
        }
        else if (/[0-9]/.test(Number(arr[i]))) {
            if (Number(arr[i]) === 0) {
                arr[i] = '9'
            } else {
                arr[i] = String.fromCharCode(Number(arr[i].charCodeAt(0)) - 1)
            }
        }
    }
    console.log(arr.join(''))
}
function solve(input1, input2) {
    encryt(input1)
    decryt(input2)
}
solve(input1, input2);

// 描述
// 1、对输入的字符串进行加解密，并输出。

// 2、加密方法为：

// 当内容是英文字母时则用该英文字母的后一个字母替换，同时字母变换大小写,如字母a时则替换为B；字母Z时则替换为a；

// 当内容是数字时则把该数字加1，如0替换1，1替换2，9替换0；

// 其他字符不做变化。

// 3、解密方法为加密的逆过程。

// 本题含有多组样例输入。

// 数据范围：输入的两个字符串长度满足  ，保证输入的字符串都是大小写字母或者数字
// 输入描述：
// 输入说明
// 输入一串要加密的密码
// 输入一串加过密的密码

// 输出描述：
// 输出说明
// 输出加密后的字符
// 输出解密后的字符