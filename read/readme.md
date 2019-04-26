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

4.11 喻
将js走向后端
没有DOM
有命令行 有服务器
文件系统
代码的书写顺序和执行不一样
如何确保顺序
回调解决带来了回调地狱 可读性很差
使用Promise 
拆分promise来理解
-解决耗时这一类问题 new Project
问题解决后，控制权的转移，能够得以控制，js是一个单线程语言
resolve => then
resolve(data)
代码的编写顺序和执行顺序是一致的。异步问题就变成同步的了。
callback 读很难
reject I/O等操作有可能发生问题
多个文件确保执行顺序 then链
在每个promise then里返回一个promise
如果我们要让多个文件迸发去执行 当所有文件都读取完，再执行？


canvas 绘图API
首先，我们要知道实现动画的步骤，一般分为四步：
清空canvas（使用clearRect()或全图绘制）
保存canvas状态（可选）
绘制动画图形
恢复canvas状态（一般在第二步的基础上使用）
著作权归作者所有。
商业转载请联系作者获得授权,非商业转载请注明出处。
原文: http://ghmagical.com/article/page/id/rf5VpT3YQPpN © ghmagical.com

4.12 喻导
订阅发布者模式是前端核心模式
一个发布者
浏览器的事件模型
当事假发生时，通知多个订阅者呢


4.16喻
canEatAllBananas 通过体力活可以试出mid的值
试多少次？ n
1 最大把数香蕉数

4.17喻
目录， 最像哪种数据结构 树
DOM 标签节点 文本节点
一个目录下的所有文件/目录
readdir 目录下的所有子元素
I/O操作 耗时异步 callback 
js是单线程的 前端js在DOm里 Ajax
线程的控制权交给主线程的话

js node 来到了后端 整台服务器
promise 可以解决异步变同步，可不可以直接同步呢
readdirSync 
Sync 同步 Async异步

正则表达式
验证或匹配字符串或文本的规则， object的一种
用于快速检索文本 / ^{}$/
test match exec 方法

递归是遍历的要素
目录下有字目录
目录下的所有文件
 文件以及交给子目录重复这件事
 复杂的事情分成n件简单类似的事情
 有退出条件
 

 4.18喻
 landscape 横屏 portrait竖屏
 js模块化
 一个类就是一个模块，有利于代码功能的分离
 Round_item 封装
 其余的代码是业务代码， 要注意抽离模块， 有利于代码的维护和复用

 canvas 基本api
 context.beginPath(); //开始绘制
 context.closePath(); //结束绘制
 context.fill()/stroke();

 小程序是个伟大的产品
 Android/IOS 两套代码
 小程序使用前端开发思路和技术，基于微信大app，App开发
 1.一份代码，到处运行
 2.前端开发， 快快快
 3.基于微信 性能良好
 wxml == html
  新的标签或组件 view = div
  wxcss = css 
  js
  page = wxml+wxss+js
  App = 多个page
三者周转的很6
 写结构
 写样式 rpx
 js 约定 事件函数只要加载
 page（{
   ，
   bind.....: function() {

   }
 }）
 bindtap = "bind....."

 4.19 喻
 MVVM
 Model Page（{data：{}}）
 View Template wxml
 Vm {{}} wx:for

 MVC Model  数据库
      view 静态页面
      controler 控制器
web HTTP 服务器
端口？ 3000
Mysql 3306
WebServer 80

用户通过 Request 通过IP + 端口
web Server Responde
http.createServer(function(request, response){
  request 用户N
  response
}).listen(8080);

4.22
js里面有很多真值，只有7个假值，分别是undefined, null, +0, -0, NaN, "", false

LRU Least Recently Used
操作系统的内存中
node fs
硬盘
  内存中 cpu 小 快 N
  内存容量是多少 超过容量后淘汰的机制
  最近最少使用
  meet 缓存
  LRUCache  2
  1 put（1,1） 存入[值] {key:value}
  2 put（2，2）
  3 put（3,3）1 1先移除， 3放进来
  4 put（4,4）2 2先移除  4放进来
  5 get（3,3）
  数组 [1,2,3,4] 
  对象{1:1,2:2,3:3,4:4} o（1）时间开销
  对象字面量 存取的数据结构
  
4.23
函数的节流和防抖

搜索建议
 google suggest
 input value => ajax
 有问题
 分词 灭霸 电蚊液
 keyup 没有每次都去触发ajax 太浪费性能
 过滤一些无效的请求，打完一个单词再去搜索
  wrold word js 打完一个单词后再去搜索

  防抖的关键
    频繁输入时， 怎么减少请求呢？
    debounce(ajax, 500) 生成一个函数，控制执行，停止执行是，执行一次
    setTimeOut delay 之后一定会执行一次
    在规定时间内呢？ 被claer 掉
    clearTimeOut(func.id);
    func.id = setTimeOut(function() {
      func();
    },delay)
    句柄， 不重复的数字， func 函数是对象 id属性 前一次加了一个setTimeOut

  4.24
  -wxml只是模板，不像html5
  看到的是page，不是wxml，而是编译过后的
  js data 拿去模板生成page view
  -登录 登录后
  页面不是静态的， dom ajax
  MVVM 来实现状态
  wxml {{}} 或者指令 data 加相应的数据项就好
  this.setData({}) 设置数据，并且带来相应部分UI的重新渲染
  数据驱动界面的运用 响应式布局
  跟DOM拜拜
  MVVM 数据决定一切
  数据状态 === 界面状态
  登录状态 hasUserInfo 界面在某一刻有且仅有一个状态
  userInfo:{} 数据驱动界面
  {{}}不只是数据输出，里面是js运行
  {{addshow？'':''}}
    
4.25
兼容性不行 scroll-behavior： smooth
chrome 支持这个css，但是其他主流浏览器怎么办 scroll-behavior
scroll-behavior  ie不支持
兼容 hack   IE  js window.scrollTo(0, 1 / 8);
requestAnimationFrame(回调函数)
浏览器判断 window.navigator.userAgent()

4.26
 全局配置 window + tabbar
 asserts目录 pages

UI框架
app.wxss 引入weui
数据
生命周期 wx.request

