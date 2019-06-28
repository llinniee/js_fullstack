function TreeNode(val) {
  this.val = val;
  this.right = this.left = null;
}

let a1 = new TreeNode(3)
let a21 = new TreeNode(9)
let a22 = new TreeNode(20)
let a31 = new TreeNode(15)
let a32 = new TreeNode(7)

a1.left = a21
a1.right = a22

a22.left = a31
a22.right = a32

function levelOrderTraversal(root) {
  if(!root) return [];
  const items = []; //存放所有的结点
  const queue = [root, null]; //当前所在处理层的队列
  let levelNodes = [];  //每层的结点

  while(queue.length > 0) {
    const t = queue.shift();
    if (t) {
      // 真实的结点
      levelNodes.push(t.val)
      if (t.left) {
        queue.push(t.left)
      }
      if (t.right) {
        queue.push(t.right)
      }
    } else {
      // null,层与层之间的分界符
      items.push(levelNodes);
      levelNodes = [];
      if (queue.length > 0) {
        queue.push(null);
      }
    }
  }
}