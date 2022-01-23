function identity(val, val2) {
    return Object.is(val, val2);
}
function identity_(val1, val2) {
    if (val1 === val2) {
        if (1 / val1 == -1 / val2) { // 针对+0、-0
            return false;
        } else {
            return true;
        }
    } else if ((typeof val1 === 'number') && (typeof val2 === 'number') && (isNaN(val1)) && (isNaN(val2))) {
        return true; // 针对NaN
    } else {
        return false;
    }
}
//因为NaN和NaN在==下是不相等的，但其实是相等的
//console.log(NaN==NaN)//false

//因为+0和-0在==下是相等的，但其实是不相等的
// console.log(+0 == -0)//true

//ES6的Object.is 解决了
//Object.is要求
//+0不等于-0，NaN等于自身

function identity_(val1, val2) {
    if (x === y) {
        // 针对+0 不等于 -0的情况
        return x !== 0 || 1 / x === 1 / y;
    }
    // 针对NaN的情况
    return x !== x && y !== y;
}