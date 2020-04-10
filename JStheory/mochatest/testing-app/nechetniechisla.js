function nechChisla(arr) {
  var b = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1 && arr[i] > 0) {
      b.push(arr[i])
    }
  }
  return b;
}

module.exports = nechChisla;
