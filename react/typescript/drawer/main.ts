// console.log('hello')
// 静态类型;
// interface
// 1.写Drawer类
// 2.构造函数的参数进行约束
// 3. enter , leave 方法
interface IDrawerConfig {
  enterDOM: HTMLElement | null;
  leaveDOM: HTMLElement | null;
  duration?: number;
}
class Drawer implements IDrawerConfig{
  enterDOM: HTMLElement
  leaveDOM: HTMLElement
  constructor(options) {
    this.enterDOM = options.enterDOM;
    this.leaveDOM = options.leaveDOM;
  }
  enter() {}
  leave() {}
}