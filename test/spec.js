describe('addNumbers', function() {

	it("should check if values in string are numbers", function() {
		expect(isNumber('a')).toBe(false);
		expect(isNumber('1')).toBe(true);
	});

	it("should get the number of consecutive digits", function() {
		expect(ruleLength([2,3,5], 0, isNumber)).toBe(3);
		expect(ruleLength([2,'a',5], 0, isNumber)).toBe(1);
		expect(ruleLength([8,8,'H','e','l','l','o',3,'W','o'], 0, isNumber)).toBe(2);
		expect(ruleLength([8,8,'H','e','l','l','o',3,'W','o'], 1, isNumber)).toBe(1);
		expect(ruleLength([8,8,'H','e','l','l','o',3,'W','o'], 2, isNumber)).toBe(0);
	});

  it('should add all numbers in a string', function() {
  	expect(addNumbers("88Hello 3World!")).toBe(91);
  	expect(addNumbers("55Hello")).toEqual(55);
  	expect(addNumbers("5Hello5")).toEqual(10);

  });
});

describe("longestWord", function() {

	it("should check if value is a letter", function() {
		expect(isLetter('a')).toBe(true);
		expect(isLetter('D')).toBe(true);
		expect(isLetter('1')).toBe(false);
		expect(isLetter(' ')).toBe(false);
		expect(isLetter('!')).toBe(false);
		expect(isLetter('')).toBe(false);
	});

	it("should return the largest word in a string", function() {
		expect(longestWord('takes a single string parameter')).toBe('parameter');
		expect(longestWord('takes a single string')).toBe('single');
	});
});

describe("averageStringNumbers", function() {
	it("should return numbers in string divided by numbers of letters in the string", function() {
		expect(averageStringNumbers('Hello6 9World 2, Nic8e D7ay!')).toBe(2);		
	});
});