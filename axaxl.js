

quests[++questIndexBuilder] = { 
		name : "Scenario 1",
		hoverover : "Scenario 1",
		splash : {splashType : splashTypeText , splashText : "The team are fully occupied across production support, small change, discretionary and regulatory project work, but we are receiving multiple escalations from a business stakeholder as their small change is not being picked up according to their preferred timeframe. Describe your approach to engaging with the challenging stakeholder and how you might plan to address the issue." },
		tags : "AXAXL",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText, 	
	question : 'Multiple escalations from a business stakeholder',
	answer : "This raises questions about the efficacy of the team(s) dealing with escalations"	, answerSpeak : "",
	answerList: "Is their communication effective and accurate|How are ongoing escalations (which can't be quickly completed) dealt with|Are there agreed communication standards i.e. regular updates"});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText, 	
	question : 'according to their preferred timeframe',
	answer : "I would want to look into what the agreed delivery timeline is"	, answerSpeak : "",
	answerList: "How are change timescales agreed with the business?|What are the specifics around this case - i.e. unexpected complexity|How different to the agreed timescale is the change's progress currently?"});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText, 	
	question : 'Describe your approach to engaging with the challenging stakeholder and how you might plan to address the issue </BR></BR>Short Term',
	answer : "Ideally I'd want to have as many answers to my previous points as possible"  	, answerSpeak : "",
	answerList: "Once the details are known we could look to discuss the current situation.|I would expect to protect the team from having to be reactionary to the loudest shouters|I would like to engage with the team to see if there are any quick wins."});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText, 	
	question : 'Describe your approach to engaging with the challenging stakeholder and how you might plan to address the issue </BR></BR>Long Term',
	answer : "Obviously disgruntled business users are an unwanted outcome, and will take up time which could be used more productively."	, answerSpeak : "",
	answerList: "Introduce an Agile model of working to provide better feedback to the business - not only for expectations, but also on issues and blockers|Ensure change timeframes are fully understood by all stakeholders|Ensure the effects of changes to priorities are well understood and communicated"	});

