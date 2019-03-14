//玩家1 玩家2 
//object 类
//JSON object 难以完成此job
//玩家类 es5 没有class关键字
//大写首字母的函数 构造函数 
//Player一个函数首字母大写约束，区别于普通函数 //构造函数 构造对象的过程
// 函数是js里的一等对象，就是除了基本数据类型之外，都是对象Object，函数是可以被运行的对象
function Player(name) { 
    // js 函数和其他语言不一样，函数一定会存在一个this，指针，总会指向点什么
    // 常在， 答应
    // this指向实例化后的对象
    // console.log(this);
    this.name = name; //函数类this.name相当于一个对象的属性
    this.enemy = null;
}
Player.prototype.win = function() {
    console.log(this.name+"win");
}
Player.prototype.lose = function() {
    console.log(this.name+"lose");
}

//将类实力化 类是一个抽象的概念,对象可以new出来
//运行方式//new方式来运行通俗点来说便是便是属性，孕育爱情
//上线
var player1 = new Player("皮蛋");  
console.log(player1.name + "上线了");
var player2 = new Player("小乖");
console.log(player2.name + "上线了");
//成为对手的过程 来一把

//游戏过程
player1.win();
player2.lose();
// console.log(player2.name);
// console.log(player1.name);