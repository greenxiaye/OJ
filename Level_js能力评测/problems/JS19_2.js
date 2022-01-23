
let st //函数里面定义var st会不通过
function count(start, end) {
    // 第一个数需要立即输出
    if (start <= end) {
        console.log(start++)
        //每隔 100 毫秒 console
        st = setTimeout(() => { count(start, end) }, 100)
    }
    //包含一个 cancel 方法，用于停止定时操作
    let cancel = () => {
        clearTimeout(st)
    }
    return { cancel }
}
let start = 100
let end = 110
console.log(count(start, end))

//不小心的错误写法
//  let st = setTimeout( count(start, end), 100)
//注意返回是函数，上面的写法返回的是个值