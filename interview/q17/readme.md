#q17  click在ios手机上又300ms延迟，原因及解决方法
  1.<meta>标签
  2. fastclick ,其原理是：监测到touchend事件后，立刻发出模拟click事件，并把浏览器300ms
    之后真实发出的时间阻断
  3.cookie sessionStorge localStorge的区别
    cookie: 数据始终在同源的http请求中携带（即使不需要）,即cookie在浏览器和服务器之间来回传递
    而sessionStorage和loaclStorage不会自动把数据发给服务器，仅在本地保存
    cookie还有路径path的概念，可以限制cookie只属于某个路径下，存储大小只有4k左右
    sessionStorge：仅在当前浏览器窗口关闭前有效
    localStorge：在所有的同源窗口都是共享的，存储大小为5M左右
    cookie：也是在所有同源窗口是共享的
  4.  