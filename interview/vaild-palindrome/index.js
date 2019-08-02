// 'aba' 
// function validPalindrom(str) {
//   if (typeof str !='string' || str) return false;
//   return str.split("").reverse().join("") === str
// }
var isValidChar = (c) => {
  return /^[\w]$/.test(c);
}
var isPalindrom = (s) => {
  s = s.toLowerCase();
  let left = 0;
  right = s.length - 1;
  while(left < right ) {
    if(!isValidChar(s[left])) {
      left++;
      continue;
    }
    if(!isValidChar[s[right]]) {
      right--;
      continue;
    }
    if (s[left] == s[right]) {
      left++;
      right--;
    } else {
      break;
    }
  }
  return right <= left;
}