module.exports = fibonacci;

function fibonacci(n) {
  var n1 = 0;
  var n2 = 1;
  var s = 0;
  var arr = [];
  for (var i = 0; i < n; i++) {
    s = n1 + n2;
    n1 = n2;
    n2 = s;
    if (i === 1) {
      s = 1;
      n1 = 1;
      n2 = 1;
    }
    arr.push(s)
  }
  return arr
}
