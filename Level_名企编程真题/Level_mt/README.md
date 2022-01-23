# OJ 机试 hw

## Origin

> <https://www.nowcoder.com/exam/oj?tab=%E5%90%8D%E4%BC%81%E7%BC%96%E7%A8%8B%E7%9C%9F%E9%A2%98&topicId=128&page=1>

## Problems

> 字符串

- [MT27](./problems/简单/MT27.js) 交错序列
  - [MT27](./problems/简单/MT27.js) 交错序列（递归）

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
