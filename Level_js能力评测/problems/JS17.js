function parse2Int(num) {
    let arr = num.split("")
    let ans = ""
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) >= 0) {
            ans += arr[i]

        } else {
            break
        }
    }
    return ans
}
let num = '0x12'
console.log(parse2Int(num));

//有意思的答案
// function parse2Int(num) {
//     return parseInt(num.match(/^(\d+)/)[0]);
// }