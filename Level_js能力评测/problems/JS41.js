function containsRepeatingLetter(str) {
    let obj = new Object()
    let reg = /[a-zA-Z]/ // new RegExp(//)
    for (let i = 0; i < str.length; i++) {
        if (reg.test(str[i])) {
            if (obj[str[i]]) {
                obj[str[i]]++
            } else {
                obj[str[i]] = 1
            }
        }
    }
    let flag = false
    Object.keys(obj).forEach(key => {
        if (obj[key] > 1) {
            flag = true
        }
    })
    return flag
}
let str = 'lmdm' //数字不算
let ans = containsRepeatingLetter(str)
console.log(ans)

// 描述
// 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false

// 注意这里不要let reg = /[a-zA-Z]/g

// 有意思的答案
function containsRepeatingLetter_1(str) {
    return /([a - zA - Z])\1+/.test(str);
}