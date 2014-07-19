Ext.define('SAPA.controller.Questions', {
	extend : 'Ext.app.Controller',
	xtype: 'questionscontroller',
	config: {
		refs: {
			'sliderQuestionPanel': 'sliderquestion',
			'sliderQuestionText': 'panel[itemId=SliderQuestionText]',
			'sliderQuestionNextButton': 'button[itemId=SliderQuestionNextButton]',
			'sliderQuestionSlider': 'sliderfield[itemId=QuestionSlider]'
		},
		control: {
			'sliderQuestionNextButton': {
				tap: 'submitSliderQuestion'
			}
		}
	},

	showSliderQuestions: function() {
		var shuffledQuestions = shuffleArray(sliderQuestions);
		var questions = [];
		for(i = 0; i < 8; i++) {
			questions.push(shuffledQuestions[i]);
		}
		SAPA.config.Runtime.setSliderQuestions(questions);
		this.getSliderQuestionText().setHtml(questions[0]);
		this.getSliderQuestionPanel().show({type: 'slide', direction: 'left', duration: 200, easing: 'easeIn'});
	},

	submitSliderQuestion: function() {
		var currentUser = SAPA.config.Runtime.getCurrentUser();
		var currentQuestion = SAPA.config.Runtime.getSliderQuestions().shift();
		var sliderValue = this.getSliderQuestionSlider().getValue()[0];
		var UserResponse = Parse.Object.extend('UserResponse');
		var response = new UserResponse();
		response.set('type','Slider');
		response.set('username',currentUser.get('username'));
		response.set('minValue',0);
		response.set('maxValue',100);
		response.set('question',currentQuestion);
		response.set('responseNumber',sliderValue);
		response.save({
			success: function() {
				console.log('success!');
			},
			error: function(error) {
				console.log(error)
			}
		});
		var nextQuestion = SAPA.config.Runtime.getSliderQuestions()[0];
		if(nextQuestion === undefined) {
			this.getSliderQuestionPanel().hide({type: 'slideOut', direction: 'left', duration: 200, easing: 'easeOut'});
			var run = function() {
				SAPA.app.getController('Questions').getSliderQuestionSlider().setValue(50);
			}
			setTimeout(run,200);
		}
		else {
			this.getSliderQuestionText().hide({type: 'fadeOut', duration: 200, easing: 'easeOut'});
			this.getSliderQuestionNextButton().setDisabled(true);
			this.getSliderQuestionSlider().setValue(50);
			var run = function() {
				SAPA.app.getController('Questions').getSliderQuestionText().setHtml(nextQuestion);
				SAPA.app.getController('Questions').getSliderQuestionText().show({type: 'fadeIn', duration: 200, easing: 'easeIn'});
			}
			setTimeout(run,200);
			var run2 = function() {
				SAPA.app.getController('Questions').getSliderQuestionNextButton().setDisabled(false);
			}
			setTimeout(run2,430);
		}
	}

});