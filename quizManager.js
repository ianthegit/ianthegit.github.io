

var meta = document.createElement('meta');
meta.httpEquiv = "X-Clacks-Overhead";
meta.content = "GNU Terry Pratchett";
document.getElementsByTagName('head')[0].appendChild(meta);


//Photo getter thingy https://www.publicalbum.org/blog/embedding-google-photos-image
//Alternate Photo thingy https://www.labnol.org/embed/google/photos/
// Big quiz resource https://readymadepubquiz.com/pub-quizzes-main-menu/
//Ditloids https://www.quizmasters.biz/DB/Que/Static/Brainteasers/Ditloids_01.html
//Horror  https://metro.co.uk/2016/03/24/quiz-can-you-guess-these-terrifying-horror-movies-5769102/
// SMash Answers https://twitter.com/smashinganswers?lang=en

//https://www.edinburghnews.scotsman.com/whats-on/arts-and-entertainment/25-funny-pub-quiz-questions-2020-hilarious-and-quirky-trivia-ask-your-online-quiz-plus-answers-2540427
//  https://www.mylondon.news/whats-on/family-kids-news/take-really-random-questions-quiz-18168558
//  https://www.stokesentinel.co.uk/whats-on/whats-on-news/ultimate-virtual-pub-quiz-with-4141015
//  http://www.celebritizer.com/   Who has worked with whom

currQuestIndex = 0;
palindromeCounter=0;
pubSingerCounter=0;
currQuestStageIndex = -1;
discussionPointIndex=-1;
resultText = '';
questResultData = new Array(6);
question = 0;
quizStage = "Questions";
quizStageQuestions = "Questions";
quizStageAnswers = "Answers";
quizQuestionTypeText = 'text';
quizQuestionTypePicture = 'picture';
quizQuestionTypeSpotify = 'spotify';
quizQuestionType2Picture = '2picture';
quizQuestionType2PictureAnswer = '2pictureAnswer'
quizQuestionTypePictureAnswer = 'pictureAnswer';
quizQuestionType2PictureQuestion = '2pictureQuestion'
quizQuestionType4PictureQuestion = '4pictureQuestion'
tags = new Array();
tempTags = new Array();
showAll = 'ShowAll';
defaultTag = 'Freebie';
showTags = false;
today = new Date();
month = today.getMonth() + 1
todayString = "" + today.getDate() + "/" + month + "/" + today.getFullYear();
todayString = "" + today.getFullYear() + "-" + month + "-" + today.getDate();
passwordEntered=false;
password='letmein';
showTagsURI='showTags=1';
splashTypeText='text';
splashTypePictureAndText = 'pictureAndText';
HBCgif = 'https://i.gifer.com/origin/95/953e95f22cef08c407ed0b94458e3753_w200.gif'
	
questionStyle = 'style="font-family:verdana;color:Black;font-size:30px;topMargin=10px;bottomMargin=10px"';
answerStyle = 'style="font-family:Courier New;color:Black;font-size:30px;topMargin=0px;bottomMargin=0px;"';
previousButton = "<input type='button' class='userBtnStop' value='Previous' title='Previous' id='Previous' onclick='runPreviousQuestStage()' />";
nextButton = "<input type='button' class='userBtnNext' value='Next' title='Next' id='Next' onclick='runNextQuestStage()' />";
reRunButton = "<input type='button' class='userBtnNext' value='Repeat' title='Repeat' id='Repeat' onclick='reRunQuestStage()' />";
closeSplashButtonStart = "<input type='button' class='userBtnNext' value='Start' title='Start' id='Start Quiz' onclick='SQStartQuiz(";
closeSplashButtonEnd=")' />";
answerButton = "<input type='button' class='userBtnNext' value='Answers' title='Answers' id='Next' onclick='runNextQuestStage()' />";
tagsButton = "<input type='button' class='userBtnStop' value='Categories' title='Categories' id='Categories' onclick='showCategories()' />";
Table4ColumnStart="<table style='font-family:verdana;color:Black;font-size:30px;topMargin=10px;bottomMargin=10px' width='95%' border='1'><tr><th>1</th><th>2</th><th>3</th><th>4</th></tr><tr><td>";
Table4ColumnEnd=" </td></tr></table>";
beginAudioLoop= '<audio controls loop><source src="'  ;
beginAudio= '<audio controls><source src="'  ;
endAudio = '?raw=true" type="audio/mp3">   </audio>';
startYouTube=" <a href='";
endYouTube="' target='_blank'>The Answer...</a> ";
startPointsButton = "<input type='button' class='userBtnNext' value='Next' id='nextPoint' onclick='SQWriteAnswerPoint()' />";

