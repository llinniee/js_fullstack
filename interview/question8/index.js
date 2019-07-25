function Person (name) {
  this.name = name
}
let p = new Person('gz')

// 1.p.__proto__等于什么Person.prototype
// 2.Person.__proto__等于 Function.prototype
// 实例的隐式原型链等于其构造函数的显示原型链


var foo = {},
  F = function() {};
  Object.prototype.a = 'valA'
  Function.prototype.b = 'valB'
  console.log(foo.a)
  console.log(foo.b)

function Person (name) {
  this.name = name
  return {}
}
 let o = Person('gz')
 console.log(o)

//  构造函数是不需要换回值的，使用new 来创建对象时，如果return 的是非对象，会忽略返回值，
// 如果 return 的是对象，则返回该对象（若return null 也会忽略返回值）

function Person (name) {
  this.name = name
}

function Student () {

}

Student.prototype = Person.prototype
Student.prototype.constructor = Student

let s = new Student('gz')
console.log(s instanceof Person)

for(let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  },0)
}
// var 每次循环会覆盖掉上一次的作用域

// for(let i = 0; i < 10; i++) {
//  (function(i) {
//    setTimeout(() => {
//      console.log(i)
//    }, 0);
//  })(i)
// }

var myArry = [1, 2, 3, 4, 5, 6, 7]

for(let index of myArry) {
  console.log(index)
}
//  用for in 可以用来遍历数组，但是不建议用for in，
// 因为其会遍历数组所有可枚举属性，包括原型链，所以for in 更适合遍历对象
// for in 
// 1.index 索引为字符串型的数字，不能直接进行几何运算
// 2.遍历顺序有可能不是按照实际数组的内部顺序进行的


// for of
// for in遍历的是数组的索引，for of 遍历的是数组的元素
// for of遍历的只是数组内的元素，而不包括数组原型属性和索引

let gArr = [1,2,[3,4], 5,[2,7,[3,9]]]
let oArr = [1,2,3,4,5,2,7,3,9]

function outputArr(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(outputArr(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}

function outputArr (arr) {
  return arr.reduce(function(pre, item) {
    return pre.concat(Array.isArray(item) ? outputArr(item) : item)
  }, [])
}