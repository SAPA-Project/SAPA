Ext.define('SAPA.view.Notification.SliderQuestion', {
	extend: 'Ext.Panel',
	xtype: 'sliderquestion',
	config: {
		layout: {
			type: 'vbox',
		},
		height: 235,
		width: 300,
		zIndex: 3,
		centered: true,
		modal: true,
		baseCls: 'notification',
		hidden: true,
		items: [
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
						xtype: 'panel',
						width: '80%',
						itemId: 'SliderQuestionText',
						baseCls: 'question-text',
						html: 'In the last 5 minutes, how much have you been feeling kind?'
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
						xtype: 'sliderfield',
						itemId: 'QuestionSlider',
						baseCls: 'question-slider',
						minValue: 0,
						maxValue: 100,
						width: 270,
						value: 50
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
						xtype: 'panel',
						baseCls: 'slider-question-text-none',
						html: 'None'
					},
					{
						xtype: 'spacer',
						width: 180
					},
					{
						xtype: 'panel',
						baseCls: 'slider-question-text-a-lot',
						html: 'A Lot'
					}
				]
			},
			{
				xtype: 'panel',
				height: 25
			},
			{
				xtype: 'panel',
				layout: 'hbox',
				items: [
					{
						xtype: 'button',
						itemId: 'SliderQuestionNextButton',
						baseCls: 'notification-next-button',
						text: 'Next'
					}
				]
			}
		]
	}
})