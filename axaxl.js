

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




quests[++questIndexBuilder] = { 
		name : "Scenario 2",
		hoverover : "Scenario 2",
		splash : {splashType : splashTypeText , splashText : "The level 2 support team are overwhelmed with incident resolution and service request resolution, the level 3 team is under-resourced and lack the skills and experience to do much defect fixing and the development team are busy on small change, discretionary and regulatory project work. There is a growing backlog of tickets across L2 and L3 and the L3 team are lacking motivation as they are not getting exposure to any defect fixing / development work. Describe any steps you would take to streamline the process, re-organise the team, motivate them and increase throughput." },
		tags : "AXAXL,axaxl",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText, 	
	question : 'level 2 support team are overwhelmed',
	answer : "Describe any steps you would take to streamline the process, re-organise the team, motivate them and increase throughput</BR></BR>Short Term"	, answerSpeak : "",
	answerList: "Ask for a list of most performed activities to see how these could be changed to be handled quicker.|Form a hit-team (or teams) skilled in a subset of issue resolution.|Ask the team what is holding them back"});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText, 	
	question : 'level 3 team is under-resourced and lack the skills and experience </BR></BR>L3 team are lacking motivation as they are not getting exposure to any defect fixing / development work',
	answer : "Describe any steps you would take to streamline the process, re-organise the team, motivate them and increase throughput</BR></BR>Short Term"	, answerSpeak : "",
	answerList: "Look to form Tech Leads from AD and Lvl3 top performers to manage small focused teams|Ensure KT is coming from AD to Lvl 3|Give teams their own areas and allow them to become SME teams|Remove barriers between AD and Lvl3 and create end-to-end teams"});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText, 	
	question : 'Describe any steps you would take to streamline the process, re-organise the team, motivate them and increase throughput</BR></BR>Long Term',
	answer : "A team in this situation is not going to be fixed by short-term measures."	, answerSpeak : "",
	answerList: "Look at why there are so many Lvl 2 and 3 items|What can be done to make AD more responsible for issue resolution|Throttle demand where possible to allow the teams to coalesce|Remove Lvl3 alogether|Introduce Agile - daily ceremonies can highlight progress made and provide positive feedback where traditional methodologies lack this"});