//emojis
const emoji = {
	bigSmile : " &#128513;"
	,cryLaugh : " &#128514;"
	,stop : " &#9940;"
	,baby : " &#128113;"
	,watch : " &#8986;"
	,rainUmbrella : " &#9748;"
	,coffee : " &#9749;"
	,anchor : " &#9875	;"
	,lightning : " &#9889;"
	,football : " &#9917;"
	,snowman : " &#9924	;"
	,chains : " &#9939;"
	,church : " &#9962;"
	,fountain : " &#9970;"
	,dinghy : " &#9973;"
	,corn : " &#127805;"
	,shamrock : " &#127808;"
	,mushroom : " &#127812;"
	,watermelon : " &#127817;"
	,orange : " &#127818;"
	,lemon : " &#127819;"
	,banana : " &#127820;"
	,pineapple : " &#127821;"
	,peach : " &#127825;"
	,cake : " &#127856;"
	,redwine : " &#127863;"
	,beer : " &#127866;"
	,beers : " &#127867;"
	,champagne : " &#127870;"
	,present : " &#127873;"
	,spooky : " &#127875;"
	,xmasTree : " &#127876;"
	,santa : " &#127877;"
	,balloon : " &#127880;"
	,pawPrints : " &#128062;"
	,eyes : " &#128064;"
	,eye : " &#128065;"
	,ear : " &#128066;"
	,nose : " &#128067;"
	,lips : " &#128068;"
	,tongue : " &#128069;"
	,pointUp : " &#128070;"
	,pointDown : " &#128071;"
	,pointLeft : " &#128072;"
	,pointRight : " &#128073;"
	,fist : " &#128074;"
	,OK : " &#128076;"
	,thumbsUp : " &#128077;"
	,thumbsDown : " &#128078;"
	,clap : " &#128079;"
	,crown : " &#128081;"
	,baby : " &#128118;"
	,grandma : " &#128117;"
/*
		, : " &#;"
	, : " &#;"
	, : " &#;"
	, : " &#;"
	, : " &#;"
	, : " &#;"
	, : " &#;"
	, : " &#;"
	, : " &#;"
	, : " &#;"
 * 
 */
};
Object.freeze(emoji);

audioOnlyYoutubeStart =	'<div style="position:relative;width:267px;height:25px;overflow:hidden;"> <div style="position:absolute;top:-276px;left:-5px"> <iframe width="300" height="300"  src="https://www.youtube.com/embed/';
audioOnlyYoutubeEnd =	'?rel=0"> </iframe> </div> </div>' ;


gbp="&#163 ";
quests = new Array();

function getMonthName(index) {
	mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	  return mlist[index];
	};

function addQuest(quest, questData) {
	tempArray = quest.questInfo;
	if (questData.question != '') {
		if (quest.tags.includes('year') && tempArray.length < 12) {
			questData.question = 'In ' + getMonthName(tempArray.length)  + ', ' + questData.question;
		} else {
			questData.question = tempArray.length + 1 + ') ' + questData.question;
		}
	}
	tempArray.push(questData);
}


currQuest = quests[0];
var questIndexBuilder = 0;
questIndexBuilder = -1;


