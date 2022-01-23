function matchesPattern(str) {
    var reg = /^\d{3}-\d{3}-\d{4}$/
    return reg.test(str)
}
let str = '180-555-1211'
console.log(matchesPattern(str))

// 描述
// 给定字符串 str，检查其是否符合如下格式
// 1、XXX-XXX-XXXX
// 2、其中 X 为 Number 类型

// 注意 不加$
// 则 '180-555-12112' error

// 注意 不加^
// 则 '1801-555-122' error

// 有意思的答案
// 有相同部分\d{3}-
// 所以可以写作(\d{3}-){2}
function matchesPattern_1(str) {
    return /^(\d{3}-){2}\d{4}$/.test(str);
}