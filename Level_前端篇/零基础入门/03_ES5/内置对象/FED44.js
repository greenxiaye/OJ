function _floor(number) {
    // return Math.floor(number);
    console.log(number % 1);//0.799
    // return ~~number;
    return number - number % 1;
}
console.log(_floor(2.8))

// 描述
// 请补全JavaScript函数，要求以数字的形式返回数字参数向下取整的结果。