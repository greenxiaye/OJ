// let full = readline()
let full = 81 //满瓶
let empty = 0; //空瓶
let canChange = 0; //能换的瓶子
let ans = 0
while (parseInt(full / 3)) {
    canChange = parseInt(full / 3)
    // 初始化一下
    ans = ans + canChange
    full = full - canChange * 3
    empty = empty + canChange * 3
    // 为下一次初始化
    if (canChange) {
        full = full + canChange;
        empty = empty - canChange * 3
    }
    // 例外的情况m
    if (full === 2 && empty === 0) {
        ans = ans + 1
    }
}
console.log(ans)


// 自己的提交
function ans_() {
    while (line = readline()) {
        let full = line; //满瓶
        let canChange = 0; //能换的瓶子
        let ans = 0
        while (parseInt(full / 3)) {
            canChange = parseInt(full / 3)
            ans = ans + canChange
            full = full - canChange * 3 + canChange
            if (full === 2) {
                ans = ans + 1
            }
        }
        if (line > 0) {
            console.log(ans)
        }
    }
}




// 描述
// 有这样一道智力题：“某商店规定：三个空汽水瓶可以换一瓶汽水。小张手上有十个空汽水瓶，她最多可以换多少瓶汽水喝？”答案是 5 瓶，方法如下：先用 9 个空瓶子换3瓶汽水，喝掉 3 瓶满的，喝完以后 4 个空瓶子，用 3 个再换一瓶，喝掉这瓶满的，这时候剩 2 个空瓶子。然后你让老板先借给你一瓶汽水，喝掉这瓶满的，喝完以后用 3 个空瓶子换一瓶满的还给老板。如果小张手上有 n 个空汽水瓶，最多可以换多少瓶汽水喝？

// 数据范围：输入的正整数满足 

// 注意：本题存在多组输入。
// 允许如题面所述向老板借汽水。
// 输入的 0 仅表示输入结束，并不用输出结果
// 输入描述：
// 输入文件最多包含 10 组测试数据，每个数据占一行，仅包含一个正整数 n（ 1<=n<=100 ），表示小张手上的空汽水瓶数。n=0 表示输入结束，你的程序不应当处理这一行。

// 输出描述：
// 对于每组测试数据，输出一行，表示最多可以喝的汽水瓶数。如果一瓶也喝不到，输出0。

// 输入：
// 3
// 10
// 81
// 0
// 复制
// 输出：
// 1
// 5
// 40
// 复制
// 说明：
// 样例 1 解释：用三个空瓶换一瓶汽水，剩一个空瓶无法继续交换
// 样例 2 解释：用九个空瓶换三瓶汽水，剩四个空瓶再用三个空瓶换一瓶汽水，剩两个空瓶，向老板借一瓶汽水喝完得三个空瓶换一瓶汽水还给老板 


//有意思的答案
// 相当于每两个空瓶可以换到一瓶汽水
function ans_3() {
    let line = ""
    while (line = readline()) {
        if (line != '0') {
            console.log(parseInt(line / 2))
        }
    }
}