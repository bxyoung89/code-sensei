var leapYearUtil = (function(){
	function LeapYearUtil(){}

	LeapYearUtil.prototype.isLeapYear = function(year){
		return isNormalLeapYear(year) || isAbnormalLeapYear(year);
	};

	function isNormalLeapYear(year){
		return (year % 4 === 0) && (year % 100 !== 0);
	}

	function isAbnormalLeapYear(year){
		return year % 400 === 0;
	}

	return new LeapYearUtil();
}());