function tagsFromURI() {
	tagStringFromURI = SQGetURIString();
	if (!tagStringFromURI) {
		tagStringFromURI = defaultTag;
	}
	//tagStringFromURI;
	return tagStringFromURI.split(",");
}
function SQInit() {
	

	tags = tagsFromURI();
	showTags = SQShouldShowTags();
	
	document
	.write("<div id='SQQuiz' class='SQQuizMain' ><span id='SQworkarea' class='grad'><table border='0' ><table border='1'>"
			+ "<tr><td><span id='SQmenu' STYLE='color: black'></span></td>"
			+ "<td><span id='SQButtons'></span></td></tr></table>"
			+ "<tr><td><span id='SQAnswer'></span></td></tr>"
			+ "<tr><td><span id='SQquestData'></span></td></tr>"
			+ "<tr><td><span id='SQImage'></span></td></tr>"
			+ "</table></span></div>");

	document.getElementById("SQquestData").style.margin = "0px 0px 0px 0px";
	document.getElementById("SQAnswer").style.margin = "0px 0px 0px 0px";
	SQInitMenu();

	if (currQuestStageIndex > -1) {
		SQRestartQuest();
	}
}
function SQGetURIString() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	if (urlParams.has('quizType')) {
		return urlParams.get('quizType')
	};
	return ;
}

function SQShouldShowTags() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	if (urlParams.has('showTags')) {
		if ( urlParams.get('showTags') == 1) {
			return true;
		}
	};
	return false;
}


function SQLimitMenuDuringQuest(textToDisplay) {
	document.getElementById("SQmenu").innerHTML = textToDisplay;
}
function SQResetAndStore() {
	currQuest = "";
	currQuestIndex = 0;
	currQuestStageIndex = -1;
}

function SQInitMenu() {
	var menuArea = document.getElementById("SQmenu");

	if (showTags) {
		menuArea.innerHTML = 'Rounds' + beginAudioLoop + 'https://github.com/ianthegit/ianthegit.github.io/blob/main/audio/intro.mp3' + endAudio + '<BR/><BR/>' + SQInitQuestButtons(quests)  + '<BR/><BR/>Restrict rounds list by interest<BR/><BR/>'+ SQInitTagButtons();
	} else {
		menuArea.innerHTML = ' <BR/><BR/>' + SQInitQuestButtons(quests)  ;
	}
}

function SQInitMenuWithTags() {
	var menuArea = document.getElementById("SQmenu");

	menuArea.innerHTML = SQInitTagButtons();
}

function SQInitQuestData() {
	SQGetQuestArea().innerHTML = '';
}

