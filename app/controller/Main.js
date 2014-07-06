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

	},

	initializeMain: function() {
		this.getMain().hide();
		this.getLoginMain().show();
	},

});	