describe('addNumbers', function() {

	it("should check if values in string are numbers", function() {
		expect(isNumber('a')).toBe(false);
		expect(isNumber('1')).toBe(true);
	});

	it("should get the number of consecutive digits", function() {
		expect(digitLength([2,3,5], 0)).toBe(3);
		expect(digitLength([2,'a',5], 0)).toBe(1);
		expect(digitLength([8,8,'H','e','l','l','o',3,'W','o'], 0)).toBe(2);
		expect(digitLength([8,8,'H','e','l','l','o',3,'W','o'], 1)).toBe(1);
		expect(digitLength([8,8,'H','e','l','l','o',3,'W','o'], 2)).toBe(0);
	});

  it('should add all numbers in a string', function() {
  	expect(addNumbers("88Hello 3World!")).toBe(91);
  	expect(addNumbers("55Hello")).toEqual(55);
  	expect(addNumbers("5Hello5")).toEqual(10);

  });
});