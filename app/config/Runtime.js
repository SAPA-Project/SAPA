Ext.define('SAPA.config.Runtime', {
    singleton : true,
    config : {
    	
        currentDeviceToken: undefined,
        
        currentUser: undefined,
        
        failedLoginCount: 0,

        sliderQuestions: undefined
        
    },
    constructor : function(config){
        this.initConfig(config);
    }
});