// [1,2,3,4] 求出平均值

const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length  //rest
console.log(average(...[1,2,3,4])); //spread 
