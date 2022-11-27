var speachText = '';
var answerText = '';
var answerStyle = 'style="font-family:Courier New;color:Black;font-size:30px;topMargin=0px;bottomMargin=0px;"';

function createScreen() {
	document
	.write("<div id='SimonSays' class='SQQuizMain' >" +
				"<span id='conditions' class='grad'>"+
					"<table border='0' >"+ 
						"<table border='1'>" +
							"<tr><td><span id='SQmenu' STYLE='color: black'>Use the GuestBook.</BR></BR>Pick the ride conditions and the GuestBook's famous knowledge base will tell you what to wear"+
							"</BR></BR>" + "<input type='button' class='userBtnNext' value='What should I wear?' title='What should I wear?' id='Next' onclick='makeRecommendations()' />" +
							"</span></td>" +
							"<td> Ride " + setupRange('rideTypeSpan', 'rideType', 'setRideType' , 1,
									new Array('Saturday race face', 'Thursday pootle', 'Weekend cafe jaunt' )) + "</td>"+
							"<td> Temperature range " + setupRange('tempRangeSpan', 'tempRange', 'setTempRange' , 3, 
									new Array('>25', '20-25', '15-20', '10-15', '5-10', '<5' )) + "</td>"+
							"<td> Moistness " + setupRange('tempMoistness', 'moistRange', 'setMoistRange' , 0, 
									new Array('Dry as a bone', 'Humid', 'Light mist', 'Light rain', 'Downpour' )) + "</td>"+
							"<td> Going to the pub " + setupRange('tempPub', 'pubRange', 'setPubRange' , 0, 
									new Array('Hell yes', 'Only for a couple', 'Not tonight Josephine' )) + "</td>"+
						 	"<td><span id='SQButtons'></span></td></tr></table>" +
						 "<tr><td><span id='simonSaysWearThis'></span></td></tr>" +
				"</table></span></div>");

}

function makeRecommendations() {
	counter = 0;
	answerText = "";
	wearThis = "Let's see what you should wear..."
	SQWriteAnswer();
	
	setTimeout(SQWriteRecommendations, 4000)
}

function SQWriteRecommendations() {
	temperature = document.getElementById("tempRange").value;
	rideType = document.getElementById("rideType").value;
	moistness = document.getElementById("moistRange").value;
	pub = document.getElementById("pubRange").value;
	
	recommendation = "";
	if (temperature == '>25' || temperature =='20-25' || ( temperature == '15-20' && rideType == 'Saturday race face')) {
		recommendation = recommendation + "Considering the temperature & ride type, you shouldn't need more than a jersey up top, and shorts." + "</BR></BR>";
	}
	if (rideType != 'Saturday race face' && ( temperature == '15-20' )) {
		recommendation = recommendation + "Considering the temperature & ride type, you should wear 1 thin layer and a jersey, and shorts." + "</BR></BR>";
	}
	if (rideType == 'Saturday race face' && ( temperature == '10-15' )) {
		recommendation = recommendation + "Considering the temperature & ride type, you should wear 2 thin layers, and shorts." + "</BR></BR>";
	}
	if (rideType != 'Saturday race face' && ( temperature == '10-15' )) {
		recommendation = recommendation + "Considering the temperature & ride type, you should wear 1 thin layer and a jersey, and shorts." + "</BR></BR>";
	}
	if ( temperature == '5-10' || temperature == '<5' ) {
		recommendation = recommendation + "Considering the temperature & ride type, you should wear 2 thin layers and a jacket. It's under 10, so protect your knees with longs." + "</BR></BR>";
	}
	if ((moistness == 'Light rain' || moistness == 'Downpour') && ( temperature == '5-10' || temperature == '<5' )) {
		recommendation = recommendation + "You should wear winter boots today." + "</BR></BR>";
	}
	if (moistness == 'Light rain' || moistness == 'Downpour') {
		recommendation = recommendation + "Considering the moistness, you should add a waterproof"+ "</BR></BR>";
	}
	if (moistness == 'Light mist') {
		recommendation = recommendation + "Considering the moistness, you should add a waterproof gillet"+ "</BR></BR>";
	}
	if ((pub == 'Hell yes' || pub == 'Only for a couple') && ( temperature == '10-15' ||temperature == '5-10' || temperature == '<5' )) {
		recommendation = recommendation + "You should take an extra layer for the pub."+ "</BR></BR>";
	}
	
	
	document.getElementById("simonSaysWearThis").innerHTML = document.getElementById("simonSaysWearThis").innerHTML  + "</BR></BR>" + recommendation;
}

