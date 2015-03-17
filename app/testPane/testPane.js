angular.module("CodeSensei").controller("testPaneController", ["$scope", function($scope){
	$scope.tests = makeTestsArray();


	function makeTestsArray(){
		var scopeTests = [];
		var testMethods = Object.getPrototypeOf(tests);
		Object.keys(testMethods).forEach(function(testMethod){
			var testResult = tests[testMethod]();
			scopeTests.push({
				name: testMethod,
				state: testResult.passed ? "passed": "failed",
				message: testResult.message
			});
		});
		return scopeTests;
	}


}]);