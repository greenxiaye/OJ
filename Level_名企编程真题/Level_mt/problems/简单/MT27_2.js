// 没通过 超时，但就是想留着
let n = '3'
let input = "1 1 0 0 1 1 0 0"
function solve(n, input) {
    let arr = input.split(' ').map(Number)
    if (arr.length > 1) {
        let ans = recursion(arr, arr[0])
        console.log(ans)
    }else{
        console.log(0)
    }

}
function recursion(arr, num) {
    // console.log('=================', arr, num)
    if (arr.indexOf(num) === -1) {
        // console.log(1234, arr, num)
        return 0
    } else {
        let index = arr.indexOf(1 - num)
        arr = arr.slice(index)
        // console.log(123, arr, num)
        return 1 + recursion(arr, 1 - num)

    }
}
solve(n, input)