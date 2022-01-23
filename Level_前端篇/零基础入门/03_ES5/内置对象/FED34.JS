function _trim(string) {
    // return string.trim()
    return string.replace(/^\s*|\s*$/g,'')
}
let ans = _trim(' 123   ')
console.log(ans)
// 描述
// 请补全JavaScript函数，要求去除参数字符串两端的空格并返回。