function SQStartQuizFromButton(quizIndex) {
	
	if (SQIsQuizTodays(quizIndex)) {
		if (!SQIsNoPassword(quizIndex)) {
			if (!passwordEntered) {
				if (!passwordPasses()) {
					return;
				}
				passwordEntered=true;
			}
		}
	}
	naturalizedQuizIndex = quizIndex + 1;
	hoverText='';
	if (quests[quizIndex].hasOwnProperty("splash")) {
		hoverText=quests[quizIndex].splash.splashText;
	}
	document.getElementById("SQmenu").innerHTML = '<span title="' + hoverText + '" class="visible"> (' + naturalizedQuizIndex + ') ' + quests[quizIndex].name + " - " + quests[quizIndex].hoverover + '</span>';
	
	extraText='';
	if (SQIs7DegreesOfHBC(quizIndex)){
		extraText='</BR></BR>This is a 7 Degrees of Helena Bonham Carter quiz - There is an extra point for recognising whch film(s) also starred Helena Bonham Carter (only if you get the film name correct too)';
	}
	
	if (quests[quizIndex].hasOwnProperty('splash')) {
		if (splashTypeText == quests[quizIndex].splash.splashType ) {
			SQGetQuestArea().innerHTML = "<p " + questionStyle + ">"+ quests[quizIndex].splash.splashText + extraText + "   " + closeSplashButtonStart + quizIndex + closeSplashButtonEnd +  "</p>";
			if (SQIs7DegreesOfHBC(quizIndex)){
				sqInitPicture(HBCgif);
			}
		} 
		if (splashTypePictureAndText == quests[quizIndex].splash.splashType ) {
			SQGetQuestArea().innerHTML = "<p " + questionStyle + ">"+ quests[quizIndex].splash.splashText + extraText +"   " + closeSplashButtonStart + quizIndex + closeSplashButtonEnd +  "</p>";
			console.log("<p " + questionStyle + ">"	+ quests[quizIndex].splash.splashText + "   " + closeSplashButtonStart + quizIndex + closeSplashButtonEnd +  "</p>");
			sqInitPicture(quests[quizIndex].splash.splashImage);
		}
		return;
	} else {
		if (SQIsQuizMusic(quizIndex)){
			SQGetQuestArea().innerHTML = "<p " + questionStyle + "> This quiz is a Music quiz.  Please ensure you are only sharing sound, not screen.  " + extraText + closeSplashButtonStart + quizIndex + closeSplashButtonEnd +  "</p>";
			if (SQIs7DegreesOfHBC(quizIndex)){
				sqInitPicture(HBCgif);
			}
			return;
		} else {
			if (SQIs7DegreesOfHBC(quizIndex)){
				SQGetQuestArea().innerHTML = "<p " + questionStyle + ">This is a 7 Degrees of Helena Bonham Carter quiz - There is an extra point for recognising whch film(s) also starred Helena Bonham Carter (only if you get the film name correct too)" + closeSplashButtonStart + quizIndex + closeSplashButtonEnd +  "</p>";
				//console.log("<p " + questionStyle + ">"	+ quests[quizIndex].splash.splashText + "   " + closeSplashButtonStart + quizIndex + closeSplashButtonEnd +  "</p>");
				sqInitPicture(HBCgif);
				return;
			}
		}
	} 

	
	SQStartQuiz(quizIndex);
}

function SQStartQuiz(quizIndex) {
	naturalizedQuizIndex = quizIndex + 1;
	

	currQuestStageIndex = 0;
	quizStage = quizStageQuestions;
	currQuestIndex = quizIndex;
	runNextQuestStage();

}

function passwordPasses() {
	passwordAttempt = '';
	passwordAttempt=prompt('This quiz is for this evening, so you need to enter a password to play it.','');
	if (!(passwordAttempt == password)) {
		return false;
	}
	return true;
}
function reRunQuestStage() {
	currQuestStageIndex = currQuestStageIndex - 1;
	runNextQuestStage();
}

function runNextQuestStage() {
	discussionPointIndex=-1;
	questStageData = quests[currQuestIndex].questInfo;
	if (currQuestStageIndex == questStageData.length
			&& quizStage == quizStageQuestions) {
		currQuestStageIndex = 0;
		quizStage = quizStageAnswers;
	}
	if (currQuestStageIndex < 0 && quizStage == quizStageAnswers) {
		currQuestStageIndex = questStageData.length - 1;
		quizStage = quizStageQuestions;
	}
	if (currQuestStageIndex < 0 && quizStage == quizStageQuestions) {
		currQuestStageIndex = 0;
	}

	if (currQuestStageIndex == questStageData.length
			&& quizStage == quizStageAnswers) {
		resultText = resultText;
		SQInitQuestData();
		SQInitMenu();
		SQGetButtonsArea().innerHTML = '';
		SQGetAnswerArea().innerHTML = '';
		SQGetImageArea().innerHTML = '';
		currQuestStageIndex = -1;
		quizStage = quizStageQuestions;
		return;
	}
	;

	currentquestion = questStageData[currQuestStageIndex].question;
	currentanswer = questStageData[currQuestStageIndex].answer;
	if (quizStage == quizStageQuestions) {
		SQQuestion(questStageData[currQuestStageIndex].type);
	} else {
		SQAnswer(questStageData[currQuestStageIndex].type);

	}
	;
};

function runPreviousQuestStage() {
	currQuestStageIndex = currQuestStageIndex - 2;
	runNextQuestStage();
};

