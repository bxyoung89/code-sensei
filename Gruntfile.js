module.exports = function (grunt) {

	var bowerFolder = "lib/bower-dependencies";

	require("time-grunt")(grunt);

    // Load grunt tasks automatically
    require("load-grunt-config")(grunt, {
        data: {
            paths: {
				bin: "bin",
				binJs: "bin/js",
				binCSS: "bin/css",
				//binImages: base + "/bin/images",

				cssSrc: "css",
				jsSrc: "js",

				libJsSrc: "lib",
				appSrc: "app"
			},
			bowerJsFiles: {
				angular: bowerFolder +"/angular/angular.min.js",
				sugar: bowerFolder +"/sugar/release/sugar-full.min.js"
			}

        }
    });
};
