#作用域
通过 var 定义的变量，不论其在函数中什么位置定义的，都将被视作在函数顶部定义，这一特定被称为提升（Hoisting）。
通过var声明的变量没有块级作用域。
使用 let 和 const 声明的变量是有块级作用域的。
let允许你声明一个作用域被限制在块级中的变量、语句或者表达式。与var关键字不同的是，它声明的变量只能是全局或者整个函数块的。
const常量是块级作用域，很像使用 let 语句定义的变量。常量的值不能通过重新赋值来改变，并且不能重新声明。
变量的作用域无非就是两种：全局变量和局部变量。对于局部变量的查找，是按照链式作用域进行查找的。

getBoundingClientRect是DOM元素到浏览器可视范围的距离（不包含文档卷起的部分）。该函数返回一个Object对象，该对象有6个属性：top,lef,right,bottom,width,height；这里的top、left和css中的理解很相似，width、height是元素自身的宽高，但是right，bottom和css中的理解有点不一样。right是指元素右边界距窗口最左边的距离，bottom是指元素下边界距窗口最上面的距离。
diffX = 鼠标的x坐标 - 元素对象的offset.Left 

setTimeout()可以用来在指定的时间之后单次调用函数。
clearTimeout();取消函数的执行
setInterval()可以用来指定的时间之后重复调用函数。
clearInterval(); //取消函数的调用

audio 属性 autopaly loop control
 类名切换
 musicBtn.classList.remove('off');
 musicBtn.classList.add('off');
 musicBtn.classList.toggle('off');


#stylus 预编译语言 .styl
npm stall -g stylus 安装stylus
在浏览器端运行的是css
前端工作流在发生改变
界面开发工作被重新定义，从小米加步枪变生产线
-w stylus common.styl -o common.css 监听文件修改同时修改
stylus起到了编译作用 -o 输出
stylus 提供了css不具备的变量定义，模块化，函数，快捷  新的语法。
1.变量
2.减少输入{} ： ;
3.函数
4.嵌套
    .book-bought 购买模块
        .label
            img
    & 引用上一级的层次类名，同时可以缩进
    省去重复上一次的选择

