let input1 = "msatgfqpleswalkvowbcjllbmtxdjqtxlxoyrobrnpuctrcowegmyjjmgkzibmbplpslbsfawrqmzeckiwctwizhpkthvqaukxmzhyqbhhjbihzoidheibsrfbzaruhlwoiwlexwoaicikadrhcvevcnwxwsskooedipgftdfcmdpdonvjtzsncuylrbfzstplfsnebivzdyhhbajfokqvscrzobdzgnfkeqfhzpugbekegaiidhervdsgc"
let input2 = "kicndbvtazczllcipodvlrliqargjayiivkuymrusywvotxycdzscogyejpvfmrldueulwijytocrf"
function solve(input1, input2) {
    // 这一步swap很重要，否则满足不了提议
    if (input1.length > input2.length) {
        let tmp = input1
        input1 = input2
        input2 = tmp
    }
    let maxStr = ""
    let i = 0
    let j = 0
    // 暴力枚举字符串input1的所有子串
    for (let i = 0; i < input1.length; i++) {
        for (let j = i; j < input2.length; j++) {
            let str = input1.slice(i, j + 1)
            // 判断该子串是否在input2里出现
            if (input2.indexOf(str) === -1) {
                break
            }
            if (str.length > maxStr.length) {
                maxStr = str
            }

        }
    }
    console.log(maxStr)
}
solve(input1, input2)

