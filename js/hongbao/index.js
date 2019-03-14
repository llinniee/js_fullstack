// let ran_num = Math.random();
// 函数表达式
const hongbao = (total, num) => {
    const arr = []; 待分配数组
    // 定义计算量
    let restAmout = total;
        restNum = num;
        for (let i = 0; i <=num-1; i++){
            // 前n-1发随机
            let amount = parseFloat(Math.random()*((rest.Amout/rest.NUm)*2-0)).toFixed(2);
            restAmout -= amount;
            restNUm--;
            arr.push(amount);
        }
    return arr;

}
console.log(honghao(20, 47)); 