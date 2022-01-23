let input1 = "21 9"
let input2 = "3571 365 9117 1249 5899 7695 5076 2140 4580 933 85 7677 2673 7211 1405 8672 4972 5264 4366 3211 3047"
function cmp(a, b) {
    return a - b // 类型自动转换为number
    // return Number(a) - Number(b)
}
function solve(input1, input2) {
    let [n, k] = input1.split(/\s+/).map(Number)
    let arr = input2.split(/\s+/)
    // arr.sort() // 注意是字符不能直接排序

    arr.sort(cmp)
    let ans = []
    for (let i = 0; i < k; i++) {
        ans.push(arr[i])
    }
    console.log(ans.join(" "))
}
solve(input1, input2)


// 描述
// 输入n个整数，输出其中最小的k个整数并按升序输出

// 本题有多组输入样例

// 数据范围： ，输入的整数满足 
// 输入描述：
// 第一行输入两个整数n和k
// 第二行输入一个整数数组

// 输出描述：
// 输出一个从小到大排序的整数数组

