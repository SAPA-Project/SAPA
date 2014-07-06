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
                        xtype: 'label',
                        cls: 'login-screen-text',
                        html: 'Sign In'
                    }
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
                        xtype: 'button',
                        itemId: 'LoginButton',
                        baseCls: 'login-button',
                        html: '<h1 style="font-weight:lighter">Sign in</h1>'
                    }
                ]
            },
            {
                xtype: 'panel',
                height: 5
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
                        cls: 'login-screen-text-small',
                        html: 'or'
                    }
                ]
            },
            {
                xtype: 'panel',
                height: 10
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
                        itemId: 'FacebookLoginButton',
                        baseCls: 'facebook-button',
                        html: '<h1 style="font-weight:lighter">Sign in with Facebook</h1>'
                    }
                ]
            }
        ],
    },
});
