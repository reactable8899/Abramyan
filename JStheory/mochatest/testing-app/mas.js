function sum(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] *= 2;
	}
	//console.log(arr)
	return arr;
}
//sum([1,2,3])
module.exports = sum;
