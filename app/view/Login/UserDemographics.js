Ext.define('SAPA.view.Login.UserDemographics', {
    extend: 'Ext.Container',
    xtype: 'userdemographicscreen',
    config: {
        centered: true,
        modal: true,
        zIndex: 3,
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
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'label',
                                cls: 'login-screen-text',
                                html: 'Your Background'
                            }
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
                                        xtype: 'textfield',
                                        itemId: 'AgeUserDemographics',
                                        cls: 'textarea',
                                        placeHolder: 'Age*',
                                        label: ''
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
                                        xtype: 'textfield',
                                        itemId: 'ZipcodeUserDemographics',
                                        cls: 'textarea',
                                        placeHolder: 'Zipcode*',
                                        label: ''
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
                                        xtype: 'selectfield',
                                        itemId: 'GenderUserDemographics',
                                        cls: 'textarea',
                                        usePicker: true,
                                        label: ''
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
                                        xtype: 'selectfield',
                                        itemId: 'HeightUserDemographics',
                                        cls: 'textarea',
                                        usePicker: true,
                                        label: ''
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
                                        xtype: 'selectfield',
                                        itemId: 'WeightUserDemographics',
                                        cls: 'textarea',
                                        usePicker: true,
                                        label: ''
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
                                        xtype: 'selectfield',
                                        itemId: 'MaritalStatusUserDemographics',
                                        cls: 'textarea',
                                        usePicker: true,
                                        label: ''
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
                                        xtype: 'selectfield',
                                        itemId: 'RelationshipStatusUserDemographics',
                                        cls: 'textarea',
                                        usePicker: true,
                                        label: ''
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
                                        xtype: 'selectfield',
                                        itemId: 'ExerciseUserDemographics',
                                        cls: 'textarea',
                                        usePicker: true,
                                        label: ''
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
                                        xtype: 'selectfield',
                                        itemId: 'SmokingUserDemographics',
                                        cls: 'textarea',
                                        usePicker: true,
                                        label: ''
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
                                        xtype: 'selectfield',
                                        itemId: 'CountryUserDemographics',
                                        cls: 'textarea',
                                        usePicker: true,
                                        label: ''
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
                                        xtype: 'selectfield',
                                        itemId: 'StateUserDemographics',
                                        cls: 'textarea',
                                        usePicker: true,
                                        label: ''
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
                                itemId: 'SubmitDemographicsButton',
                                baseCls: 'sign-up-button',
                                html: '<h1 style="font-weight:lighter">Get Started!</h1>'
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
