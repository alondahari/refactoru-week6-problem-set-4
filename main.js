var isNumber = function(val){
	return !isNaN(parseInt(val));
};

var isLetter = function(val){
	if (!val) return false;
	var char = val.toLowerCase().charCodeAt(0);
	return (char >= 97 && char <= 122);
};

var ruleLength = function(arr, i, f, sum){
	sum = sum || 0;
	if (f(arr[i])) {
		sum++;
		return ruleLength(arr, ++i, f, sum);
	}
	return sum;
};


var addNumbers = function(str){
	var arr = str.split('');
	var sum = 0;

	for (var i = 0; i < arr.length; i++) {
		var numLn = ruleLength(arr, i, isNumber);
		if (numLn) {
			sum += parseInt(arr.slice(i, i+numLn).join(''));
			i += numLn;
		}
	}
	return sum;

};

var longestWord = function(str){
	var arr = str.split('');
	var longest = '';

	for (var i = 0; i < arr.length; i++) {
		var letterLength = ruleLength(arr, i, isLetter);
		if (letterLength) {
			longest = (longest.length >= letterLength) ? longest : arr.slice(i, i+letterLength).join('');
			i += letterLength;
		}
	}
	return longest;
};

var averageStringNumbers = function(str){
	var arr = str.split('');
	var numSum = arr.reduce(function (mem, val) {
		return (isNumber(val)) ? parseInt(val) + mem : mem;
	}, 0);
	
	var letterNum = arr.filter(function(val){
		return isLetter(val);
	}).length;

	return Math.round((numSum / letterNum));
};
