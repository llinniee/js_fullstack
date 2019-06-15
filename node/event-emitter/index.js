// function main(arg) {
//   if(!arg || !arg.length) {
//     arg = arg[2]
//   }
//   console.log(arg);
// }

const EventEmitter = require('events');
class Ev extends EventEmitter{};

const ev = new Ev();

// 绑定事件
['search'].forEach(key => {
  // search
  // 把所有的剩余的函数参数整理为数组
  // args = [arg1, arg2, arg3]处理参数不固定
  // ...args 的作用 fn(arg1, arg2, arg3)
  ev.on(key,async function (...args) {
    const fn = require(`./lib/${key}`);
    const res = await fn(...args);
  })
})
function main(arg) {
  let keyword = arg[2];
  eval.emit('search',keyword)
}
main(process.argv);
