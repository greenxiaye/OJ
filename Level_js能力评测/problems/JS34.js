function base10(str) {
    return parseInt(str, 2)
}
let str = '11000000'
console.log(base10(str))



// 描述
// 给定二进制字符串，将其换算成对应的十进制数字

// 普通
function base10_2(str) {
    var ans=0;
    for(var i=0;i<str.length;i++){
        ans=ans*2+Number(str[i]);
    }
    return ans;
}