// 填充顺序从每行的第一列开始，每次都往右上角方向填充元素，即矩阵行坐标递减，列坐标递增，而填充的数字依次增加就行了。
function print_1(input) {
    let arr = new Array()
    let num = 1
    for (let cnt = 0; cnt < input; cnt++) {
        let i = cnt, j = 0;
        arr[i] = new Array()
        while (i >= 0) {
            arr[i][j] = num
            i--;
            j++;
            num++;
        }
    }
    for (let i = 0; i < input; i++) {
        let ans = []
        for (let j = 0; j < input; j++) {
            ans.push(arr[i][j])
        }
        console.log(ans.join(" "))
    }
}
function print(input) {
    let k = 1; //起始元素为1
    for (let i = 1; i <= input; i++) { 
        let arr = []
        arr.push(k)
        let temp = k;
        for (let j = i + 1; j <= input; j++) { 
            temp += j; //每列相差为j
            arr.push(temp)
        }
        console.log(arr.join(" "))
        k += i; 
    }
}
print(4)
// while (input = readline()) {
//     print(input)
// }


// 描述
// 蛇形矩阵是由1开始的自然数依次排列成的一个矩阵上三角形。

// 例如，当输入5时，应该输出的三角形为：

// 1 3 6 10 15

// 2 5 9 14

// 4 8 13

// 7 12

// 11


// 请注意本题含有多组样例输入。

// 输入描述：
// 输入正整数N（N不大于100）

// 输出描述：
// 输出一个N行的蛇形矩阵。