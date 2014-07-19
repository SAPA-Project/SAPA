Ext.define('SAPA.view.Titlebar', {
	extend: 'Ext.TitleBar',
	xtype: 'maintitlebar',
	requires: [
	    'Ext.TitleBar',
	],
	config: {
		layout: 'hbox',
		baseCls: 'titlebar',
		title: 'SAPA',
		width: '100%',
		items: [
			{
				xtype: 'button',
				itemId: 'LogOutButton',
				ui: 'plain',
				baseCls: 'logout-button',
				text: 'Logout',
				align: 'right',
				right: 15,
				top: 15
			}
		]
	}
});
