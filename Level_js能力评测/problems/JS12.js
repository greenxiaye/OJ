function duplicates(arr) {
    let newArr = JSON.parse(JSON.stringify(arr));
    let ans = new Set() //Set(0) {}
    console.log(ans)
    for (let i = 0; i < newArr.length; i++) {
        let index = arr.indexOf(newArr[i])
        let tmp = newArr[i]
        if (index !== -1) {
            newArr.splice(index, 1);
            // 删除该元素再次判断是否存在
            if (newArr.indexOf(tmp) !== -1) {
                ans.add(tmp)
            }
        }
    }
    // set转array
    return Array.from(ans)
}
let arr = [1, 2, 4, 4, 3, 3, 1, 5, 3]
console.log(duplicates(arr))

function duplicates_(arr) {
    let obj = new Object();
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }

    }
    let keys = Object.keys(obj)
    let ans = [];
    keys.forEach(item => {
        if (obj[item] > 1) {
            ans.push(parseInt(item))
        }
    })
    return ans
}

// 描述
// 找出数组 arr 中重复出现过的元素（不用考虑返回顺序）

//简单的做法排序后
// if(arr[i]==arr[i+1]&&arr[i]!=arr[i-1])
//或者判断indexOf和lastIndexOf
// if(arr.indexOf(ele)!=arr.lastIndexOf(ele)&&newarr.indexOf(ele)==-1)