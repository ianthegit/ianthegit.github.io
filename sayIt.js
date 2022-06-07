var speachText = ' reminding you that A D sucks hairy balls';

function createScreen() {
	document.write("<div id='voicePickerDiv'  ><span id='voicePickerSetup' >Touch me</span><span id='voicePicker' ></span></div>");
	
	setTimeout(speakVoice, 3000);
}

function SQGetURIString() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	if (urlParams.has('sayThis')) {
		return urlParams.get('sayThis')
	};
	return '';
}

function speakVoice(){
	if (!'speechSynthesis' in window) {
		return;
	}
	window.speechSynthesis.cancel();
	voices = speechSynthesis.getVoices();
	if (SQGetURIString() != '') {
		speachText = SQGetURIString();
	}
	var msg = new SpeechSynthesisUtterance();	
	
	msg.voice = voices[Math.floor(Math.random() * voices.length)];

	msg.text = speachText;
	window.speechSynthesis.speak(msg);
	
	setTimeout(speakVoice, 4000);
}

