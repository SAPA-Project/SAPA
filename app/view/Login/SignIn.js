Ext.define('SAPA.view.Login.Login', {
    extend: 'Ext.Container',
    xtype: 'loginscreen',
    config: {
        fullscreen: true,
        zIndex: 2,
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        hidden: true,
        baseCls: 'login-screen',
        items: [
            {
                xtype: 'button',
                itemId: 'BackButtonLogin',
                text: '<',
                ui: 'plain',
                baseCls: 'back-button-login',
                left: 0,
                top: 25
            },
            {
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'spacer',
                        width: 30
                    },
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'vbox',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                baseCls: 'brain-image',
                                height: 150,
                                width: 150
                            },
                            {
                                xtype: 'label',
                                cls: 'login-screen-text',
                                html: 'Triggr',
                                bottom: -9,
                                right: 35
                            }
                        ]
                    },
                ]
            },
            {
                xtype: 'panel',
                height: 40
            },
            {
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'container',
                        cls: 'textarea-wrapper',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'emailfield',
                                itemId: 'UsernameFieldLogin',
                                cls: 'textarea',
                                label: '',
                                placeHolder: 'Email',
                                disabled: true
                            },
                            {
                                xtype: 'panel',
                                cls: 'line',
                            },
                            {
                                xtype: 'passwordfield',
                                itemId: 'PasswordFieldLogin',
                                cls: 'textarea',
                                label: '',
                                placeHolder: 'Password',
                                disabled: true
                            },
                        ]
                    },
                ]
            },
            {
                xtype: 'panel',
                height: 25
            },
            {
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'fixedbutton',
                        itemId: 'LoginButton',
                        baseCls: 'login-button',
                        html: '<h1 style="font-weight:lighter">Login</h1>'
                    }
                ]
            },
        ],
    },
});
