let input = "aaddccdc"
function solve(input) { //桶排序
    let map = new Map();
    let maxCnt = 1
    // 统计出现的字数 用map去重
    for (let i = 0; i < input.length; i++) {
        if (v = map.get(input[i].charCodeAt(0))) {
            map.set(input[i].charCodeAt(0), v + 1)
            maxCnt = Math.max.apply(null, [maxCnt, v + 1])
        } else {
            map.set(input[i].charCodeAt(0), 1)
        }
    }
    let ans = ""
    // 遍历次数
    for (let count = maxCnt; count > 0; count--) {
        // 如果次数相同，则根据ASCII码升序
        for (let j = '0'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
            if (map.get(j) == count) {
                ans += String.fromCharCode(j)
            }
        }
    }
    console.log(ans)
}
solve(input)

function others_ans() {
    let line = "1b1bbbbbbbbb"
    function getRes(str) {
        let temp = str.split('');
        let map = temp.reduce((map, item) => {
            map[item] ? map[item]++ : map[item] = 1;
            return map
        }, {});
        console.log("map", map)
        let result = []

        let newArr = Object.values(map).sort((a, b) => b - a);
        let keys = Object.keys(map).sort();
        // 次数arr从大到小
        // key arr按照字典顺序
        // 但大体还是按照次数排序
        for (let i of newArr) {
            for (let j of keys) {
                if (map[j] == i && !result.includes(j)) {
                    result.push(j)
                }
            }
        }
        return result.join('')
    }


    let res = getRes(line)
    console.log(res)
}