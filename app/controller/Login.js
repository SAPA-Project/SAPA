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
			    SAPA.app.getController('Login').getMain().show({type: 'fadeIn', duration: 500, easing: 'easeIn'});
			    var run = function() {
    				SAPA.app.getController('Main').checkForPush();
    			}
    			setTimeout(run,500);
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
			    			SAPA.app.getController('Login').getMain().show({type: 'fadeIn', duration: 500, easing: 'easeIn'});
			    			var run = function() {
			    				SAPA.app.getController('Main').checkForPush();
			    			}
			    			setTimeout(run,500);
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
			  		userSettings.save();

			  		SAPA.config.Runtime.setCurrentUser(userSettings);
			    	hideLoadingMask();
			    	
			    	SAPA.app.getController('Login').getSignUpScreen().hide({type: 'fadeOut', duration: 500, easing: 'easeOut'});
			    	SAPA.app.getController('Login').getMain().show({type: 'fadeIn', duration: 500, easing: 'easeIn'});
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
	}

});	