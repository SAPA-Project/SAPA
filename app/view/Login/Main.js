Ext.define('SAPA.view.Login.Main', {
    extend: 'Ext.Container',
    xtype: 'loginmain',
    config: {
        fullscreen: true,
        zIndex: 2,
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        baseCls: 'login-screen',
        items: [
            {
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'label',
                        cls: 'login-screen-title',
                        html: 'SAPA'
                    }
                ]
            },
            {
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'label',
                        cls: 'login-screen-tagline',
                        html: 'Unlock your personality'
                    }
                ]
            },
            {
                xtype: 'panel',
                height: 30
            },
            {
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        itemId: 'SignInButton',
                        baseCls: 'login-button',
                        html: '<h1 style="font-weight:lighter">Sign In</h1>'
                    }
                ]
            },
            {
                xtype: 'panel',
                height: 15
            },
            {
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        itemId: 'SignUpButtonMain',
                        baseCls: 'sign-up-button',
                        html: '<h1 style="font-weight:lighter">Sign Up</h1>'
                    }
                ]
            },
        ],
    },
});
