1. 三个容器 背后有个百分之百的宽度 拖拽的圆点 已经拖了的进度条
2. touchStart touchMove touchEnd
3. 拖拽的时候改变width left

js
new Progress({
  onDrag: () => {},
  onDragStart: () => {},
  onDragEnd: () => {},
  progress: 0.5,
  disableDrag: false
})