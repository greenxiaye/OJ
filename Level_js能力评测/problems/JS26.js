function useArguments() {
    console.log(Array.from(arguments));//ES6
    return [...arguments].reduce((a, b) => a + b)
}
let ans = useArguments(1, 2, 3, 4);
console.log(ans);

// 描述
// 函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。