let input = "aabb"
function solve(input) {
    let obj = new Object()
    for (let i = 0; i < input.length; i++) {
        if (obj.hasOwnProperty(input[i])) {
            obj[input[i]] = obj[input[i]] + 1
        } else {
            obj[input[i]] = 1
        }
    }
    let arr = Object.keys(obj)
    let ans = -1
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === 1) {
            ans = arr[i]
            break
        }
    }
    console.log(ans)
}
solve(input)




// 描述
// 找出字符串中第一个只出现一次的字符


// 数据范围：输入的字符串长度满足 


// 输入描述：
// 输入几个非空字符串

// 输出描述：
// 输出第一个只出现一次的字符，如果不存在输出-1

function solve_2() {
    var str = "aabbm"
    let res = -1;
    for (let i = 0; i < str.length; i++) {
        // let reg=`/${str[i]}/g`
        let reg = new RegExp(`${str[i]}`, 'g');
        if (str.match(reg).length == 1) {
            res = str[i];
            break;
        }
    }
    console.log(res)
}