window.addEventListener("load",init,false);

var pushNotification;

function init() {
	// alert('initialized');
	document.addEventListener('deviceready', onDeviceReady, false);
}

function onDeviceReady() {
	//Initialize Parse:
	Parse.initialize("nDKW4Ew4GAEIAr7SzM2ruMLadgtAhucsbOn0FY1v", "MwdgP1F8fHK1jHZ9vqoJ4RpM6BWbQeDxigRoFjQI");
	document.addEventListener("resume",getNotifications,false);

	function tokenHandler (result) {
	    // Your iOS push server needs to know the token before it can push to this device
	    // here is where you might want to send it the token for later use.
	    alert('device token = ' + result);
	}

	function errorHandler (error) {
	    console.log('error = ' + error);
	}

	pushNotification = window.plugins.pushNotification;

	if(device.platform == 'android' || device.platform == 'Android' || device.platform == "amazon-fireos" ){
	    pushNotification.register(
	    successHandler,
	    errorHandler,
	    {
	        "senderID":"replace_with_sender_id",
	        "ecb":"onNotification"
	    });
	} else {
	    pushNotification.register(
	    tokenHandler,
	    errorHandler,
	    {
	        "badge":"true",
	        "sound":"true",
	        "alert":"true",
	        "ecb":"onNotificationAPN"
	    });
	}

}

function getNotifications() {
	var currentUser = SAPA.config.Runtime.getCurrentUser();
	if(currentUser) {
		showLoadingMask('');
		currentUser.fetch({
			success: function(user) {
				hideLoadingMask();
				if(user.get('push')) {
					if(Ext.ComponentQuery.query('sliderquestion')[0].getHidden()) {
						SAPA.app.getController('Questions').showSliderQuestions();
					}
					else {
						SAPA.app.getController('Questions').getSliderQuestionPanel().hide({type: 'slideOut', direction: 'left', duration: 200, easing: 'easeOut'});
						var run = function() {
							SAPA.app.getController('Questions').getSliderQuestionSlider().setValue(50);
							SAPA.app.getController('Questions').showSliderQuestions();
						}
						setTimeout(run,230);
					}
				}
			},
			error: function(error) {
				hideLoadingMask();
				console.log(error);
			}
		});
	}
}