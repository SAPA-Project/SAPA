Ext.define('SAPA.controller.Login', {
	extend : 'Ext.app.Controller',
	xtype: 'logincontroller',
	config: {
		refs: {
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
			'fullNameFieldSignUp': 'textfield[itemId=FullNameFieldSignUp]',
			'usernameFieldSignUp': 'emailfield[itemId=UsernameFieldSignUp]',
			'passwordFieldSignUp': 'passwordfield[itemId=PasswordFieldSignUp]',
			'confirmPasswordFieldSignUp': 'passwordfield[itemId=ConfirmPasswordFieldSignUp]',
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
			SAPA.app.getController('Login').getFullNameFieldSignUp().setDisabled(false);
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
			SAPA.app.getController('Login').getFullNameFieldSignUp().setValue('');
			SAPA.app.getController('Login').getUsernameFieldSignUp().setValue('');
			SAPA.app.getController('Login').getPasswordFieldSignUp().setValue('');
			SAPA.app.getController('Login').getConfirmPasswordFieldSignUp().setValue('');
		};
		setTimeout(run,500);
	},

});	