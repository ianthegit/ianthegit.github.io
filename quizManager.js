

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

currQuestIndex = 0;
currQuestStageIndex = -1;
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

questionStyle = 'style="font-family:verdana;color:Black;font-size:30px;topMargin=10px;bottomMargin=10px"';
answerStyle = 'style="font-family:Courier New;color:Black;font-size:30px;topMargin=0px;bottomMargin=0px;"';
previousButton = "<input type='button' class='userBtnStop' value='Previous' title='Previous' id='Previous' onclick='runPreviousQuestStage()' />";
nextButton = "<input type='button' class='userBtnNext' value='Next' title='Next' id='Next' onclick='runNextQuestStage()' />";
closeSplashButtonStart = "<input type='button' class='userBtnNext' value='Start Quiz' title='Start Quiz' id='Start Quiz' onclick='SQStartQuiz(";
closeSplashButtonEnd=")' />";
answerButton = "<input type='button' class='userBtnNext' value='Answers' title='Answers' id='Next' onclick='runNextQuestStage()' />";
tagsButton = "<input type='button' class='userBtnStop' value='Categories' title='Categories' id='Categories' onclick='showCategories()' />";
Table4ColumnStart="<table style='font-family:verdana;color:Black;font-size:30px;topMargin=10px;bottomMargin=10px' width='95%' border='1'><tr><th>1</th><th>2</th><th>3</th><th>4</th></tr><tr><td>";
Table4ColumnEnd=" </td></tr></table>";
beginAudio= '<audio controls><source src="'  ;
endAudio = '?raw=true" type="audio/mp3">   </audio>';
startYouTube=" <a href='";
endYouTube="' target='_blank'>The Answer...</a> ";

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
	.write("<div id='SQQuiz' class='SQQuizMain' ><span id='SQworkarea' class='grad'><table border='0' width=80%><table border='1'>"
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
		menuArea.innerHTML = 'Rounds<BR/><BR/>' + SQInitQuestButtons(quests)  + '<BR/><BR/>Restrict rounds list by interest<BR/><BR/>'+ SQInitTagButtons();
	} else {
		menuArea.innerHTML = 'Rounds<BR/><BR/>' + SQInitQuestButtons(quests)  ;
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
		if (!passwordEntered) {
			if (!passwordPasses()) {
				return;
			}
			passwordEntered=true;
			
		}
	}
	naturalizedQuizIndex = quizIndex + 1;
	document.getElementById("SQmenu").innerHTML = '(' + naturalizedQuizIndex + ') ' + quests[quizIndex].name + " - " + quests[quizIndex].hoverover;
	
	if (quests[quizIndex].hasOwnProperty('splash')) {
		if (splashTypeText == quests[quizIndex].splash.splashType ) {
			SQGetQuestArea().innerHTML = "<p " + questionStyle + ">"+ quests[quizIndex].splash.splashText + "   " + closeSplashButtonStart + quizIndex + closeSplashButtonEnd +  "</p>";
		} 
		if (splashTypePictureAndText == quests[quizIndex].splash.splashType ) {
			SQGetQuestArea().innerHTML = "<p " + questionStyle + ">"+ quests[quizIndex].splash.splashText + "   " + closeSplashButtonStart + quizIndex + closeSplashButtonEnd +  "</p>";
			console.log("<p " + questionStyle + ">"	+ quests[quizIndex].splash.splashText + "   " + closeSplashButtonStart + quizIndex + closeSplashButtonEnd +  "</p>");
			sqInitPicture(quests[quizIndex].splash.splashImage);
		}
		return;
	}; 
	if (SQIsQuizMusic(quizIndex)){
		SQGetQuestArea().innerHTML = "<p " + questionStyle + "> This quiz is a Music quiz.  Please ensure you are only sharing sound, not screen.  " + closeSplashButtonStart + quizIndex + closeSplashButtonEnd +  "</p>";
		return;
	};
	
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
function runNextQuestStage() {
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
	} else if (questionType == quizQuestionTypePicture || questionType == quizQuestionType2Picture || questionType == quizQuestionType2PictureAnswer) {
		SQGetButtonsArea().innerHTML = buttonBar;
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">"
				+ questStageData[currQuestStageIndex].question + "</p>";
		sqInitPicture(questStageData[currQuestStageIndex].image)
	} else if (questionType == quizQuestionTypeSpotify) {
		sqInitSpotify(questStageData[currQuestStageIndex].spotify,
				questStageData[currQuestStageIndex].question)
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
	} else if (questionType == quizQuestionTypeSpotify) {
		sqInitSpotify(questStageData[currQuestStageIndex].spotify,
				questStageData[currQuestStageIndex].question)
	} else if (questionType == quizQuestionTypePictureAnswer) {
		var imageArea = document.getElementById("SQImage");
		imageArea.innerHTML = '';
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">" + fullQuestion
		+ "</p>";
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
			speakText=questStageData[currQuestStageIndex].answerSpeak;
			setTimeout(SQSpeakAnswer, 3000);
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
	if (!speakText.includes("iframe")|| fullAnswer.includes("target='_blank'")) {
		var msg = new SpeechSynthesisUtterance();
		msg.text = speakText;
		window.speechSynthesis.speak(msg);
	}
}

function SQWriteAnswer() {
	if (!fullAnswer) {
		return;
	}
	if (fullAnswer.includes("iframe")|| fullAnswer.includes("target='_blank'")) {
		SQGetAnswerArea().innerHTML = // answerPreText +
			"<p " + answerStyle + ">" + fullAnswer + "</p>";
	}
	else if (counter < fullAnswer.length) {
		answerText = answerText += fullAnswer.charAt(counter);

		SQGetAnswerArea().innerHTML = // answerPreText +
		"<p " + answerStyle + ">" + answerText + "</p>";
		counter++;
		setTimeout(SQWriteAnswer, 80);
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
		if (!optionTags[i].includes('/') && !optionTags[i].includes('-')) {
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

