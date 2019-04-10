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
backwards 动画开始时，元素的样式为动画开始时的第一帧
both=forwards+backwards
none
linear规定动画从头到尾的速度是相同的。

 animation 和 transition 里面都可以写 transform ，transform只是一个静态属性。要实现动画还是要结合animation和transition来实现。
 transform-origin: 6.859375rem 32.90625rem;改变旋转点
animation
backwards 动画开始时，
ease规定慢速开始，然后变快，然后慢速结束的过渡效果
ease-in规定以慢速开始的过渡效果
ease-out规定以慢速结束的过渡效果
ease-in-out规定以慢速开始和结束的过渡效果

使用弹性布局时是文本和图片对其的方式
 display inline-flex
align-items center

.swiper-slide:nth-child(1){} 选中具有.swiper-slide类名的第一个元素
属性选择器 开始^ 结束 $ 包含 * 
[class^="swiper-button-"] {}
{ visibility: hidden; / 占据空间，无法点击 / }
{ opacity: 0;  / 占据空间，可以点击 / }
display:none就是“株连性”明显的声明：
 overflow:的默认值是scroll
 -webkit-overflow-scrolling:touch属性，在元素内容有滚动条的时候使用这个属性，可以使滚动比较流畅。
 touch：使用具有回弹效果的滚动, 当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比。同时也会创建一个新的堆栈上下文。
  text-rendering: optimizeLegibility; /* 文本抗锯齿 */ 
     max-width: 960px; margin: 0 auto;
  /* 适配所有的设备 从PC端到移动端 屏幕宽度在变 适配时考虑的是宽度 */
      /* max-width 在PC时生效，960px 左右留白，pc上ok，移动设备时 < 600 max-width失效 平铺整个宽度 */
语义化 main 主体
header 外面放一个div 盒子的责任划分
语义化 + 盒子 （margin-bottom）


 #svg icon
 icon 可以用图片 但是体积大， 要下载
 svg字节 图片是kb 图标就用svg
 polyline 折线 
 daaharray 虚线与实线
 stroke-linecap
 stroke-linejoin
 defs defines 指令 声明我们的组，绘制区域重复绘制
 g group 组合
 ues id  x y 显示在前台上
 svg 就可以负责起来



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
vertical-align middle 垂直居中（图片和文字一起垂直居中）
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
高度怎么做？div padding top：自身的宽度做比例100% 正方形(以父元素的宽作为比例)
自适应设备里的等比例设置 width 百分比
高度用padding-top；
#BFC Block Formatting context (块级格式化上下文)
将一个正常的盒子变成具有BFC渲染规则的盒子
渲染规则 （不会脱离文档流）
1.BFC在页面上是一个独立的容器，最显著的效果就是建立一个独立的空间，外面的元素不会影响BFC里面的元素，反之，里面的元素也不会影响外面的元素。
2.BFC的区域不会与浮动元素的box重叠
3.垂直方向的外边距会发生边距折叠（包括父子元素和兄弟元素）水平方向的外边距不存在边距折叠
4.计算BFC父容器的高度时，会计算浮动元素的高度。就是浮动之后如果加上BFC规则，父盒子不会塌陷。
4.创建条件：
只要overflow不是visiblity;就可以是BFC
float的值不为none
行内快inline-block
表格单元display：table 只要带table
5.绝对定位（absolute，fixed）
6.


#
 box-sizing:border-box;IE盒模型 计算宽高 边框以内的内容都会被计算进去
box-sizing: content-box; 标准盒模型，计算宽高，只有content
 background:linear-gradient(90deg,#ec6534,#f19e44); 渐变效果

 #弹性布局
 是css在移动时代最爽的布局方案，手机端子元素们的对齐方式 水平 主轴 justify-content  
 纵轴 align-items center
 传统方案是img + 兄弟节点 vertical-align:center
  flex 的考点 自适应
  flex:1 比例划分 只给一个元素，占据其他元素之外的所有
  弹性布局是父元素与多个子元素之间的关系
    水平对齐方式，justify-content
    垂直对齐方式 align-items
  弹性布局可能会有剩余空间
 flex-grow: 1; 分配(剩余空间

 父与子们的布局
 background-position:10px 50px; 10代表的是左，50是右
 如何等比例缩放图片 
  background-size: contain; 会有留白 等比例缩放
  background-size: 100%;  //没有等比缩放  照片画质模糊
  background-size: cover; //等比例缩放 但是周围多了的部分会被裁剪掉
  * {margin:0:padding:0;}有性能问题

#浮动
圣杯布局
margin-left
position:left
left:

清除浮动的方法
1.在父元素底部加上一行代码 <div style="clear: left"></div>
2.在父元素中添加浮动，使得父容器一起浮动。
div.content {
  float:left
}
3. 使用css中的伪类after，给父元素div添加一个clearfix的class类

.clearfix::after {
            content:".";
            clear: both;
            display: block;
            height: 0;
            visibility: hidden;
        }
4.BFC块级格式化上下文的效果来弥补父容器的高度塌陷
.content{
overflow:auto scroll hidden;}
5.尼古拉斯大师 方法 把父容器的display设置为table，可以创建一个匿名表格单元，直接出发BFC效果
.content {
  display:table;
}


html用来组织文本
svg用来绘制图形的 矢量图 更小 path 动画更丰富

4.9 喻
快点看到页面，将页面分成几件事
html + css 静态页面
将js jquery Vue等框架，100kb，下载，要执行，要花时间（几十毫秒，几百，或几秒）
window.onload
document.DOMContentLoaded 是js最佳也是最快执行的地方
图片资源 js资源， ajax请求资源 网络依次到达浏览器 不应该影响页面DOM ready

4.10 喻
预加载是完成游戏之前的感受
资源分为两种
精灵图片独立

游戏第一步，先让角色动起来
game 对象 背景 精灵 动画 Phaser给了友好的API 逻辑
preload 预加载
creat 创建游戏场景
update 更新游戏场景
