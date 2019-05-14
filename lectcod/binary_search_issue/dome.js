function binary_search(arr, data) {
    // 不停地去二分，
    // 停下来，没得再分 min>max
    let min = 0,
        max = arr.length - 1,
        mid;
    while (min <= max) {
        // mid = parseInt((min + max) / 2)
        // mid = min + parseInt((max - min)/2)
        mid = min + ((max-min) >> 1) 位移运算
        if(arr[mid] > data) {
            max = mid - 1;
        } else if (arr[mid] < data) {
            min = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}
// console.log(binary_search([1,21,3,5,47,0,4,9], 10));
// // JavaScript heap out of memory
// 什么出问题？ 一亿左右的大数相加 CPU
// arr[] 物理空间 下标的引用 0-一个亿 for循环没有问题
// mid = (min + max) / 2
// let arr = []
// for (let i = 0; i < 100000000; i++) {
//     arr.push(i)
// }
// console.log(binary_search(arr, 2019));