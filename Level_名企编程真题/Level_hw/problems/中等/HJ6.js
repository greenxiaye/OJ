let input = "78"
function solve(preInput) {
    input = Number(preInput)
    let sqrtNum = Math.ceil(Math.sqrt(input))
    let arr = new Array()
    for (let i = 2; i <= sqrtNum; i++) {
        while (input % i === 0) {
            arr.push(i)
            input /= i
        }
    }
    if (input > 1) { //或不等于1
        // 这个很关键
        // 1.除了解决本事就是质数如7
        // 2.还排除了1这个数
        // 3.像78，之前的arr只放进去了2和3，现在还要放进去13，13*13>sqrt(78),但没有sqrt会超时
        arr.push(input);
    }
    console.log(arr.join(" "));

}
solve(input)




// 描述
// 功能:输入一个正整数，按照从小到大的顺序输出它的所有质因子（重复的也要列举）（如180的质因子为2 2 3 3 5 ）


// 数据范围： 
// 输入描述：
// 输入一个整数

// 输出描述：
// 按照从小到大的顺序输出它的所有质数的因子，以空格隔开。最后一个数后面也要有空格。