function setButtons() {
	btnhtml = nextButton;
	if (currQuestStageIndex == questStageData.length - 1
			&& quizStage == quizStageQuestions) {
		btnhtml = answerButton;
	}
	buttonBar = previousButton + btnhtml;
	SQGetButtonsArea().innerHTML = buttonBar;
}

function SQQuestion(questionType) {
	setButtons();
	SQGetAnswerArea().innerHTML = '';
	

	if (questionType == quizQuestionTypeText ||questionType == quizQuestionTypePictureAnswer) {
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">"
				+ questStageData[currQuestStageIndex].question + "</p>";
		var imageArea = document.getElementById("SQImage");
		imageArea.innerHTML = '';
	} else if (questionType == quizQuestionTypePicture || questionType == quizQuestionType2Picture || questionType == quizQuestionType2PictureAnswer ) {
		SQGetButtonsArea().innerHTML = buttonBar;
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">"
				+ questStageData[currQuestStageIndex].question + "</p>";
		if (questStageData[currQuestStageIndex].hasOwnProperty('image')) {
			sqInitPicture(questStageData[currQuestStageIndex].image)
		} else {
			var imageArea = document.getElementById("SQImage");
			imageArea.innerHTML = '';
		}
	} else if (questionType == quizQuestionType2PictureQuestion) {
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">"
		+ questStageData[currQuestStageIndex].question + "</p>";
		questionimage = questStageData[currQuestStageIndex].image;
		questionimage2 = questStageData[currQuestStageIndex].image2;
		sqInit2Picture(questionimage,questionimage2);
	} else if (questionType == quizQuestionType4PictureQuestion) {
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">"
		+ questStageData[currQuestStageIndex].question + "</p>";
		questionimage = questStageData[currQuestStageIndex].image;
		questionimage2 = questStageData[currQuestStageIndex].image2;
		questionimage3 = questStageData[currQuestStageIndex].image3;
		questionimage4 = questStageData[currQuestStageIndex].image4;
		sqInit4Picture(questionimage,questionimage2,questionimage3,questionimage4);
		
	} else if (questionType == quizQuestionTypeSpotify) {
		sqInitSpotify(questStageData[currQuestStageIndex].spotify,
				questStageData[currQuestStageIndex].question)
	}
	if (questStageData[currQuestStageIndex].hasOwnProperty('questionSpeak')) {
		speakText=questStageData[currQuestStageIndex].questionSpeak;
		setTimeout(SQSpeakAnswer, 3000);	
	}
	currQuestStageIndex++
}

function sqInitPicture(imageSource) {
	var imageArea = document.getElementById("SQImage");
	imageArea.innerHTML = '<div style="width:100%;height:480px;background-color:black;text-align:center;"> '
			+ ' <a href="'
			+ imageSource
			+ '" target="_blank">'
			+ ' <img style="height:100%;border:0;" src="'
			+ imageSource
			+ '" /> ' + ' </a> ' + ' </div>';
}
function sqInit4Picture(imageSource1,imageSource2,imageSource3,imageSource4) {
	var imageArea = document.getElementById("SQImage");
	imageArea.innerHTML = '<div style="width:100%;height:480px;background-color:black;text-align:center;"> '
		 + "<table style='font-family:verdana;color:Black;font-size:30px;topMargin=10px;bottomMargin=10px' width='95%' border='1'><tr><td>"
	
		+ ' <a href="' + imageSource1 + '" target="_blank"> <img style="width:50%;border:0;" src="' + imageSource1 + '" /> ' + ' </a> ' + '</td><td>'
		+ ' <a href="' + imageSource2 + '" target="_blank"> <img style="width:50%;border:0;" src="' + imageSource2 + '" /> ' + ' </a> ' + '</td></tr><tr><td>'
		+ ' <a href="' + imageSource3 + '" target="_blank"> <img style="width:50%;border:0;" src="' + imageSource3 + '" /> ' + ' </a> ' + '</td><td>'
		+ ' <a href="' + imageSource4 + '" target="_blank"> <img style="width:50%;border:0;" src="' + imageSource4 + '" /> ' + ' </a> ' + '</td></tr>'
			
			+ " </td></tr></table>"
			+ ' </div>'			;
}
function sqInit2Picture(imageSource1, imageSource2) {
	var imageArea = document.getElementById("SQImage");
	imageArea.innerHTML = '<div style="width:100%;height:480px;background-color:black;text-align:center;"> '
			+ ' <a href="'
			+ imageSource1
			+ '" target="_blank">'
			+ ' <img style="height:100%;border:0;" src="'
			+ imageSource1
			+ '" /> ' + ' </a> ' 
			+ ' <a href="'
			+ imageSource2
			+ '" target="_blank">'
			+ ' <img style="height:100%;border:0;" src="'
			+ imageSource2
			+ '" /> ' + ' </a> ' 
			+ ' </div>';

}

