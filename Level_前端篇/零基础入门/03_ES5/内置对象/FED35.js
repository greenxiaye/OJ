function _date(number) {
    let date = new Date(number)
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    // console.log(date,year,month,day)
    //2021-09-09T03:56:16.311Z 2021 8 9

    //console.log(date.toString())
    //Thu Sep 09 2021 11:56:16 GMT+0800 (China Standard Time)

    // console.log(date.toLocaleString())
    // 9/9/2021, 11:56:16 AM

    return `${year}-${month + 1}-${day}`
}
console.log(_date(1631159776311))


// 描述
// 请补全JavaScript函数，要求以字符串的形式输出时间戳参数所对应的"年-月-日"。
// 示例：
// 1. _date(1631159776311) -> '2021-9-9'

// 有意思的大佬的答案
// https://www.nowcoder.com/profile/359668411
function _date_2(number) {
    //不要投机取巧,要靠自己的实力!

    //1天=24小时=24*60分钟=24*60*60秒=24*60*60*1000毫秒
    let msInDay = 24 * 60 * 60 * 1000;//一天有多少毫秒
    let days = Math.floor(number / msInDay);//这些毫秒等于多少天
    //从计算机元年算起
    let year = 1970;
    let month = 1;
    let date = 1;
    //循环:用天数计算月日
    while (true) {
        //判断闰年,计算2月的天数
        let february = year % 4 == 0 && year % 100 !== 0 || year % 400 == 0 ? 29 : 28;
        //     月份表     1     2     3  4  5  6  7  8  9 10 11 12
        let daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let currentDaysInMonth = daysInMonth[month - 1];//获取当月的天数
        //剩余天数够不够当月
        if (days > currentDaysInMonth) {
            //如果够,就做减
            days -= currentDaysInMonth;
            month++;//增加月数
        } else {
            //否则就追加到日数
            date += days;
            //到这时,就计算完成了
            return `${year}-${month}-${date}`;
        }
        //当月数大于12时,就说明本年已完结
        if (month > 12) {
            month = 1;//月数归1
            year++;//年份增加
        }
    }
}