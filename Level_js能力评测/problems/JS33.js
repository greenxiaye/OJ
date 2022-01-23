function valueAtBit(num, bit) {
    // toString后是字符类型，所以可以...运算符
    let arr = [...num.toString(2)]
    return arr[arr.length - bit]
}
let num = 128
let bit = 8
console.log(valueAtBit(num, bit))


// 描述
// 获取数字 num 二进制形式第 bit 位的值。注意：
// 1、bit 从 1 开始
// 2、返回 0 或 1
// 3、举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1

// 有意思的答案
// 1. 将num右移bit-1位，拿到第bit位。
// 2. 如128二进制表示位10000000，右移7位得到00000001
// 3. 1就是第bit位。要取得该位，&1即可
function valueAtBit_1(num, bit) {
    return (num >> (bit - 1)) & 1;
}


// 普通方法
function valueAtBit_2(num, bit) {
    var arr = [];
    while (num != 0) {
        //console.log(num);
        arr.push(num % 2);
        num = parseInt(num / 2);
    }
    return arr[bit - 1];
}

// 普通方法2
// reverse()后取值charAt