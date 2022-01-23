let input1 = "msatgfqpleswalkvowbcjllbmtxdjqtxlxoyrobrnpuctrcowegmyjjmgkzibmbplpslbsfawrqmzeckiwctwizhpkthvqaukxmzhyqbhhjbihzoidheibsrfbzaruhlwoiwlexwoaicikadrhcvevcnwxwsskooedipgftdfcmdpdonvjtzsncuylrbfzstplfsnebivzdyhhbajfokqvscrzobdzgnfkeqfhzpugbekegaiidhervdsgc"
let input2 = "kicndbvtazczllcipodvlrliqargjayiivkuymrusywvotxycdzscogyejpvfmrldueulwijytocrf"
function solve(input1, input2) {
    // 这一步swap很重要，否则满足不了提议
    if (input1.length > input2.length) {
        let tmp = input1
        input1 = input2
        input2 = tmp
    }
    let len1 = input1.length
    let len2 = input2.length
    let dp = new Array()
    let maxLen = 0
    let end = 0
    for (let i = 0; i <= len1; i++) {
        dp[i] = new Array()
        for (let j = 0; j <= len2; j++) {
            dp[i][j] = 0 //初始化二维数组
        }
    }
    // dp 
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (input1[i - 1] === input2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = 0
            }
            // 这边不大于等于，因为公共子串可能2个，选最先出现的
            if (dp[i][j] > maxLen) {
                maxLen = dp[i][j]
                end = i - 1
            }
        }
    }
    if (maxLen == 0) {
        console.log(-1)
    } else {
        console.log(input1.substr(end - maxLen + 1, maxLen))
    }
}
solve(input1, input2)


// 描述
// 查找两个字符串a,b中的最长公共子串。若有多个，输出在较短串中最先出现的那个。
// 注：子串的定义：将一个字符串删去前缀和后缀（也可以不删）形成的字符串。请和“子序列”的概念分开！

// 本题含有多组输入数据！
// 数据范围：字符串长度，
// 进阶：时间复杂度：，空间复杂度：
// 输入描述：
// 输入两个字符串

// 输出描述：
// 返回重复出现的字符
