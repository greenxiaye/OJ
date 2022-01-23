function _reverse(number) {
    let abs_num = Math.abs(number).toString().split("").reverse().join("")
    return number > 0 ? Number(abs_num) : 0 - abs_num
}
console.log(_reverse(-2233))
console.log(typeof _reverse(-2233))