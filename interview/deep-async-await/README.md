# async 
async 函数是Generator函数的语法糖


通过g.next()一步一步调用
每一步调用执行到yield关键词

通过传参 可作为上一个yield 语句的返回值

## Promise.resolve
返回一个promise
如果是一个promise 返回该promise
如果是一个值是resolve(该值)