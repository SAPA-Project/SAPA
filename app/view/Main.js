Ext.define('SAPA.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'SAPA.view.Titlebar',
        'SAPA.view.MainPanel',
    ],
    config: {
        flex: 1,
        hidden: false,
        baseCls: 'main-view',
        layout: 'vbox',
        items: [
            {
                xtype: 'panel',
                height: 20,
                baseCls: 'top-margin-main',
            },
            {
                xtype: 'maintitlebar',
            },
            {
                xtype: 'mainpanel'
            }
        ],
    }

});
