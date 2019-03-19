#红包规则
function hongbao(total, num) {

}
运算算法，复杂运算，变量的定义，值得存储空间
-随机性
  公平 total/num
  total num restAmount  restNum
  arr [] 
-红包的总额红包金额
 n-1 人随机，最后一个拿余下。
 for (let i =0; i < n-1; i++){
}
restAmount
Math 是数学对象， 一切皆对象
Math.random()  Date Reg NodeList Array
Math.ceil向上取整
Math.round四舍五入
Math.floor乡下取整
Function {}
toFixed(2)取两位小数

Math.floor(Math.random()*(max-min)) + min

##2019.3.15
animation: titleIn .25s 0s linear forwards;
.25表示持续时间
linear规定动画从头到尾的速度是相同的。

 animation 和 transition 里面都可以写 transform ，transform只是一个静态属性。要实现动画还是要结合animation和transition来实现。
 transform-origin: 6.859375rem 32.90625rem;改变旋转点
animation
 ease规定慢速开始，然后变快，然后慢速结束的过渡效果

ease-in规定以慢速开始的过渡效果

ease-out规定以慢速结束的过渡效果

ease-in-out规定以慢速开始和结束的过渡效果

audio 属性 autopaly loop control
 类名切换
 musicBtn.classList.remove('off');
 musicBtn.classList.add('off');
 musicBtn.classList.toggle('off');


 #svg icon
 icon 可以用图片 但是体积大， 要下载
 svg字节 图片是kb 图标就用svg
 polyline 折线 
 daaharray 虚线与实线


#百度css格式化 
open in tab 打开代码
animation里的属性 steps()将一的段数分段行走

#css的命名词汇
块级元素：div、h1~h6、p、hr、form、ul、dl、ol、li、dd、dt、pre、table、th、td
行内元素： em、span、strong、a、br、img、button、input、label、select、textarea、code、script
feeds -item content
- html结构及布局
从上到下从左到右 ，语义化和功能
a,span标签是一个行内元素
#套路
content>h3+p
舍得做盒子，盒子模型
结构没有写好不要写样式
a作为盒子，在移动端是很正常的（display:block)
行高line-height是两行汉字之间的距离   padding margin line-hight
只显示三行：-webkit-line-clamp: 3;-webkit-box-orient: vertical;
tmall 商铺信息是由商家填的，他的高度，不被限制
display：-webkit-box;新的盒子模型，像flex来划分父元素的空间。
overflow：hidden
-webkit-line-clamp 行数
-webkit-box-orient：vertical；
# 浮动 float: left right
离开文档流 将要浮动的元素写在最前面，
左右布局
在弹性布局之前，我们一般借助浮动来布局
图片的宽高？ 宽度用百分比，自适应的要求，
高度怎么做？div padding top：自身的宽度做比例100% 正方形
自适应设备里的等比例设置 width 百分比
高度用padding-top；

#
 box-sizing:border-box;IE盒模型 计算宽高 边框以内的内容都会被计算进去
box-sizing: content-box; 标准盒模型，计算宽高，只有content
 background:linear-gradient(90deg,#ec6534,#f19e44); 渐变效果

 #弹性布局
 父与子们的布局
 background-position:10px 50px; 10代表的是左，50是右
 如何等比例缩放图片 
  background-size: contain; 会有留白 等比例缩放
  background-size: 100%;  //没有等比缩放  照片画质模糊
  background-size: cover; //等比例缩放 但是周围多了的部分会被裁剪掉
  * {margin:0:padding:0;}有性能问题









