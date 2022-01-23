let input = "A Famous Saying: Much Ado About Nothing (2012/8)."
function solve(input) {
    let str = [...input]
    let bucket = new Array() //桶排序二维数组
    let isWord = new Array(str.length)
    let reg = /[a-zA-Z]/
    // 遍历第一次做一些初始化
    for (let i = 0; i < str.length; i++) {
        if (reg.test(str[i])) {
            isWord[i] = true
            let index = str[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
            // 将字母加入相应的桶中，因为下标，所以会自然排好序
            if (bucket[index]) {
                bucket[index].push(str[i])
            } else {
                bucket[index] = new Array()
                bucket[index].push(str[i])
            }

        }
    }
    // console.log(bucket)
    let cnt = 0
    // 遍历第二次，改变值
    for (let i = 0; i < str.length; i++) {
        if (isWord[i]) {
            while (!bucket[cnt] || !bucket[cnt].length) {
                //不存在undefined or length为0
                cnt++
            }
            str[i] = bucket[cnt].shift()
        }
    }
    console.log(str.join(''))
}
solve(input)

// 描述
// 编写一个程序，将输入字符串中的字符按如下规则排序。

// 规则 1 ：英文字母从 A 到 Z 排列，不区分大小写。

// 如，输入： Type 输出： epTy

// 规则 2 ：同一个英文字母的大小写同时存在时，按照输入顺序排列。

// 如，输入： BabA 输出： aABb

// 规则 3 ：非英文字母的其它字符保持原来的位置。


// 如，输入： By?e 输出： Be?y


// 注意有多组测试数据，即输入有多行，每一行单独处理（换行符隔开的表示不同行）

// 数据范围：输入的字符串长度满足  

// 输入描述：
// 输入字符串
// 输出描述：
// 输出字符串

// 有意思的答案
function solve_() {
    while (line = readline()) {
        let res = '';
        let arr = line.split('');
        let sorted = [];
        for (let i = 0; i < 26; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].charCodeAt(0) == 65 + i || arr[j].charCodeAt(0) == 97 + i) {
                    sorted.push(arr[j])
                }
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (!/[A-Za-z]/g.test(arr[i])) {
                sorted.splice(i, 0, arr[i])
            }
        }
        console.log(sorted.join(''));
    }
}