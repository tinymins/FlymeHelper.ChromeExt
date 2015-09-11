/* ==========================================================================================
 * FlymeHelper: cn.flyme.cloud.sms.js v0.0.1
 * http://derzh.com/
 * ==========================================================================================
 * Copyright 2015 ZYM
 * Licensed under MIT (https://github.com/tinymins/FlymeHelper.ChromeExt/blob/master/LICENSE)
 * ========================================================================================== */
!(function () {
	'use strict';
	var FlymeHelper = {
		getCSRF : function() {
			return document.getElementById("mz_csrf_tks").value;
		},
	}

	$("#flymeContent").prepend($('<ul/>')
		.append($('<li/>').css({
			"cursor"           : "pointer" ,
			"background-color" : "#CCC"    ,
			"float"            : "right"   ,
			"padding"          : "5px 10px",
		}).text("一键删除重复短信").click(function() {
			console.log(FlymeHelper.getCSRF());
		}))
	)

}());
