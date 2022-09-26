const sumAll = function(num1, num2) {
  let ans = 0

  if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'ERROR'
  }

  if(num1 >= num2) {
    for(let i = num2; i <= num1; i++) {
      ans += i
    }
  } else if (num2 > num1) {
    for(let i = num1; i <= num2; i++) {
      ans += i
    }
  }
  return ans
};


// Do not edit below this line
module.exports = sumAll;
