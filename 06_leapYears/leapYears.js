const leapYears = function(year) {
  if(year % 4 !== 0) {
    return false
  }

  if(year % 100 === 0) {
    return (year/100) % 4 !== 0 ? false : true
  }

  return true
};

// Do not edit below this line
module.exports = leapYears;