function sqInitSpotify(spotifyEmbed, spotifyQuestion) {

	SQGetImageArea().innerHTML = spotifyEmbed;
	SQGetQuestArea().innerHTML = "<p " + questionStyle + ">" + spotifyQuestion + "</p>";
}

function SQAnswer(questionType) {
	counter = 0;
	setButtons();
	fullAnswer = questStageData[currQuestStageIndex].answer;
	fullQuestion = questStageData[currQuestStageIndex].question;
	if (questionType == quizQuestionTypeText) {
		SQGetImageArea().innerHTML = '';
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">" + fullQuestion
				+ "</p>";
	} else if (questionType == quizQuestionTypePicture || questionType == quizQuestionType2Picture || questionType == quizQuestionType2PictureAnswer) {
		sqInitPicture(questStageData[currQuestStageIndex].image)
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">" + fullQuestion
				+ "</p>";
	} else if (questionType == quizQuestionType2PictureQuestion) {
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">"
		+ questStageData[currQuestStageIndex].question + "</p>";
		questionimage = questStageData[currQuestStageIndex].image;
		questionimage2 = questStageData[currQuestStageIndex].image2;
		sqInit2Picture(questionimage,questionimage2);
	} else if (questionType == quizQuestionType4PictureQuestion) {
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">"
		+ questStageData[currQuestStageIndex].question + "</p>";
		questionimage = questStageData[currQuestStageIndex].image;
		questionimage2 = questStageData[currQuestStageIndex].image2;
		questionimage3 = questStageData[currQuestStageIndex].image3;
		questionimage4 = questStageData[currQuestStageIndex].image4;
		sqInit4Picture(questionimage,questionimage2,questionimage3,questionimage4);
	} else if (questionType == quizQuestionTypeSpotify) {
		sqInitSpotify(questStageData[currQuestStageIndex].spotify,
				questStageData[currQuestStageIndex].question)
	} else if (questionType == quizQuestionTypePictureAnswer) {
		var imageArea = document.getElementById("SQImage");
		imageArea.innerHTML = '';
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">" + fullQuestion
		+ "</p>";
	}
	if (questStageData[currQuestStageIndex].hasOwnProperty('questionSpeak')) {
		speakText=questStageData[currQuestStageIndex].questionSpeak;
		setTimeout(SQSpeakAnswer, 10);	
	}
	// SQGetQuestArea().innerHTML = answerPreText;
	answerText = '';
	SQGetAnswerArea().innerHTML = '';
	if (questionType == quizQuestionType2Picture || questionType == quizQuestionTypePictureAnswer)  {
		answerimage = questStageData[currQuestStageIndex].answerimage;
		setTimeout(function(){sqInitPicture(answerimage);},3000 )
	} else if (questionType == quizQuestionType2PictureAnswer) {
		answerimage = questStageData[currQuestStageIndex].answerimage;
		answerimage2 = questStageData[currQuestStageIndex].answerimage2;
		setTimeout(function(){sqInit2Picture(answerimage,answerimage2);},3000 )
	}
	if (questStageData[currQuestStageIndex].hasOwnProperty('answer') || questStageData[currQuestStageIndex].hasOwnProperty('answerSpeak')) {
		if (questStageData[currQuestStageIndex].hasOwnProperty('answerSpeak')) {
			if (!questStageData[currQuestStageIndex].answerSpeak == '') {
				speakText=questStageData[currQuestStageIndex].answerSpeak;
				setTimeout(SQSpeakAnswer, 3000);
			}
		} else {
			speakText=fullAnswer;
			setTimeout(SQSpeakAnswer, 3000);
		}
		setTimeout(SQWriteAnswer, 3000);
	}
	currQuestStageIndex++
}

