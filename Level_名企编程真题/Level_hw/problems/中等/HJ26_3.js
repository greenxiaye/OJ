let input = "A Famous Saying: Much Ado About Nothing (2012/8)."
function bubble(arr) {     // 1:套一个函数的壳子，将参数传入
    let reg = /[a-zA-Z]/
    let v = new Array()
    for (let i = 0; i < arr.length; i++) {
        if (reg.test(arr[i])) { // 放入下标
            v.push(i)
        }
    }
    for (let i = 0; i < v.length - 1; i++) {
        for (let j = 0; j < v.length - i - 1; j++) {
            let a = arr[v[j]], b = arr[v[j + 1]]
            if (a.toLowerCase().charCodeAt(0) > b.toLowerCase().charCodeAt(0)) {
                let tmp = arr[v[j]];
                arr[v[j]] = arr[v[j + 1]];
                arr[v[j + 1]] = tmp;
            }
        }
    }
    return arr  //2: 将执行完的结果返回就可以
}
function solve(input) {
    let arr = bubble([...input])
    console.log(arr.join(''))
}
solve(input)