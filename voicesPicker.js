
var speachText = ' reminding you that A D sucks hairy balls';

function createScreen() {
	document.write("<div id='voicePickerDiv'  ><span id='voicePickerSetup' ><input type='button' value='Create Voice Buttons' onClick='createVoiceButtons()' /></span><span id='voicePicker' ></span></div>");
	

}

function createVoiceButtons() {
	
	var voicePicker = document.getElementById("voicePicker");

	voicePicker.innerHTML = getVoices();
}

function SQGetURIString() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	if (urlParams.has('sayThis')) {
		return urlParams.get('sayThis')
	};
	return '';
}


function getVoices() {
	if (!'speechSynthesis' in window) {
		console.log("No voices");
		return;
	}
	window.speechSynthesis.cancel();
		voices = speechSynthesis.getVoices();
		voicesCount = voices.length;
		console.log(voicesCount);
		buttons = '';
		for (var i = 0; i < voicesCount; i++) {

				buttons = buttons
						+ "<input type='button' value='"
						+ voices[i].name + " language='(" + voices[i].lang + ") "
						+ "' id='startSpeakingBtn' onclick='speakVoice(" + i
						+ ")' />"
			
		}
		console.log(buttons);
		return buttons;
	
}


function speakVoice(voiceNumber){
	if (!'speechSynthesis' in window) {
		return;
	}
	window.speechSynthesis.cancel();
	voices = speechSynthesis.getVoices();
	if (SQGetURIString() != '') {
		speachText = SQGetURIString();
	}
	var msg = new SpeechSynthesisUtterance();
	msg.voice = voices[voiceNumber];
	msg.text = "This is voice number " + voiceNumber + speachText;
	window.speechSynthesis.speak(msg);
	
}
