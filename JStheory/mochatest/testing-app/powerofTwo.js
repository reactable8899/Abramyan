function powerofTwo(n) {
  var arr = [];
  var sum = 1;
  for (var i = 0; i < n; i++) {
    sum *= 2;
    arr.push(sum)
  }
  return arr;
}
module.exports = powerofTwo;
