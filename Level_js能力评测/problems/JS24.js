function makeClosures(arr, fn) {
    return arr.map(item => {
        return fn.bind(this, item);
    })
}
let arr = [1, 2, 3]
let fn = function (x) {
    return x * x;
}
let ans = makeClosures(arr, fn)
console.log(ans[2]())

// 描述
// 实现函数 makeClosures，调用之后满足如下条件：
// 1、返回一个函数数组 result，长度与 arr 相同
// 2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同


//如若要求的是result(2)
// function makeClosures(arr, fn) {
//     return function (i) {
//          return fn.call(this, i)
//      }
//  }

// 如若要求的是ans[2]
// 这里就是call和bind的区别
// call
// function makeClosures(arr, fn) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = fn.call(this, arr[i])
//     }
//     return result
// }
// let arr = [1, 2, 3]
// let fn = function (x) {
//     return x * x;
// }
// let ans = makeClosures(arr, fn)
// console.log(ans[2])


// 如若要求的是ans[2]()
// bind
// function makeClosures(arr, fn) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = fn.bind(this, arr[i])
//     }
//     return result
// }
// let arr = [1, 2, 3]
// let fn = function (x) {
//     return x * x;
// }
// console.log(ans[2]())

// 有意思他人的答案
// function makeClosures(arr, fn) {
//     var result=[];
//     for(var i=0;i<arr.length;i++){
//         result.push(function(num){
//             return function(){
//                 return fn(num);
//             }
//         }(arr[i]))
//     }
//     return result;
// }