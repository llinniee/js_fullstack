// js的后端node用核心模块打理起服务器端开发
// 要读文件，先引入fs
const fs = require('fs');
// 读一个文件 有几步？ js运行在服务器命令上
// 找到文件 代码由cpu执行 内存 a.txt在磁盘文件夹里
// IO操作 花时间 打开文件，读取文件，输出到命令行里
// 耗时 callback
// fs.readFile('./a.txt', 'utf8', (err,data) =>{
//     console.log(data);
// })
// fs.readFile('./b.txt', 'utf8', (err,data) => {
//     console.log(data);
// })
// 当出现耗时问题时，找promise，这是一类问题
// promise是耗时问题的包裹
const fileAPromise = new Promise((resolve, reject) => {
    fs.readFile('./a.txt', 'utf8', (err,data) => {
       if (err) {
           reject(err);
       }
       resolve(data);
    })
});
const fileBPromise = new Promise((resolve,reject) => {
    fs.readFile('./b.txt', 'utf8', (err,data) => {
        if (err) {
            reject(err);
            return;
        }
        reject(data);
    })
}) 
fileAPromise.then(data => {
    console.log(data);
    return fileBPromise;
}).then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
})
