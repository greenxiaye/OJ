function joinString(str1, str2) {
    // 只限两个数,
    // 不支持
    //functionFunction('Hello','world')
    return [...arguments].join(', ');
}
function functionFunction(str) {
    function _functionFunction(fn) {
        let args = [];
        let len = fn.length;
        return function _c(...newArgs) {
            args = [...args, ...newArgs]
            if (args.length < len) {
                return _c
            } else {
                //参数都接受完毕，打印
                return fn.apply(this, args)
            }
        }
    }
    return _functionFunction(joinString)(str)
}

console.log(functionFunction('Hello')('world'))
