function findKthLargest(num, k) {
  if(k < 0 || k > nums.length - 1) return Number;
  return nums.sort((a, b) => b-a)[k-1];
}