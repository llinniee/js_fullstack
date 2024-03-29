var LRUCache = function(capacity) {
    this.capacity = capacity;  //容量
    this.obj = {}; //存取
    // 最近最少使用
    // 开头[0]，结尾[.length-1]
    this.arr = [];
}
LRUCache.prototype.get = function(key) {
    var val = this.obj[key];
    if (val > 0) {
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
        return val;
    }else {
        return -1;
    }
}
LRUCache.prototype.set = function(key, val) {
    // 之前已经存在
    if (this.obj[key]) {
        this.obj[key] = value;
        // 更新
        var index = this.arr.indexOf(key);
        this.arr.splice(index,1);
        this.arr.unshift(key);
        return;
    }
    // 空间不够了怎么办
    if (this.capacity === arr.length) {
        // 满了
        var k = this.arr.pop();
        this.obj[k] = undefined;
    }
    this.obj[key] = val; //存储数据
    this.arr.unshift(key); //最近最长使用
}

var cache = new LRUCache(2);
cache.set(1, 1);
cache.set(2, 2);
console.log(cache.get(1));
cache.set(3, 3)
console.log(cache.get(2));
cache.set(4, 4)
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));



