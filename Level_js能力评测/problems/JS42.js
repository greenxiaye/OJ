function endsWithVowel(str) {
    str = str.toLowerCase();
    let word = str[str.length - 1];
    let reg = /[aeiou]/
    return reg.test(word)
}

let str = 'I KNOW KUNG FU'
let ans = endsWithVowel(str)
console.log(ans)

// 描述
// 给定字符串 str，检查其是否以元音字母结尾
// 1、元音字母包括 a，e，i，o，u，以及对应的大写
// 2、包含返回 true，否则返回 false

//自己的正则表达式做复杂了
// $表示匹配字符串的尾字符
// /i 表示匹配的时候不区分大小写，这个跟其它语言的正则用法相同
function endsWithVowel_1(str) {
    return /[a,e,i,o,u]$/i.test(str)
}

function endsWithVowel_2(str) {
    let res = str[str.length - 1]
    return 'aeiouAEIOU'.split('').includes(res.toLowerCase())
}