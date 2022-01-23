let input = "A Famous Saying: Much Ado About Nothing (2012/8)."
function bubble(arr) {     // 1:套一个函数的壳子，将参数传入
    let reg = /[a-zA-Z]/
    //外层循环，控制趟数，每一次找到一个最大值
    for (var i = 0; i < arr.length - 1; i++) {
        // 内层循环,控制比较的次数，并且判断两个数的大小
        for (var j = 0; j < arr.length - 1 - i; j++) {
            // 如果前面的数大，放到后面(从小到大的冒泡排序)
            if (reg.test(arr[j])) {
                let next = j + 1
                while (next < (arr.length - 1 - i) && !reg.test(arr[next])) {
                    next++; //不符合则找到下一个字母
                }
                if (reg.test(arr[next]) && arr[j].toLowerCase().charCodeAt(0) > arr[next].toLowerCase().charCodeAt(0)) { //交换
                    let temp = arr[j];
                    arr[j] = arr[next];
                    arr[next] = temp;

                }
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