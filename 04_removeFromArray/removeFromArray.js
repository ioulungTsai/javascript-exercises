const removeFromArray = function(arr, ...theArgs) {
  let ans = [...arr]
  for(arg of theArgs) {
    ans = ans.filter(item => item !== arg)
  }
  return ans
};

// Do not edit below this line
module.exports = removeFromArray;
