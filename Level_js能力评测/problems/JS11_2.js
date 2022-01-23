//curry
function count(arr) {
    let ans = 0
    return function (item) {
        arr.forEach((val) => {
            if (val === item) {
                ans++
            }
        })
        return ans
    }
}
let arr = [1, 2, 4, 4, 3, 4, 3]
let item = 3
console.log(count(arr)(item))

