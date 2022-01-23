function containsNumber(str) {
    // 正则，test
    // var reg=/[0-9]/g
    var reg = /\d/;
    return reg.test(str);
}
let str = 'abc123'
let ans = containsNumber(str)
console.log(ans)

// 描述
// 给定一个构造函数 constructor，请完成 alterObjects 方法，将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量。

// 正则 match
// str.match(/\d/g) //['1','2','3']
function containsNumber_1(str) {
    return !!str.match(/\d/g);
}

//普通

function containsNumber_2(str) {
    for (var i = 0; i < 10; i++) {
        if (str.indexOf(i) != -1) {
            return true;
        }
    }
    return false;
}

// 有意思的做法
// 判断与数字相加是不是 NaN，不是NaN说明字符串中包含数字
function containsNumber_3(str) {
    for(var i=0;i<str.length;i++){
        if(!isNaN(str.charAt(i) + 1)){
            return true;
        }
    }
    return false;
}


// 1、^表示匹配字符串的首字符。

// 2、$表示匹配字符串的尾字符。

// 3、\d表示匹配数字。

// 4、a-z表示匹配任意英文字母。

// 5、[]是集合的意思，表示一个字符是[]中任意一个。

// 6、+表示匹配1个或1个以上，[]+表示匹配[]中的1个以上字符。

// 7、表达式后面的i表示忽略大小写。

// 8、test函数用于验证字符串是否满足正则表达式，如果满足该正则表达式返回true，否则返回false。