function SQSpeakAnswer(){
	if (!'speechSynthesis' in window) {
		return;
	}
	window.speechSynthesis.cancel();
	voices = speechSynthesis.getVoices();
	if (!speakText.includes("iframe")|| fullAnswer.includes("target='_blank'")) {
		var msg = new SpeechSynthesisUtterance();
		msg.voice = voices[Math.floor(Math.random() * voices.length)];
		msg.text = speakText;
		window.speechSynthesis.speak(msg);
	}
}
//if (questStageData[currQuestStageIndex].hasOwnProperty('answerList')) {
function SQWriteAnswer() {
	if (!fullAnswer) {
		return;
	}
	if (fullAnswer.includes("iframe")|| fullAnswer.includes("target='_blank'") || questStageData[currQuestStageIndex-1].hasOwnProperty('answerList')) {
		pointsText='';
		if (questStageData[currQuestStageIndex-1].hasOwnProperty('answerList')) {
			pointsText=startPointsButton;
		}
		SQGetAnswerArea().innerHTML = // answerPreText +
			"<p " + answerStyle + ">" + fullAnswer + "</p> " + pointsText;
	}
	else if (counter < fullAnswer.length) {
		answerText = answerText += fullAnswer.charAt(counter);

		SQGetAnswerArea().innerHTML = // answerPreText +
		"<p " + answerStyle + ">" + answerText + "</p>";
		counter++;
		setTimeout(SQWriteAnswer, 80);
	}
}

function SQWriteAnswerPoint() {
	//optionTags = optionTagsString.split(",");
	pointsList=questStageData[currQuestStageIndex-1].answerList.split("|");
	console.log(pointsList);
	discussionPointIndex++;
	if (discussionPointIndex < pointsList.length) {
		SQGetAnswerArea().innerHTML = SQGetAnswerArea().innerHTML + '</BR>' + pointsList[discussionPointIndex] ;
	}
}

function SQreloadPage(tag){
	newURL = window.location.pathname + '?quizType=' + tag;
	if (showTags) {
		newURL = newURL + '&' + showTagsURI
	}
	window.location.assign(newURL);
}
function SQInitTagButtons() {
	if (! showTags) {
		return '';
	}
	tagsCount = tags.length;
	buttons = '';
	
	for (var i = 0; i < tagsCount; i++) {
			buttons = buttons
					+ "<input type='button' class='userBtnStop' value='"
					+ tags[i] + "' title='Reload page and only show quizzes with this tag' id='reload' onclick='SQreloadPage(\"" + tags[i]
					+ "\")' />"
		
	};
	//console.log("uniqueArray: ", tags);
	
	buttons = buttons
	+ "<input type='button' class='userBtnStop' value='Today' title='Reload page and only show quizzes with this tag' id='reload' onclick='SQreloadPage(\"" + todayString
	+ "\")' />";
	
	return buttons;
}

function SQInitQuestButtons(options) {
	optionsCount = options.length;
	buttons = '';
	for (var i = 0; i < optionsCount; i++) {
		quizNumber = i + 1;
		if (SQIncludeQuiz(options[i].tags)) {
			buttons = buttons
					+ "<input type='button' class='userBtnGo' value='"
					+ options[i].name + "' title='(" + quizNumber + ") "+ options[i].hoverover
					+ "' id='startQuizBtn' onclick='SQStartQuizFromButton(" + i
					+ ")' />"
		}
	}
	;
	tags = Array.from(new Set(tempTags));
	tags.sort();
	tags.unshift('ShowAll');
	//console.log("uniqueArray: ", tags);
	return buttons;
}

