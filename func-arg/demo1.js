function infomation(name, money, birthday, color, likes, follow, age) {
    return `${name} ${money} ${birthday} ${color} ${likes} ${follow} ${age}`
}

let user = {
    name: '李丹',
    sex: '女',
    money: '1个亿',
    birthday: '11月12日',
    color: '红色',
    likes: ['写'],
    follow: '黄渤',
    age: 16,
}
// let name = name;
infomation(user);
