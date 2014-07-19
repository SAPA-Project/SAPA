//Global functions:

function showLoadingMask(message) {
	Ext.Viewport.setMasked({
	    xtype: 'loadmask',
	    message: message
	});
};

function hideLoadingMask() {
	Ext.Viewport.setMasked(false);
};

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

var sliderQuestions = [
	'In the last 5 minutes, how much have you been feeling active?',
	'In the last 5 minutes, how much have you been feeling afraid?',
	'In the last 5 minutes, how much have you been feeling alert?',
	'In the last 5 minutes, how much have you been feeling angry?',
	'In the last 5 minutes, how much have you been feeling anxious?',
	'In the last 5 minutes, how much have you been feeling aroused?',
	'In the last 5 minutes, how much have you been feeling ashamed?',
	'In the last 5 minutes, how much have you been feeling astonished?',
	'In the last 5 minutes, how much have you been feeling at ease?',
	'In the last 5 minutes, how much have you been feeling at rest?',
	'In the last 5 minutes, how much have you been feeling attentive?',
	'In the last 5 minutes, how much have you been feeling blue?',
	'In the last 5 minutes, how much have you been feeling bored?',
	'In the last 5 minutes, how much have you been feeling calm?',
	'In the last 5 minutes, how much have you been feeling cheerful?',
	'In the last 5 minutes, how much have you been feeling clutched up?',
	'In the last 5 minutes, how much have you been feeling confident?',
	'In the last 5 minutes, how much have you been feeling content?',
	'In the last 5 minutes, how much have you been feeling delighted?',
	'In the last 5 minutes, how much have you been feeling depressed?',
	'In the last 5 minutes, how much have you been feeling determined?',
	'In the last 5 minutes, how much have you been feeling distressed?',
	'In the last 5 minutes, how much have you been feeling drowsy?',
	'In the last 5 minutes, how much have you been feeling dull?',
	'In the last 5 minutes, how much have you been feeling elated?',
	'In the last 5 minutes, how much have you been feeling energetic?',
	'In the last 5 minutes, how much have you been feeling enthusiastic?',
	'In the last 5 minutes, how much have you been feeling excited?',
	'In the last 5 minutes, how much have you been feeling fearful?',
	'In the last 5 minutes, how much have you been feeling frustrated?',
	'In the last 5 minutes, how much have you been feeling full of pep?',
	'In the last 5 minutes, how much have you been feeling gloomy?',
	'In the last 5 minutes, how much have you been feeling grouchy?',
	'In the last 5 minutes, how much have you been feeling guilty?',
	'In the last 5 minutes, how much have you been feeling happy?',
	'In the last 5 minutes, how much have you been feeling hostile?',
	'In the last 5 minutes, how much have you been feeling idle?',
	'In the last 5 minutes, how much have you been feeling inactive?',
	'In the last 5 minutes, how much have you been feeling inspired?',
	'In the last 5 minutes, how much have you been feeling intense?',
	'In the last 5 minutes, how much have you been feeling interested?',
	'In the last 5 minutes, how much have you been feeling irritable?',
	'In the last 5 minutes, how much have you been feeling jittery?',
	'In the last 5 minutes, how much have you been feeling lively?',
	'In the last 5 minutes, how much have you been feeling lonely?',
	'In the last 5 minutes, how much have you been feeling nervous?',
	'In the last 5 minutes, how much have you been feeling placid?',
	'In the last 5 minutes, how much have you been feeling pleased?',
	'In the last 5 minutes, how much have you been feeling proud?',
	'In the last 5 minutes, how much have you been feeling quiescent?',
	'In the last 5 minutes, how much have you been feeling quiet?',
	'In the last 5 minutes, how much have you been feeling relaxed?',
	'In the last 5 minutes, how much have you been feeling sad?',
	'In the last 5 minutes, how much have you been feeling satisfied?',
	'In the last 5 minutes, how much have you been feeling scared?',
	'In the last 5 minutes, how much have you been feeling serene?',
	'In the last 5 minutes, how much have you been feeling sleepy?',
	'In the last 5 minutes, how much have you been feeling sluggish?',
	'In the last 5 minutes, how much have you been feeling sociable?',
	'In the last 5 minutes, how much have you been feeling sorry?',
	'In the last 5 minutes, how much have you been feeling still?',
	'In the last 5 minutes, how much have you been feeling strong?',
	'In the last 5 minutes, how much have you been feeling surprised?',
	'In the last 5 minutes, how much have you been feeling tense?',
	'In the last 5 minutes, how much have you been feeling tired?',
	'In the last 5 minutes, how much have you been feeling tranquil?',
	'In the last 5 minutes, how much have you been feeling unhappy?',
	'In the last 5 minutes, how much have you been feeling upset?',
	'In the last 5 minutes, how much have you been feeling vigorous?',
	'In the last 5 minutes, how much have you been feeling wakeful?',
	'In the last 5 minutes, how much have you been feeling warmhearted?',
	'In the last 5 minutes, how much have you been feeling wide awake?',
	'In the last 5 minutes, how much have you been feeling alone?',
	'In the last 5 minutes, how much have you been feeling kindly?',
	'In the last 5 minutes, how much have you been feeling scornful?'
];

//Catch Cordova javascript errors:

window.onerror = function(msg,url,line) {

	var idx = url.lastIndexOf("/");

	if(idx > -1) {
		url = url.substring(idx + 1);
	}

	alert("ERROR in " + url + " (line #" + line + "): " + msg);

	return false;

};


