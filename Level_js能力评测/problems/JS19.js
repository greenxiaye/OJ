function count(start, end) {
    // 第一个数需要立即输出
    console.log(start++)
    let task = () => {
        if (start <= end) {
            console.log(start++)
        } else {
            cancel()
        }
    }
    //每隔 100 毫秒 console
    let interval = setInterval(task, 100)
    //包含一个 cancel 方法，用于停止定时操作
    let cancel = () => {
        clearInterval(interval)
    }
    return { cancel }
}
let start = 100
let end = 110
console.log(count(start, end))

// 描述
// 实现一个打点计时器，要求
// 1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
// 2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
// 3、第一个数需要立即输出