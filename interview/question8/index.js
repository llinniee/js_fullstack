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

for(let i = 0; i < 10; i++) {
 (function(i) {
   setTimeout(() => {
     console.log(i)
   }, 0);
 })(i)
}