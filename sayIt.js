var speachText = ' reminding you that A D sucks hairy balls';

var insults = [ "If I had a face like yours I'd sue my parents", 
	"Everyone who ever loved you was wrong", 
	"You know people just put up with you, right", 
	"You're the human version of Internet Explorer", 
	"Your mother was a hamster, and your father smelt of elderberries", 
	"You are not attractive enough to be that stupid", 
	"Your dad should have pulled out", 
	"You look like your face was on fire and somebody tried to put it out with a fork", 
	"Norwich rejected you", 
	"Scoundrel", 
	"You look like a before picture", 
	"fart smeller"
	,"I hope you step on a lego"
	,"I hope your asshole grows tastebuds"
	,"Not even Yodel would deliver you"
	,"Your Mum got fined for littering when she dropped you off at school"
	,"I hope both sides of your pillow are always warm"
	,"I bet you like your steak well done"
	,"You've lived up to your potential"
	,"Who ties your shoes for you?"
	,"You're the reason God created the middle finger"
	,"You're lucky mirrors can't laugh"
	,"Your face makes onions cry"
	,"You bring everyone so much joy when you leave the room"
	,"You are proof God has a sense of humor"
	,"The last time I saw something like you, I flushed it"
	,"You are so old, when you were a kid rainbows were black and white"
	,"Stephen King has nightmares about you"
	,"I bet your Mum never put your colouring pages on the fridge"
	,"I'm jealous of all the people who haven't met you"
	,"You've only got 2 brain cells and they are both fighting for 3rd place"
	,"I love what you've done with your hair. How do you get it to come out of your nostrils like that"
	,"You are a fart factory"
	,"You have a face made for radio"
	,"You push a lot of doors that say 'pull', don't you"
	,"Mirrors can't talk. Lucky for you, they can't laugh, either"
	,"It's impossible to underestimate you"
	,"Hey, you have something on your chin. No, the 3rd one down"
	,"You look like something I would draw with my left hand"
	,"You are the reason shampoo has instructions"
	,"Did your parents ever ask you to run away from home"
	,"You are so full of crap, the sewer is empty"
	,"I know a mind reader who would charge you half price"
	,"Clunge"
	,"Bellend"
	,"You look nice       NOT"
	,"Your face"
	,"Tool"
	,"Wanker"
	,"Tit"
	];
function createScreen() {
	document.write("<div id='voicePickerDiv'  ><span id='voicePickerSetup' >Touch me</span><span id='voicePicker' ></span></div>");
	extraWord = SQGetURIString();
	if (extraWord != '') {
		insults.push(extraWord);
	}
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
	speachText = insults[Math.floor(Math.random() * insults.length)];

	var msg = new SpeechSynthesisUtterance();	
	
	msg.voice = voices[Math.floor(Math.random() * voices.length)];

	msg.text = speachText;
	window.speechSynthesis.speak(msg);
	
	setTimeout(speakVoice, 4500);
}

