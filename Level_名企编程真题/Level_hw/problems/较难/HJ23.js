let input = "assssa"
function solve(input) {
    let map = new Map();
    let minCnt = input.length
    //统计字符个数
    for (let i = 0; i < input.length; i++) {
        let v = ""
        if (v = map.get(input[i])) {
            map.set(input[i], v + 1)
        } else {
            map.set(input[i], 1)
        }
    }
    //找最小值
    for (let arrItem of map) {
        minCnt = Math.min.apply(null, [minCnt, arrItem[1]])
    }
    // map.forEach((value, key) => {
    //     console.log(value, key)
    // })
    let ans = input.split("").filter(item => {
        return map.get(item) > minCnt
    })
    console.log(ans.join(""))
}
solve(input)


// 描述
// 实现删除字符串中出现次数最少的字符，若多个字符出现次数一样，则都删除。输出删除这些单词后的字符串，字符串中其它字符保持原来的顺序。
// 注意每个输入文件有多组输入，即多个字符串用回车隔开

// 数据范围：输入的字符串长度满足  ，保证输入的字符串中仅出现小写字母
// 输入描述：
// 字符串只包含小写英文字母, 不考虑非法输入，输入的字符串长度小于等于20个字节。

// 输出描述：
// 删除字符串中出现次数最少的字符后的字符串。