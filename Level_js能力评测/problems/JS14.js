function findAllOccurrences(arr, target) {
    // 想太多 做复杂了
    let newArr = JSON.parse(JSON.stringify(arr));
    let ans = []
    let cnt = 0
    while (newArr.indexOf(target) !== -1) {
        cnt += newArr.indexOf(target)
        ans.push(cnt)
        newArr.splice(newArr.indexOf(target), 1)
        cnt++;
    }
    return ans
}
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c']
let target = 'a'
console.log(findAllOccurrences(arr, target))
// 描述
// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置

//简单的就直接遍历，如果相同就放入下标
// return item===target&&result.push(index);

//或者 从下一个index开始 不需要splice
// index=arr.indexOf(target,index+1);