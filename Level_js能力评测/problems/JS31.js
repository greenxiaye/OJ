function and(a, b) {
    return !!(a && b)
    //为了防止a为true，b为非Boolean就会返回非Boolean值
}

let a = true
let b = 4
console.log(and(a, b))


// 描述
// 返回参数 a 和 b 的逻辑且运算结果
