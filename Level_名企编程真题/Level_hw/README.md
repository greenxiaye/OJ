# OJ 机试 hw

## Origin

> <https://www.nowcoder.com/ta/huawei>

## Problems

> 基础属性

- [HJ7](./problems/入门/HJ7.js) 取近似值

> 位运算

- [HJ15](./problems/入门/HJ15.js) 求 int 型正整数在内存中存储时 1 的个数
- [HJ62](./problems/入门/HJ62.js) 查找输入整数二进制中 1 的个数
- [HJ86](./problems/入门/HJ86.js) 求最大连续 bit 数

> 排序

- [HJ101](./problems/入门/HJ101.js) 输入整型数组和排序标识，对其元素按照升序或降序进行排序

> 字符串

- [HJ11](./problems/简单/HJ11.js) 数字颠倒
- [HJ12](./problems/简单/HJ12.js) 字符串反转
- [HJ73](./problems/简单/HJ73.js) 计算日期到天数转换 （Date）
- [HJ84](./problems/简单/HJ84.js) 统计大写字母个数
- [HJ106](./problems/简单/HJ106.js) 字符逆序
- [HJ1](./problems/中等/HJ1.js) 字符串最后一个单词的长度
- [HJ5](./problems/中等/HJ5.js) 进制转换
- [HJ14](./problems/中等/HJ14.js) 字符串排序
- [HJ34](./problems/中等/HJ34.js) 图片整理
- [HJ40](./problems/中等/HJ40.js) 统计字符
- [HJ46](./problems/中等/HJ46.js) 截取字符串
- [HJ59](./problems/中等/HJ59.js) 找出字符串中第一个只出现一次的字符
- [HJ65](./problems/中等/HJ65.js) 查找两个字符串 a,b 中的最长公共子串
  - [HJ65_2](./problems/中等/HJ65_2.js) (暴力枚举)
- [HJ4](./problems/较难/HJ4.js) 字符串分隔
- [HJ23](./problems/较难/HJ23.js) 删除字符串中出现次数最少的字符
- [HJ81](./problems/较难/HJ81.js) 字符串字符匹配

> 排序

- [HJ31](./problems/简单/HJ31.js) 单词倒排
- [HJ6](./problems/中等/HJ6.js) 质数因子
- [HJ26](./problems/中等/HJ26.js) 字符串排序 (桶排序)
  - [HJ26_2](./problems/中等/HJ26_2.js) 字符串排序 (冒泡排序)
  - [HJ26_3](./problems/中等/HJ26_3.js) 字符串排序 (冒泡排序 2)
- [HJ102](./problems/中等/HJ102.js) 字符统计
  - [HJ102_2](./problems/中等/HJ102_2.js) 字符统计 (sort 自定义排序)
  - [HJ102_3](./problems/中等/HJ102_3.js) 字符统计 (桶排序)

> 数组

- [HJ35](./problems/简单/HJ35.js) 蛇形矩阵
- [HJ13](./problems/较难/HJ13.js) 句子逆序
- [HJ58](./problems/较难/HJ58.js) 输入n个整数，输出其中最小的k个

> 基础数学

- [HJ50](./problems/简单/HJ50.js) 四则运算（正则+双栈法）
- [HJ54](./problems/简单/HJ54.js) 表达式求值（双栈法）
  - [HJ54](./problems/简单/HJ54.js) 表达式求值
- [HJ56](./problems/简单/HJ56.js) 完全数计算
- [HJ108](./problems/简单/HJ108.js) 求最小公倍数

> 哈希

- [HJ10](./problems/中等/HJ10.js) 字符个数统计
- [HJ2](./problems/较难/HJ2.js) 计算某字符出现次数

> 模拟

- [HJ22](./problems/简单/HJ22.js) 汽水瓶

## Notice

1. 判题系统的多个输入输出问题
2. <https://www.nowcoder.com/discuss/276>

> JavaScript(V8)

```JavaScript
    while(line=readline()){
        var lines = line.split(' ');
        var a = parseInt(lines[0]);
        var b = parseInt(lines[1]);
        print(a+b);
    }
```

> JavaScript(Node)

```JavaScript
    var readline = require('readline');
    const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
    });
    rl.on('line', function(line){
    var tokens = line.split(' ');
        console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
    });
```
