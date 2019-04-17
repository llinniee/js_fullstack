// 位移运算
// 二进制位移 
// 利用位移运算，可以实现除以二或乘以二的效果

// console.log(11 >> 1);
// 猛哥给蜗牛买香蕉
// N piles of bananas 每挂香蕉上的香蕉数不一样
// [3,6,7,11] H 小时吃完 一小时吃几根香蕉
// 一小时内吃mid根香蕉 一次吃一把 ，
// 一小时最少吃几根，可以在H小时内吃完
/**
 * @desc 最少吃香蕉的速度，在规定时间内吃完
 * @param {number[]} piles 
 * @param {number} H
 * @return {number} 
 */
function minEatingSpeed (piles,H) {
    let lo = 1;
    hi = Math.max(...piles);
    // 二分查找，一直丢一半
    while(lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (canEatAllBananas(piles, H, mid)) {
            hi = mid - 1;
        }else {
            lo = mid + 1;
        }
    }
    return lo;
}

// 吃完香蕉目标
// H小时内吃完
// 最小的一个数n
/**
 * 判断能否吃完香蕉
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid 
 * @return {boolean}
 */
function canEatAllBananas(piles, H, mid){
    let h = 0;
    for (let pile of piles) {
        h += Math.ceil(pile / mid);
    }
    return h <= H;
}
let piles = [3, 6, 7,11];
console.log(canEatAllBananas(piles, 8, 4));
console.log(minEatingSpeed([3, 6, 7, 11], 8));