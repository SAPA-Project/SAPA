Ext.define('SAPA.controller.Login', {
	extend : 'Ext.app.Controller',
	xtype: 'logincontroller',
	config: {
		refs: {
			'main': 'main',
			'loginMain': 'loginmain',
			'loginScreen': 'loginscreen',
			'signUpScreen': 'signupscreen',
			'signInButtonMain': 'button[itemId=SignInButton]',
			'signUpButtonMain': 'button[itemId=SignUpButton]',
			'backButtonLogin': 'button[itemId=BackButtonLogin]',
			'backButtonSignUp': 'button[itemId=BackButtonSignUp]',
			'usernameFieldLogin': 'emailfield[itemId=UsernameFieldLogin]',
			'passwordFieldLogin': 'passwordfield[itemId=PasswordFieldLogin]',
			'usernameFieldLogin': 'emailfield[itemId=UsernameFieldLogin]',
			'passwordFieldLogin': 'passwordfield[itemId=PasswordFieldLogin]',
			'usernameFieldSignUp': 'emailfield[itemId=UsernameFieldSignUp]',
			'passwordFieldSignUp': 'passwordfield[itemId=PasswordFieldSignUp]',
			'confirmPasswordFieldSignUp': 'passwordfield[itemId=ConfirmPasswordFieldSignUp]',
			'loginButton': 'button[itemId=LoginButton]'
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
						hideLoadingMask();
						if(result !== undefined) {
							SAPA.config.Runtime.setCurrentUser(result);
							// SAPA.app.getController('Login').showMainViewAfterLogin(result);
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

	}

});	