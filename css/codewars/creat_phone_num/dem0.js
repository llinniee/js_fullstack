// 编写一个函数, 它接受一个由10个整数组成的数组，0-9之间，该函数以形似（123）456-7890
// [1,2,3,4,5,6,7,8,9,0]
// 第一种方法
// const createPhoneNumber = (arr) => "(" + arr[0] + arr[1] + arr[2] + ")" + 
// arr[3] + arr[4] + arr[5] + "-" + arr[7] + arr[8] + arr[9];
// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";
    for(var i = 0; i < format.length; i++) {
        format= format.replace('x',numbers[i])
    }
}
createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);