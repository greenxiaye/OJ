function joinString(str1, str2, str3) {
    return [...arguments].join(', ');
}
function functionFunction(str) {
    function _functionFunction(fn) {
        let args = []
        let len = fn.length

        return function _c(...newArgs) {
            console.log('len', len)
            console.log('arglen', args.length)
            console.log('args', args)
            console.log('newArgs', newArgs)
            args = [...args, ...newArgs]
            if (args.length < len) {
                console.log(1)
                return _c
            } else {
                console.log(2)
                return fn(args)
            }

        }
    }
    return _functionFunction(joinString)(str)
}
//输出：Hello, World
let ans = functionFunction('Hello')('Vic')('boA')
console.log(ans)