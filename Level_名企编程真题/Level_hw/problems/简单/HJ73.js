let input = "2012 12 31"
function solve(input) {
    let [year, month, day] = input.split(/\s+/)
    let prevYear = Number(year)
    let preDate = new Date(prevYear + '/01/01')
    let curDate = new Date(year, month - 1, day)
    console.log(year, month, day, curDate)
    let days = Math.abs(curDate - preDate) / 1000 / 60 / 60 / 24
    console.log(Math.ceil(days) + 1)
}
function solve_2(input) {
    let [year, month, day] = input.split(/\s+/)
    let sum = 0
    for (var i = month - 1; i > 0; i--) {
        sum += new Date(year, i, 0).getDate()
    }
    console.log(sum + Number(day))
}
function solve_3(input) {
    let arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let [year, month, day] = input.split(/\s+/)
    let sum = 0
    for (let i = 1; i < month; i++) {
        sum += arr[i - 1]
    }
    sum += Number(day)
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
        //闰年并且月份大于2
        if (month > 2) {
            sum++
        }
    }
    console.log(sum)
}
solve(input)

// 描述
// 根据输入的日期，计算是这一年的第几天。
// 保证年份为4位数且日期合法。
// 进阶：时间复杂度：，空间复杂度：
// 输入描述：
// 输入一行，每行空格分割，分别是年，月，日

// 输出描述：
// 输出是这一年的第几天