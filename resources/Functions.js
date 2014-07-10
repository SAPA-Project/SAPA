//Global functions:

function showLoadingMask(message) {
	Ext.Viewport.setMasked({
	    xtype: 'loadmask',
	    message: message
	});
};

function hideLoadingMask() {
	Ext.Viewport.setMasked(false);
};

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

//Catch Cordova javascript errors:

// window.onerror = function(msg,url,line) {

// 	var idx = url.lastIndexOf("/");

// 	if(idx > -1) {
// 		url = url.substring(idx + 1);
// 	}

// 	alert("ERROR in " + url + " (line #" + line + "): " + msg);

// 	return false;

// };


