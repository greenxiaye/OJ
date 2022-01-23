function _search(string) {
    return string.search(/\d/) !== -1 ? true : false
}
function _search_2(string) {
    return [...string].find(c => Number(c)) === 0 ? false : true
}
function _search_3(string) {
    for (let char of string) {
        if (!Number.isNaN(char)) return true;
    }
    return false;
}
console.log(_search("scd13"));


// 描述
// 请补全JavaScript函数，要求以boolean的形式返回字符串参数中是否包含数字。