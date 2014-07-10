Ext.define('SAPA.view.Login.SignUp', {
    extend: 'Ext.Container',
    xtype: 'signupscreen',
    config: {
        fullscreen: true,
        zIndex: 2,
        layout: {
            type: 'vbox',
        },
        hidden: true,
        baseCls: 'login-screen',
        items: [
            {
                xtype: 'panel',
                height: 30
            },
            {
                xtype: 'panel',
                flex: 1,
                layout: 'vbox',
                scrollable: 'vertical',
                items: [
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'hbox',
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'BackButtonSignUp',
                                text: '<',
                                ui: 'plain',
                                baseCls: 'back-button-login',
                                //left: 0,
                                //top: 5
                            },
                            {
                                xtype: 'spacer',
                                width: 47
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
                                        html: 'Sign Up'
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        xtype: 'panel',
                        height: 20
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
                                        itemId: 'UsernameFieldSignUp',
                                        cls: 'textarea',
                                        label: '',
                                        placeHolder: 'Email',
                                        disabled: true
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        xtype: 'panel',
                        height: 20
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
                                        xtype: 'passwordfield',
                                        itemId: 'PasswordFieldSignUp',
                                        cls: 'textarea',
                                        label: '',
                                        placeHolder: 'Password',
                                        disabled: true
                                    },
                                    {
                                        xtype: 'panel',
                                        cls: 'line',
                                    },
                                    {
                                        xtype: 'passwordfield',
                                        itemId: 'ConfirmPasswordFieldSignUp',
                                        cls: 'textarea',
                                        label: '',
                                        placeHolder: 'Confirm Password',
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
                                itemId: 'SignUpButton',
                                baseCls: 'sign-up-button',
                                html: '<h1 style="font-weight:lighter">Sign Up</h1>'
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
                                itemId: 'FacebookSignUpButton',
                                baseCls: 'facebook-button',
                                html: '<h1 style="font-weight:lighter">Sign up with Facebook</h1>'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        height: 25
                    }
                ]
            }
        ],
    },
});
