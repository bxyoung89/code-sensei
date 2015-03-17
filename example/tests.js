var tests = (function(){

	function Tests(){}

	Tests.prototype.isNormalLeapYear = function(){
		var isLeapYear = leapYearUtil.isLeapYear(1996);
		return {
			passed: isLeapYear,
			message: "1996 "+(isLeapYear ? "is": "is not")+" a leap year"
		};
	};

	Tests.prototype.isFalseForYearsNotEvenlyDivisibleByFour = function(){
		var isLeapYear = leapYearUtil.isLeapYear(1996);
		return {
			passed: !isLeapYear,
			message: "1999 "+(isLeapYear ? "is": "is not")+" a leap year"
		};
	};

	Tests.prototype.isFalseForAbnormalLeapYear = function(){
		var isLeapYear = leapYearUtil.isLeapYear(1900);
		return {
			passed: !isLeapYear,
			message: "1900 "+(isLeapYear ? "is": "is not")+" a leap year"
		};
	};

	Tests.prototype.isTrueForNormalLeapYear = function(){
		var isLeapYear = leapYearUtil.isLeapYear(2000);
		return {
			passed: isLeapYear,
			message: "2000 "+(isLeapYear ? "is": "is not")+" a leap year"
		};
	};

	return new Tests();
}());