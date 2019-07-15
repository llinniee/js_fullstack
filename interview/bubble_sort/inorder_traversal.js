
// 中序遍历 一颗大树 递归的遍历

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let a1 = new TreeNode(1);
let a2 = new TreeNode(2);
let a3 = new TreeNode(3);
a1.right = a2;
a2.left = a3;


