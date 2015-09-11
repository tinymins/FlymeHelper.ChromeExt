/* ==========================================================================================
 * FlymeHelper: cn.flyme.cloud.sms.document-end.js v0.0.1
 * http://derzh.com/
 * ==========================================================================================
 * Copyright 2015 ZYM
 * Licensed under MIT (https://github.com/tinymins/FlymeHelper.ChromeExt/blob/master/LICENSE)
 * ========================================================================================== */
'use strict';

var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('scripts.insert/cn.flyme.cloud.sms.js');
s.onload = function() {
	this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);
