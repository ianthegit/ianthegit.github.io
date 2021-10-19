# ianthegit.github.io
 
# quizManager.js

quizManager.js is a javascript library to allow the creation of simple online quizzes for use over Zoom etc.

## Installation

Within an html page, in the <body>, use:

```html
<script type="text/javascript" src='https://www.hopgood.uk/quizManager.js' ></script>
<!-- Sample questions -->
<script type="text/javascript" src='https://www.hopgood.uk/quizManagerYearBasedQuestions.js' ></script>
<script type="text/javascript" src='https://www.hopgood.uk/quizManagerQuestions.js' ></script>
<script type="text/javascript" src='https://www.hopgood.uk/quizManagerQuestions01.js' ></script>
<script type="text/javascript" src='https://www.hopgood.uk/quizManagerPictionary.js' ></script>


<script type='text/javascript'>
// <![CDATA [
    	SQInit();
// ] ] >
	
</script>
```

# Usage

## Create a round

```javascript
quests[++questIndexBuilder] = { //
		name : "Round Name",
		hoverover : "Hoverover text",
		tags : "comma separated tag list",
		questInfo: new Array()
	};
```
Optional - splash screen Text only
```javascript
splash : {splashType : splashTypeText  , splashText : "Splash Screen Text" },
```
Optional - splash screen Text and picture
```javascript
splash : {splashType : splashTypePictureAndText, splashText : "Splash Screen Text" , splashImage : "Image URL"},
```

If the tags contain 'year' then add up to 12 questions and each will be prepended by the appropriate month (January - December) - otherwise each question will be numbered 1 ... <length>

If the tags contain 'music' then an auto-generated Splash screen will remind you to only share your audio

## Create a question

To get a 4-choice multiple choice question text, add the below to the question text string
```javascript
+ Table4ColumnStart + "Answer1</td><td>Answer2</td><td>Answer3</td><td>Answer4" + Table4ColumnEnd
```

To add a question which plays a audio clip:
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


Question with a Text question, and a picture & text answer
```javascript	
addQuest(quests[questIndexBuilder],{		type : quizQuestionTypePictureAnswer,
	question : "",
	answerimage : "IMAGE_URL"
	} ); 	
```
	
Spotify list question
```javascript
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
	question : '',
	spotify : '<iframe src="https://open.spotify.com/embed/playlist/PLAYLIST_ID" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
	answer : ""
}) ;
```


