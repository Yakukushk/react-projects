function getLongestComplexPrefix(arr) {
  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefix = getCommonPrefix(prefix, arr[i]);
  }
  return prefix;
}
function getCommonPrefix(prefix, str) {
  let result = "";
  for (let i = 0; i < prefix.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (prefix[i] != str[j]) {
        break;
      }
    }
    result += prefix[i];
  }

  return result;
}
const arr = ["abc212", "abd133", "abaa0041", "abg{frf1"];
console.log(getLongestComplexPrefix(arr));
