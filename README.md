# ianthegit.github.io
 
# quizManager.js

quizManager.js is a javascript library to allow the creation of simple online quizzes for use over Zoom etc.

## Installation

Within an html page, in the \<body>, use:

```html
<script type="text/javascript" src='https://www.hopgood.uk/quizManager.js' ></script>
// Sample questions 
<script type="text/javascript" src='https://www.hopgood.uk/tieBreakers.js' ></script>
<script type="text/javascript" src='https://www.hopgood.uk/quizManagerYearBasedQuestions.js' ></script>
<script type="text/javascript" src='https://www.hopgood.uk/quizManagerQuestions.js' ></script>
<script type="text/javascript" src='https://www.hopgood.uk/quizManagerQuestions01.js' ></script>
<script type="text/javascript" src='https://www.hopgood.uk/quizManagerQuestions02.js' ></script>
<script type="text/javascript" src='https://www.hopgood.uk/quizManagerPictionary.js' ></script>


<script type='text/javascript'>
// <![CDATA [
    	SQInit();
// ] ] >
	
</script>
```

# Usage

URL Parameters are used to control the view.

https://www.hopgood.uk/  Will show an empty screen, unless you have questions with todays date (yyyy-mm-dd) in which case they will be shown, and will require the password 'letmein' to access them

Parameters can be chained with '&'

	quizType=<TAG> (or 'ShowAll' to view them all)
	
	showTags=1 to show all tags as clickable buttons
	
	
https://www.hopgood.uk/?quizType=ShowAll&showTags=1

To add your own Rounds and Questions, use the examples below to add them here:

```html

<script type='text/javascript'>
// <![CDATA [
	//Add Rounds and Questions here
    	SQInit();
// ] ] >
	
</script>
```

## Create a round

```javascript
quests[++questIndexBuilder] = { //
		name : "Round Name"
		,hoverover : "Hoverover text"
		,tags : "comma separated tag list"
		,questInfo: new Array()
	};
```
Optional - splash screen Text only
```javascript
,splash : {splashType : splashTypeText  , splashText : "Splash Screen Text" }
```
Optional - splash screen Text and picture
```javascript
,splash : {splashType : splashTypePictureAndText, splashText : "Splash Screen Text" , splashImage : "Image URL"}
```
To add a counter to the name of the round (where <round identifier> is any string used to group rounds together
```javascript
quests[++questIndexBuilder] = { //
		name : "Round Name " +getAndIncrementCounterForType("<round identifier>")
		,hoverover : "Hoverover text"
		,tags : "comma separated tag list"
		,questInfo: new Array()
	};
```

If the tags contain 'year' then add up to 12 questions and each will be prepended by the appropriate month (January - December) - otherwise each question will be numbered 1 to \<length>

If the tags contain 'music' then an auto-generated Splash screen will remind you to only share your audio

## Create a question

To get a 4-choice multiple choice question text, add the below to the question text string
```javascript
+ Table4ColumnStart + "Answer1</td><td>Answer2</td><td>Answer3</td><td>Answer4" + Table4ColumnEnd
```

To add a question which plays an audio clip:
```javascript
 addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText, 	
	question : 'What am I singing? ' + beginAudio + 'https://RESOURCE_NAME.mp3' + endAudio ,
	answer : "My Song"	});
```

Simple Text Question
```javascript
  addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "",
	answer : "", answerSpeak : ""} );
```
Question with a Text question, a picture question and a different picture & text answer
```javascript
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,	
	question : "",  
	image : "",
	answerimage : "", 
	answer : "", 
	answerSpeak : ""}) ;
```
Question with a Text question, a picture question and a 2 picture & text answer
```javascript
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2PictureAnswer,	
	question : "",  
	image : "",
	answerimage : "",
	answerimage2 : "", 
	answer : "", 
	answerSpeak : ""}) ;
```
Question with a Text question, a 4-picture question and a text answer
```javascript
addQuest(quests[questIndexBuilder],{	type : quizQuestionType4PictureQuestion, question : "", // 
	image : "",
	image2: "",
	image3 : "",
	image4: "",
	answer : ""  '}) ;
```
Question with a Text question, a 4-picture question (eachpicture captioned) and a text answer
```javascript
addQuest(quests[questIndexBuilder],{	type : quizQuestionType4PictureQuestion, question : "", // 
	image : "",
	image2: "",
	image3 : "",
	image4: "",
	caption: "",
	caption2: "",
	caption3: "",
	caption4: "",
	answer : ""  '}) ;
```
Question with a Text question, and a picture & text answer
```javascript	
addQuest(quests[questIndexBuilder],{		type : quizQuestionTypePictureAnswer,
	question : "",
	answerimage : "IMAGE_URL"
	} ); 	
```
Question with 2 pictures in the question, and a text answer

```javascript	
addQuest(quests[questIndexBuilder],{	type : quizQuestionType2PictureQuestion,
	question : "", 
	image : "<image URL>",
	image2: "<image URL>",
	answer : ''}) ;
```

Question with a Text question, and a text answer, but additional question text is read out by a random voice (voice types browser specific).  'ReRun' button appears if added to question text

```javascript	
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText, 	
	question : 'What is our guest singing, and who is known for singing it? ' + reRunButton  , 
	questionSpeak : "Don't go walkin' down Lover's Lane, with anyone else but me anyone else but me",
	answer : "The Andrews Sisters, Don't sit under the apple tree", 
	answerSpeak : ""	});
```	
	
Spotify list question
```javascript
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
	question : '',
	spotify : '<iframe src="https://open.spotify.com/embed/playlist/PLAYLIST_ID" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
	answer : ""
}) ;
```


