Ext.define('SAPA.controller.Login', {
	extend : 'Ext.app.Controller',
	xtype: 'logincontroller',
	config: {
		refs: {
			'main': 'main',
			'loginMain': 'loginmain',
			'loginScreen': 'loginscreen',
			'signUpScreen': 'signupscreen',
			'userDemographicsScreen': 'userdemographicscreen',
			'ageUserDemographics': 'textfield[itemId=AgeUserDemographics]',
			'zipcodeUserDemographics': 'textfield[itemId=ZipcodeUserDemographics]',
			'genderUserDemographics': 'selectfield[itemId=GenderUserDemographics]',
			'heightUserDemographics': 'selectfield[itemId=HeightUserDemographics]',
			'weightUserDemographics': 'selectfield[itemId=WeightUserDemographics]',
			'maritalStatusUserDemographics': 'selectfield[itemId=MaritalStatusUserDemographics]',
			'relationshipStatusUserDemographics': 'selectfield[itemId=RelationshipStatusUserDemographics]',
			'exerciseUserDemographics': 'selectfield[itemId=ExerciseUserDemographics]',
			'smokingUserDemographics': 'selectfield[itemId=SmokingUserDemographics]',
			'countryUserDemographics': 'selectfield[itemId=CountryUserDemographics]',
			'stateUserDemographics': 'selectfield[itemId=StateUserDemographics]',
			'signInButtonMain': 'button[itemId=SignInButton]',
			'signUpButtonMain': 'button[itemId=SignUpButtonMain]',
			'backButtonLogin': 'button[itemId=BackButtonLogin]',
			'backButtonSignUp': 'button[itemId=BackButtonSignUp]',
			'usernameFieldLogin': 'emailfield[itemId=UsernameFieldLogin]',
			'passwordFieldLogin': 'passwordfield[itemId=PasswordFieldLogin]',
			'usernameFieldLogin': 'emailfield[itemId=UsernameFieldLogin]',
			'passwordFieldLogin': 'passwordfield[itemId=PasswordFieldLogin]',
			'usernameFieldSignUp': 'emailfield[itemId=UsernameFieldSignUp]',
			'passwordFieldSignUp': 'passwordfield[itemId=PasswordFieldSignUp]',
			'confirmPasswordFieldSignUp': 'passwordfield[itemId=ConfirmPasswordFieldSignUp]',
			'loginButton': 'button[itemId=LoginButton]',
			'signUpButton': 'button[itemId=SignUpButton]',
			'submitDemographicsButton': 'button[itemId=SubmitDemographicsButton]',
			'logOutButton': 'button[itemId=LogOutButton]'
		},
		control: {
			'signInButtonMain': {
				'tap': 'showLoginScreen'
			},
			'signUpButtonMain': {
				'tap': 'showSignUpScreen'
			},
			'backButtonLogin': {
				tap: 'backFromLoginScreen'
			},
			'backButtonSignUp': {
				tap: 'backFromSignUpScreen'
			},
			'loginButton': {
				tap: 'loginUser'
			},
			'signUpButton': {
				tap: 'signUpUser'
			},
			'logOutButton': {
				tap: 'logOutUser'
			},
			'userDemographicsScreen': {
				initialize: 'initializeDemographicsScreen'
			},
			'submitDemographicsButton': {
				tap: 'submitUserDemographics'
			}
		}
	},

	launch: function() {

	},

	showLoginScreen: function() {
		var run = function() {
			SAPA.app.getController('Login').getUsernameFieldLogin().setDisabled(false);
			SAPA.app.getController('Login').getPasswordFieldLogin().setDisabled(false);
		}
		setTimeout(run,500);
		this.getLoginMain().hide({type: 'slideOut', direction: 'left', duration: 500, easing: 'easeOut'});
		this.getLoginScreen().show({type: 'slide', direction: 'left', duration: 500, easing: 'easeIn'});
	},

	showSignUpScreen: function() {
		var run = function() {
			SAPA.app.getController('Login').getUsernameFieldSignUp().setDisabled(false);
			SAPA.app.getController('Login').getPasswordFieldSignUp().setDisabled(false);
			SAPA.app.getController('Login').getConfirmPasswordFieldSignUp().setDisabled(false);
		}
		setTimeout(run,500);
		this.getLoginMain().hide({type: 'slideOut', direction: 'left', duration: 500, easing: 'easeOut'});
		this.getSignUpScreen().show({type: 'slide', direction: 'left', duration: 500, easing: 'easeIn'});
	},

	backFromLoginScreen: function() {
		this.getLoginScreen().hide({type: 'slideOut', direction: 'right', duration: 500, easing: 'easeOut'});
		this.getLoginMain().show({type: 'slide', direction: 'right', duration: 500, easing: 'easeIn'});
		var run = function() {
			SAPA.app.getController('Login').getUsernameFieldLogin().setValue('');
			SAPA.app.getController('Login').getPasswordFieldLogin().setValue('');
		};
		setTimeout(run,500);
	},

	backFromSignUpScreen: function() {
		this.getSignUpScreen().hide({type: 'slideOut', direction: 'right', duration: 500, easing: 'easeOut'});
		this.getLoginMain().show({type: 'slide', direction: 'right', duration: 500, easing: 'easeIn'});
		var run = function() {
			SAPA.app.getController('Login').getUsernameFieldSignUp().setValue('');
			SAPA.app.getController('Login').getPasswordFieldSignUp().setValue('');
			SAPA.app.getController('Login').getConfirmPasswordFieldSignUp().setValue('');
		};
		setTimeout(run,500);
	},

	autoLogin: function() {
		var currentUser = Parse.User.current();
		var UserSettings = Parse.Object.extend('UserSettings');
		var query = new Parse.Query(UserSettings);
		query.equalTo('username',currentUser.get('username'));
		showLoadingMask('');
		query.first({
			success: function(user) {
				SAPA.config.Runtime.setCurrentUser(user);
				SAPA.app.getController('Login').getLoginMain().hide({type: 'fadeOut', duration: 500, easing: 'easeOut'});
				if(!user.get('gender')) {
					SAPA.app.getController('Login').getUserDemographicsScreen().setZIndex(2);
					SAPA.app.getController('Login').getUserDemographicsScreen().show({type: 'fadeIn', duration: 500, easing: 'easeIn'});
					hideLoadingMask();
				}
				else {
					SAPA.app.getController('Login').getMain().show({type: 'fadeIn', duration: 500, easing: 'easeIn'});
				    var run = function() {
	    				SAPA.app.getController('Main').checkForPush();
	    			}
	    			setTimeout(run,500);
				}
			},
			error: function(error) {
				console.log(error);
			}
		});
	},

	loginUser: function() {

		var username = this.getUsernameFieldLogin().getValue();
		var password = this.getPasswordFieldLogin().getValue();

		if(password === '') {
			Ext.Msg.alert('Error','Please enter a password.',Ext.emptyFn);
			return;
		}

		if(!validateEmail(username)) {
			Ext.Msg.alert('Error','Please enter a valid email address.',Ext.emptyFn);
			return;
		}

		showLoadingMask('Logging in...');
		Parse.User.logIn(username,password, {
			success: function(user) {

				SAPA.config.Runtime.setFailedLoginCount(0);

				var UserSettings = Parse.Object.extend('UserSettings');
				var query = new Parse.Query(UserSettings);
				query.equalTo('username',user.get('username'));
				query.first({
					success: function(result) {
						if(result !== undefined) {
							SAPA.config.Runtime.setCurrentUser(result);
							SAPA.app.getController('Login').getLoginScreen().hide({type: 'fadeOut', duration: 500, easing: 'easeOut'});
							if(!result.get('gender')) {
								SAPA.app.getController('Login').getUserDemographicsScreen().setZIndex(2);
								SAPA.app.getController('Login').getUserDemographicsScreen().show({type: 'fadeIn', duration: 500, easing: 'easeIn'});
								hideLoadingMask();
								var run = function() {
				    				SAPA.app.getController('Login').getUsernameFieldLogin().setValue('');
									SAPA.app.getController('Login').getPasswordFieldLogin().setValue('');
				    			}
				    			setTimeout(run,500);
							}
							else {
								SAPA.app.getController('Login').getMain().show({type: 'fadeIn', duration: 500, easing: 'easeIn'});
				    			var run = function() {
				    				SAPA.app.getController('Main').checkForPush();
				    				SAPA.app.getController('Login').getUsernameFieldLogin().setValue('');
									SAPA.app.getController('Login').getPasswordFieldLogin().setValue('');
				    			}
				    			setTimeout(run,500);
							}
						}
						else {
							Ext.Msg.alert('Invalid email', 'Please enter a valid email address.', Ext.emptyFn);
						}
					},
					error: function(error) {
						console.log(error);
					}
				});

			},
			error: function(user,error) {
				hideLoadingMask();
				if(error.code === 101) {
					Ext.Msg.alert('Error', 'Invalid username or password', function() {
						SAPA.config.Runtime.setFailedLoginCount(SAPA.config.Runtime.getFailedLoginCount() + 1);
						if(SAPA.config.Runtime.getFailedLoginCount() >= 3) {
							Ext.Msg.confirm("Forgot your password?", "Would you like to reset your password? We'll email you with instructions to reset.", function(btn) {
								if(btn === 'yes') {
									showLoadingMask('');
									Parse.User.requestPasswordReset(username, {
									  	success: function() {
									    	hideLoadingMask();
									    	Ext.Msg.alert('Request sent!','You should receive an email with password reset instructions shortly.', Ext.emptyFn);
									  	},
									  	error: function(error) {
									  		hideLoadingMask();
									  		if(error.code === 125) {
									  			Ext.Msg.alert('Invalid email', 'Please enter a valid email address.', Ext.emptyFn);
									  		}
									  	}
									});
								}
							});
						}
					});
				}
			}
		});

	},

	signUpUser: function() {

		var password = this.getPasswordFieldSignUp().getValue();
		var confirmPassword = this.getConfirmPasswordFieldSignUp().getValue();
		var username = this.getUsernameFieldSignUp().getValue();

		if(password !== confirmPassword) {
			Ext.Msg.alert('Error','Passwords do not match.',Ext.emptyFn);
			return;
		}

		if(password === '') {
			Ext.Msg.alert('Error','Please enter a password.',Ext.emptyFn);
			return;
		}

		if(!validateEmail(username)) {
			Ext.Msg.alert('Error','Please enter a valid email address.',Ext.emptyFn);
			return;
		}

		else {

			showLoadingMask('Creating Account...');
			var user = new Parse.User();
			user.set('username',username);
			user.set('password',password);
			user.set('email',username);

			user.signUp(null, {
			  	success: function(user) {
			  		var UserSettings = Parse.Object.extend('UserSettings');
			  		var userSettings = new UserSettings();
			  		userSettings.set('username',user.get('username'));
			  		userSettings.set('push',false);
			  		userSettings.save();

			  		SAPA.config.Runtime.setCurrentUser(userSettings);
			    	hideLoadingMask();
			    	
			    	SAPA.app.getController('Login').getSignUpScreen().hide({type: 'fadeOut', duration: 500, easing: 'easeOut'});
			    	SAPA.app.getController('Login').getUserDemographicsScreen().setZIndex(2);
			    	SAPA.app.getController('Login').getUserDemographicsScreen().show({type: 'fadeIn', duration: 500, easing: 'easeIn'});
			    	hideLoadingMask();
			    	var run = function() {
	    				SAPA.app.getController('Login').getUsernameFieldSignUp().setValue('');
	    				SAPA.app.getController('Login').getPasswordFieldSignUp().setValue('');
						SAPA.app.getController('Login').getConfirmPasswordFieldSignUp().setValue('');
	    			}
	    			setTimeout(run,500);
			  	},
			  	error: function(user, error) {
			    	hideLoadingMask();
			    	Ext.Msg.alert('Error',error.message.charAt(0).toUpperCase() + error.message.slice(1),Ext.emptyFn);
			  	}
			});
			
		}
		
	},

	logOutUser: function() {
		Ext.Msg.confirm("Log out", "Are you sure you want to log out?", function(btn) {
			if(btn === 'yes') {
				Parse.User.logOut();
				SAPA.config.Runtime.setCurrentUser(undefined);
				SAPA.app.getController('Login').getMain().hide({type: 'fadeOut', duration: 500, easing: 'easeOut'});
				SAPA.app.getController('Login').getLoginMain().show({type: 'slide', direction: 'right', duration: 500, easing: 'easeIn'});
			}
		});
	},

	initializeDemographicsScreen: function() {

		this.getUserDemographicsScreen().setHeight(Ext.getBody().dom.offsetHeight);
		this.getUserDemographicsScreen().setWidth(Ext.getBody().dom.offsetWidth);
		
		var options = [];
		options[0] = {
			text: genderOptions[0],
			value: 'Unselected'
		};
		for(i = 1; i < genderOptions.length; i++) {
			option = {
				text: genderOptions[i],
				value: genderOptions[i]
			};
			options.push(option);
		}
		this.getGenderUserDemographics().setOptions(options);

		var options = [];
		options[0] = {
			text: heightOptions[0],
			value: 'Unselected'
		};
		for(i = 1; i < heightOptions.length; i++) {
			option = {
				text: heightOptions[i],
				value: heightOptions[i]
			};
			options.push(option);
		}
		this.getHeightUserDemographics().setOptions(options);

		var options = [];
		options[0] = {
			text: weightOptions[0],
			value: 'Unselected'
		};
		for(i = 1; i < weightOptions.length; i++) {
			option = {
				text: weightOptions[i],
				value: weightOptions[i]
			};
			options.push(option);
		}
		this.getWeightUserDemographics().setOptions(options);

		var options = [];
		options[0] = {
			text: maritalStatusOptions[0],
			value: 'Unselected'
		};
		for(i = 1; i < maritalStatusOptions.length; i++) {
			option = {
				text: maritalStatusOptions[i],
				value: maritalStatusOptions[i]
			};
			options.push(option);
		}
		this.getMaritalStatusUserDemographics().setOptions(options);

		var options = [];
		options[0] = {
			text: relationshipStatusOptions[0],
			value: 'Unselected'
		};
		for(i = 1; i < relationshipStatusOptions.length; i++) {
			option = {
				text: relationshipStatusOptions[i],
				value: relationshipStatusOptions[i]
			};
			options.push(option);
		}
		this.getRelationshipStatusUserDemographics().setOptions(options);

		var options = [];
		options[0] = {
			text: exerciseOptions[0],
			value: 'Unselected'
		};
		for(i = 1; i < exerciseOptions.length; i++) {
			option = {
				text: exerciseOptions[i],
				value: exerciseOptions[i]
			};
			options.push(option);
		}
		this.getExerciseUserDemographics().setOptions(options);

		var options = [];
		options[0] = {
			text: smokingOptions[0],
			value: 'Unselected'
		};
		for(i = 1; i < smokingOptions.length; i++) {
			option = {
				text: smokingOptions[i],
				value: smokingOptions[i]
			};
			options.push(option);
		}
		this.getSmokingUserDemographics().setOptions(options);

		var options = [];
		options[0] = {
			text: countryOptions[0],
			value: 'Unselected'
		};
		for(i = 1; i < countryOptions.length; i++) {
			option = {
				text: countryOptions[i],
				value: countryOptions[i]
			};
			options.push(option);
		}
		this.getCountryUserDemographics().setOptions(options);

		var options = [];
		options[0] = {
			text: stateOptions[0],
			value: 'Unselected'
		};
		for(i = 1; i < stateOptions.length; i++) {
			option = {
				text: stateOptions[i],
				value: stateOptions[i]
			};
			options.push(option);
		}
		this.getStateUserDemographics().setOptions(options);

	},

	submitUserDemographics: function() {

		var currentUser = SAPA.config.Runtime.getCurrentUser();
		
		var ageDemographic = this.getAgeUserDemographics().getValue();
		var zipcodeDemographic = this.getZipcodeUserDemographics().getValue();
		var genderDemographic = this.getGenderUserDemographics().getValue();
		var heightDemographic = this.getHeightUserDemographics().getValue();
		var weightDemographic = this.getWeightUserDemographics().getValue();
		var maritalStatusDemographic = this.getMaritalStatusUserDemographics().getValue();
		var relationshipStatusDemographic = this.getRelationshipStatusUserDemographics().getValue();
		var exerciseDemographic = this.getExerciseUserDemographics().getValue();
		var smokingDemographic = this.getSmokingUserDemographics().getValue();
		var countryDemographic = this.getCountryUserDemographics().getValue();
		var stateDemographic = this.getStateUserDemographics().getValue();

		if(!ageDemographic) {
			Ext.Msg.alert('Missing field','Please enter your age.',Ext.emptyFn);
			return;
		}
		else if(isNaN(parseInt(ageDemographic))) {
			Ext.Msg.alert('Error','Age must be an integer.',Ext.emptyFn);
			return;
		}
		else {
			ageDemographic = parseInt(ageDemographic);
		}

		if(!zipcodeDemographic) {
			Ext.Msg.alert('Missing field','Please enter your zipcode.',Ext.emptyFn);
			return;
		}

		if(genderDemographic === 'Unselected') {
			Ext.Msg.alert('Missing field','Please enter your gender.',Ext.emptyFn);
			return;
		}

		if(heightDemographic === 'Unselected') {
			Ext.Msg.alert('Missing field','Please enter your height.',Ext.emptyFn);
			return;
		}

		if(weightDemographic === 'Unselected') {
			Ext.Msg.alert('Missing field','Please enter your weight.',Ext.emptyFn);
			return;
		}

		if(maritalStatusDemographic === 'Unselected') {
			Ext.Msg.alert('Missing field','Please enter your marital status.',Ext.emptyFn);
			return;
		}

		if(relationshipStatusDemographic === 'Unselected') {
			Ext.Msg.alert('Missing field','Please enter your relationship status.',Ext.emptyFn);
			return;
		}

		if(exerciseDemographic === 'Unselected') {
			Ext.Msg.alert('Missing field','Please enter your exercise frequency.',Ext.emptyFn);
			return;
		}

		if(smokingDemographic === 'Unselected') {
			Ext.Msg.alert('Missing field','Please enter your smoking frequency.',Ext.emptyFn);
			return;
		}

		if(countryDemographic === 'Unselected') {
			Ext.Msg.alert('Missing field','Please enter the country you grew up in.',Ext.emptyFn);
			return;
		}

		if((countryDemographic === 'USA' && stateDemographic === 'Unselected') || (countryDemographic === 'United States of America' && stateDemographic === 'Unselected')) {
			Ext.Msg.alert('Missing field','Please enter the state you grew up in.',Ext.emptyFn);
			return;
		}

		else {

			showLoadingMask('');
			currentUser.set('age',ageDemographic);
			currentUser.set('zipcode',zipcodeDemographic);
			currentUser.set('gender',genderDemographic);
			currentUser.set('height',heightDemographic);
			currentUser.set('weight',weightDemographic);
			currentUser.set('maritalStatus',maritalStatusDemographic);
			currentUser.set('relationshipStatus',relationshipStatusDemographic);
			currentUser.set('exerciseFrequency',exerciseDemographic);
			currentUser.set('smokingFrequency',smokingDemographic);
			currentUser.set('country',countryDemographic);
			currentUser.set('stateOrRegion',stateDemographic);
			currentUser.save({
				success: function(user) {
					SAPA.config.Runtime.setCurrentUser(user);
					SAPA.app.getController('Login').getUserDemographicsScreen().setZIndex(0);
					SAPA.app.getController('Login').getUserDemographicsScreen().hide({type: 'fadeOut', duration: 500, easing: 'easeOut'});
					SAPA.app.getController('Login').getMain().show({type: 'fadeIn', duration: 500, easing: 'easeIn'});
				    var run = function() {
	    				SAPA.app.getController('Main').checkForPush();
	    				SAPA.app.getController('Login').getAgeUserDemographics().setValue('');
						SAPA.app.getController('Login').getZipcodeUserDemographics().setValue('');
						SAPA.app.getController('Login').getGenderUserDemographics().setValue('Unselected');
						SAPA.app.getController('Login').getHeightUserDemographics().setValue('Unselected');
						SAPA.app.getController('Login').getWeightUserDemographics().setValue('Unselected');
						SAPA.app.getController('Login').getMaritalStatusUserDemographics().setValue('Unselected');
						SAPA.app.getController('Login').getRelationshipStatusUserDemographics().setValue('Unselected');
						SAPA.app.getController('Login').getExerciseUserDemographics().setValue('Unselected');
						SAPA.app.getController('Login').getSmokingUserDemographics().setValue('Unselected');
						SAPA.app.getController('Login').getCountryUserDemographics().setValue('Unselected');
						SAPA.app.getController('Login').getStateUserDemographics().setValue('Unselected');
	    			}
	    			setTimeout(run,500);
				},
				error: function(error) {
					console.log(error);
				}
			})

		}

	}

});	