function setRideType() {
	if (document.getElementById("rideType").value == 'Weekend cafe jaunt' ) {
		setTimeout(speakVoice("Fuck the cafe, go for a pint"), 300);
	}
}
function setTempRange() {
	if (document.getElementById("tempRange").value == '5-10' || document.getElementById("tempRange").value == '<5') {
		setTimeout(speakVoice("Less than 10 degrees, wrap up your knees"), 300);
	}
	if (document.getElementById("tempRange").value == '>25' || document.getElementById("tempRange").value == '20-15') {
		setTimeout(speakVoice("Gonna be hot, don't wear a lot"), 300);
	}
}
function setMoistRange() {
	if (document.getElementById("moistRange").value == 'Downpour' ) {
		setTimeout(speakVoice("Oh, nice and moist"), 300);
	}
}
function setPubRange() {
	if (document.getElementById("pubRange").value == 'Not tonight Josephine' ) {
		setTimeout(speakVoice("If you don't go, they'll talk about you"), 300);
	}
	if (document.getElementById("pubRange").value == 'Only for a couple' ) {
		setTimeout(speakVoice("Who are you kidding"), 300);
	}
}


function setupRange(spanName, id, functionName, defaultSelected, options){
	  var retVal = "<br/>";
	  retVal = retVal + '<span id="' + spanName + '"> <select name="' + id + '" id="' + id + '" onchange="'+ functionName + '();" >';
	  lapIdCount =options.length;
	  for (var i=0 ; i<lapIdCount ; i++){
	   if (options[i]=='-') {
	                retVal = retVal + '<optgroup label="----------"></optgroup>';   
	            } else {
	          retVal = retVal + '<option value="' + options[i] + '"' ;
	       if (i==defaultSelected){
	        retVal = retVal+' selected' ;
	       }
	       retVal = retVal + '>' + options[i] + '</option>';
	    }
	  }
	  retVal = retVal + '</select></span>';
	  return retVal;
	 }

function speakVoice(speachText){
	if (!'speechSynthesis' in window) {
		return;
	}
	window.speechSynthesis.cancel();
	getApprovedVoices();
	if (approvedVoices.length > 0) {
		var msg = new SpeechSynthesisUtterance();	
		msg.voice = voices[Math.floor(Math.random() * approvedVoices.length)];

		msg.text = speachText;
		window.speechSynthesis.speak(msg);
	}
}

function getApprovedVoices() {
	approvedVoices = [];
	window.speechSynthesis.cancel();
	voices = speechSynthesis.getVoices();
	voicesCount = voices.length;
	if (voicesCount == 0) {
		console.log("No voices #2");
		return;
	}
	for (var i = 0; i < voicesCount; i++) {
		if ( voices[i].name.includes('English') ){
			approvedVoices.push(i);
		}
	}
}

function SQWriteAnswer() {
	if (!wearThis) {
		return;
	}
	if (counter < wearThis.length) {
		answerText = answerText += wearThis.charAt(counter);

		document.getElementById("simonSaysWearThis").innerHTML = "<p " + answerStyle + ">" + answerText + "</p>";
		counter++;
		setTimeout(SQWriteAnswer, 80);
	}
}
