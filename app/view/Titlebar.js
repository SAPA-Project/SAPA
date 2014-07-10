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

		]
	}
});
