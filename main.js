var isNumber = function(val){
	return !isNaN(parseInt(val));
};

var digitLength = function(arr, i, sum){
	sum = sum || 0;
	if (isNumber(arr[i])) {
		sum++;
		return digitLength(arr, ++i, sum);
	}
	return sum;
};


var addNumbers = function(str){
	var arr = str.split('');
	var sum = 0;

	for (var i = 0; i < arr.length; i++) {
		var numLn = digitLength(arr, i);
		if (numLn) {
			sum += parseInt(arr.slice(i, i+numLn).join(''));
			i += numLn;
		}
	}
	return sum;

};