function SQIncludeQuiz(optionTagsString) {
	optionTags = optionTagsString.split(",");
	optionTagsCount = optionTags.length;
	URITagsCount = tagsFromURI().length;
	URITags  =tagsFromURI();
	for (var i = 0; i < optionTagsCount; i++) { //Store all tags
		if (!optionTags[i].includes('/') && !optionTags[i].includes('-') && !optionTags[i].includes('AXAXL') && !optionTags[i].includes('NoPassword')) {
			tempTags.push(optionTags[i]);
		}
	}
	for (var i = 0; i < optionTagsCount; i++) {
		if (optionTags[i] == todayString ) {
			return true;
		}
		for (var j = 0; j < URITagsCount; j++) {
			if (URITags[j] == showAll) {
				return true;
			}
			if (optionTags[i] == URITags[j]) {
				return true;
			}
		}
	}
	return false;
}

function SQIsQuizMusic(quizIndex) { 
	
	optionTagsString = quests[quizIndex].tags;
	
	optionTags = optionTagsString.split(",");
	optionTagsCount = optionTags.length;
	
	for (var i = 0; i < optionTagsCount; i++) {
		if (optionTags[i] == 'music' ) {
			return true;
		}
	}
	return false;
}
function SQIsNoPassword(quizIndex) { 
	
	optionTagsString = quests[quizIndex].tags;
	
	optionTags = optionTagsString.split(",");
	optionTagsCount = optionTags.length;
	
	for (var i = 0; i < optionTagsCount; i++) {
		console.log(optionTags[i]);
		if (optionTags[i] == 'NoPassword' ) {
			return true;
		}
	}
	return false;
}
function SQIs7DegreesOfHBC(quizIndex) { 
	
	optionTagsString = quests[quizIndex].tags;
	
	optionTags = optionTagsString.split(",");
	optionTagsCount = optionTags.length;
	
	for (var i = 0; i < optionTagsCount; i++) {
		console.log(optionTags[i]);
		if (optionTags[i] == '7DegreesOfHBC' ) {
			return true;
		}
	}
	return false;
}
function SQIsQuizTodays(quizIndex) { 
	
	optionTagsString = quests[quizIndex].tags;
	
	optionTags = optionTagsString.split(",");
	optionTagsCount = optionTags.length;
	URITags  =tagsFromURI();
	URITagsCount = URITags.length;
	
	for (var j = 0; j < URITagsCount; j++) {
		if (URITags[j] == todayString) {
			return false;
		}
	}
	//console.log("Today String = " + todayString);
	for (var i = 0; i < optionTagsCount; i++) {
		//console.log("optons String = " + optionTags[i]);
		if (optionTags[i] == todayString ) {
			return true;
		}
		if (optionTags[i].includes('-')) {
			optionDate = new Date(optionTags[i]);
			todayDate = new Date(todayString);
			//console.log(optionDate + "   " + todayDate);
			if (todayDate.getTime() < optionDate.getTime()) {
				return true;
			}
		}

	}
	return false;
}

function SQQuestPicked() {
	currQuest = SQGetQuestInfo();
}
function SQGetCurrentQuestIndex() {
	optionsCount = quests.length;
	for (var i = 0; i < optionsCount; i++) {
		if (currQuest == quests[i]) {
			questIndex = i;
		}
		;
	}
	;
	return questIndex;
};
function SQGetButtonsArea() {
	return document.getElementById("SQButtons");
};
function SQGetAnswerArea() {
	return document.getElementById("SQAnswer");
};
function SQGetImageArea() {
	return document.getElementById("SQImage");
};
function SQGetQuestArea() {
	return document.getElementById("SQquestData");
};
function SQGetQuestInfo() {
	return document.getElementById("questNames").value;
};
//
//window.onload= function () {
//	SQInit();
//};

//
//document.onreadystatechange = function () {
//	  if (document.readyState == "complete") {
//		  SQInit();
//	  }
//};

