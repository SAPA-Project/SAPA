Ext.define('SAPA.controller.Main', {
	extend : 'Ext.app.Controller',
	xtype: 'maincontroller',
	config: {
		refs: {
			'main': 'main',
			'loginMain': 'loginmain'
		},
		control: {
			'loginMain': {
				initialize: 'initializeMain'
			}
		}
	},

	launch: function() {
		//style the statusbar:
		if(device.platform !== 'android' && device.platform !== 'Android') {
			StatusBar.styleDefault();
		}

		//Initialize Parse
		Parse.initialize("nDKW4Ew4GAEIAr7SzM2ruMLadgtAhucsbOn0FY1v", "MwdgP1F8fHK1jHZ9vqoJ4RpM6BWbQeDxigRoFjQI");
	},

	initializeMain: function() {
		this.getMain().hide();
		this.getLoginMain().show();
	},

});	