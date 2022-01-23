function _join(array) {

    console.log(String(array));//1,2,3 
    return array.join('');

}
console.log(_join(['1', '2', '3']))

// 描述
// 请补全JavaScript函数，要求将参数数组转换为字符串输出。
// 示例：
// 1. _join([1,'2',3]) -> "123"
// 注意：只需考虑一维数组且数据类型为原始数据类型。