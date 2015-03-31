var tests = (function(){

	function Tests(){}

	Tests.prototype.singleCharachterWraps = function(){
		var singleCharachterWrap = wordWrapUtil.wrapString("a", 10);
		console.log("singleCharachterWraps test");
		console.log(singleCharachterWrap);
		console.log("end singleCharachterWraps test");
		var testResult = singleCharachterWrap === "a";
		return {
			passed: singleCharachterWrap === "a",
			message: "wrapping 'a' in a 10 character column "+(testResult ? "is " : "should not be ")+singleCharachterWrap
		};
	};

	return new Tests();
}());