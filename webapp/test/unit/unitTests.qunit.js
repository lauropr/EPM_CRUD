/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"tra03_99/epm03_99/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
