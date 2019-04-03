const people = [
    {age: 46, name: 'rage'},
    {age: 99, name: 'xinnn'},
    {age: 26, name: 'llly'},
    {age: 74, name: 'cnnn'},
]
var orderPeople = function (people) {
    return people.sort((a,b) => {
        return b.age - a.age 
    })
}
console.log(orderPeople(people));