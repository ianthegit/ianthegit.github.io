    hundreds=new Array (0,1);
    tens=new Array (0,1,2,3,4,5,6,7,8,9);
    units=new Array (0,1,2,3,4,5,6,7,8,9);
    players=new Array ('Charlie','Sam','Dad','Mum', 'Grandpa','Nan');
    player1=new Array();
    player2=new Array();
    player3=new Array();
    player4=new Array();
    player5=new Array();
    
    noOfPlayers=5;
    currentPlayer=1;
    rtcAimFor=new Array(1,1,1,1);
    noOfPlayersArray=new Array(2,3,4,5);
    numbers=new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
    killerArray=new Array();
    gameTypes=new Array ('301', '501', 'Round the Clock','Killer');
    countDownFrom=301;
    //laps[laps.length-1]={lapID: lapIdInProgress, name: userName, time: parseFloat(timeTakenRounded).toFixed(1)};

    function DartsScoreInit(){
    	tmpPlayers = JSON.parse(localStorage.getItem('DartsPlayers'));
    	if (tmpPlayers != null && tmpPlayers != ''){
    		players=tmpPlayers;
    	}
           document.write("<span id='debug'></span>");
		document.write('<form id="DartsScoreForm">');
		document.write('Choose game type:' + woodbridgeSurfersTimerSetupSelectorWithFunction('gameDropper', gameTypes, 'changeGameType', gameTypes) );
		document.write('<input id="newName" type="button" value="Choose new Player Names"  onclick="getNewPlayers()" />');
		document.write('<div id="DartScores"></div>');
        document.write('</form>');
		setupScoreTable(2);
//        document.getElementsByClassName("header-outer")[0].innerHTML='';
//        document.getElementsByClassName("post-title entry-title")[0].innerHTML='';
}
    function changeGameType(){
    	gameType = document.getElementById('gameDropper').value;
    	if (gameType == '301') {
    		countDownFrom = 301;
    		setupScoreTable(2);
    	}
       	if (gameType == '501') {
    		countDownFrom = 501;
    		setupScoreTable(2);
    	}
       	if (gameType == 'Killer') {
    		setupKillerTable();
    	}
       	if (gameType == 'Round the Clock') {
    		setupRTCTable();
    	}
    }
    function setupRTCTable(){
        noOfPlayers=10;
        rtcAimFor=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1);
    	retVal='<table border="1" id="runTable">';

		for (var i = 0 ; i < noOfPlayers ; i++) {
			playerName = 'Player ' + parseInt(i+1);
			if (i < players.length){
				playerName = players[i];
			}
			retVal = retVal + '<tr><td valign="top"><input id="player'+ i +'" type="button" value="' + playerName + ' - Aiming for 1"  onclick="rtcAddUp('+i+')" /></td></tr>';
		}
    	retVal = retVal +'</table> <br/> ';
    	document.getElementById("DartScores").innerHTML=retVal;
    }
    function rtcAddUp(playerId) {
    	newAimFor=rtcAimFor[playerId];
    	rtcAimFor[playerId]=newAimFor+1;
		playerName = 'Player ' + parseInt(playerId);
		if (playerId < players.length){
			playerName = players[parseInt(playerId)];
		}
    	if (newAimFor==20) {
    		window.alert(playerName + " has WON");
    	}

    	document.getElementById("player"+playerId).value = playerName + " - Aim for " + parseInt(newAimFor+1);
    }
    function setupKillerTable(){
        noOfPlayers=2;
        killerArray=new Array();
    	retVal='<table border="1" id="runTable">';

		size =1;
		for (var i = 0 ; i < numbers.length ; i++) {
			killerArray[i]=0;
			retVal = retVal + '<tr><td valign="top"><input id="number'+ parseInt(i+1) +'" type="button" value="Number ' + parseInt(i+1) + '"  onclick="killerAddUp('+ parseInt(i+1) +')" /></td></tr>';
		}
    	retVal = retVal +'</table> <br/> ';
    	document.getElementById("DartScores").innerHTML=retVal;
    }

    function killerAddUp(buttonNo) {
    	numberHit=parseInt(buttonNo-1);
    	killerArray[numberHit] = killerArray[numberHit]+1;
    	if (killerArray[numberHit] > 2){
    		window.alert("Number " + buttonNo + " is out!");
    		document.getElementById("number"+parseInt(buttonNo)).disabled=true;
    	}
    	return true;
    }
    function resetPlayers(){
    	setupScoreTable(document.getElementById('noOfPlayersDropper').value);
    }
    function setupScoreTable(playerNumber){
    	noOfPlayers = parseInt(playerNumber);
    	player1=new Array();
    	player2=new Array();
    	player3=new Array();
        player4=new Array();
        player5=new Array();
		retVal = 'Reset number of players to ' + woodbridgeSurfersTimerSetupSelectorWithFunction('noOfPlayersDropper', noOfPlayers ,'resetPlayers',noOfPlayersArray) ;

		retVal=retVal+'<table border="1" id="runTable">';

		retVal=retVal+'<tr><td><strong><input id="addScoreButton" type="button" value="Add Score to ' + players[currentPlayer-1] + '"  onclick="addScore()" /> </strong></td><td><strong>' + 
		woodbridgeSurfersTimerSetupSelector('hundredsDropper', hundreds, hundreds) +
		woodbridgeSurfersTimerSetupSelector('tensDropper', tens, tens) +
		woodbridgeSurfersTimerSetupSelector('unitsDropper', units, units) +
		"</strong></td></tr><tr>" ;	

		size =1;
		for (var i = 0 ; i < noOfPlayers ; i++) {
			retVal = retVal + '<td valign="top"><div id="scores'+i+'"><table id="scores'+i+'"><tr><td><div id="player'+i+'score">' + players[i]  + '</div></td></tr></table></div></td>';
		}
    	retVal = retVal +'</tr></table> <br/> ';
    	document.getElementById("DartScores").innerHTML=retVal;
    }

    function addScore() {
    	addScoreButton=document.getElementById("addScoreButton");
    	if (currentPlayer == 1) {
    		if (addScorePrivate(player1)) {
    			redrawPlayerArray(player1, 'scores0', players[currentPlayer-1], 'player0score');
    		}
    		if (noOfPlayers > 1) {
    			currentPlayer=2;
    			addScoreButton.value="Add Score to " + players[currentPlayer-1];
    		}
    	}
   		else if (currentPlayer == 2) {
       		if (addScorePrivate(player2)) {
       			redrawPlayerArray(player2, 'scores1', players[currentPlayer-1], 'player1score');
       		}
    		if (noOfPlayers > 2) {
    			currentPlayer=3;
    			addScoreButton.value="Add Score to " + players[currentPlayer-1];
    		} else {
    			currentPlayer=1;
    			addScoreButton.value="Add Score to " + players[currentPlayer-1];
    		}
       	}
   		else if (currentPlayer == 3) {
    		if (addScorePrivate(player3)){
    			redrawPlayerArray(player3, 'scores2', players[currentPlayer-1], 'player2score');
    		}
    		if (noOfPlayers > 3) {
    			currentPlayer=4;
    			addScoreButton.value="Add Score to " + players[currentPlayer-1];
    		} else {
    			currentPlayer=1;
    			addScoreButton.value="Add Score to " + players[currentPlayer-1];
    		}
   		}
       	else if (currentPlayer == 4) {
    		if (addScorePrivate(player4)){
    			redrawPlayerArray(player4, 'scores3', players[currentPlayer-1], 'player3score');
    		}
    		if (noOfPlayers > 4) {
    			currentPlayer=5;
    			addScoreButton.value="Add Score to " + players[currentPlayer-1];
    		} else {
    			currentPlayer=1;
    			addScoreButton.value="Add Score to " + players[currentPlayer-1];
    		}
   		}
        else {
    		if (addScorePrivate(player5)){
    			redrawPlayerArray(player5, 'scores4', players[currentPlayer-1], 'player4score');
    		}
    		if (noOfPlayers > 5) {
    			currentPlayer=6;
    			addScoreButton.value="Add Score to " + players[currentPlayer-1];
    		} else {
    			currentPlayer=1;
    			addScoreButton.value="Add Score to " + players[currentPlayer-1];
    		}
    	}
    	resetScoreDroppers();
    }
    function redrawPlayerArray(playerArray, scoreTableName, playerName, playerNameId){
    	scoreTable=document.getElementById(scoreTableName);

    	countdownScore=countDownFrom;
    	retVal="<table id="+ scoreTableName + "><tr><td><div id='" + playerNameId + "'>" + playerName + "</div></td></tr>";
    	for (var i = 0 ; i < playerArray.length ; i++) {
    		retVal = retVal + "<tr><td>" + playerArray[i] + "</td></tr>";
    		countdownScore = countdownScore - playerArray[i];
    	}
    	retVal = retVal + "</table>";
    	scoreTable.innerHTML = retVal;
    	playerNameTxt=document.getElementById(playerNameId);
    	playerNameTxt.innerHTML = playerName + " - " + countdownScore;
    	if (countdownScore == 0) {
    		window.alert("Winner - " + playerName);
    	}
    }
    function canScoreBeAdded(playerArray) {
    	tempScore = 0;
    	for (var i = 0 ; i < playerArray.length ; i++) {
    		tempScore = tempScore + playerArray[i];
    	};
    	if (tempScore + getScore() > countDownFrom) {
    		return false;
    	}
    	return true;
    }
    function isNewScore1AwayFromTotal(playerArray) {
    	tempScore = 0;
    	for (var i = 0 ; i < playerArray.length ; i++) {
    		tempScore = tempScore + playerArray[i];
    	};
    	if (tempScore + getScore() == countDownFrom-1) {
    		return true;
    	}
    	return false;
    }
    function addScorePrivate(playerArray){
    	if (isNewScore1AwayFromTotal(playerArray)){
    		return false;
    	}
    	if (!canScoreBeAdded(playerArray)){
    		return false;
    	}
    	playerArray.unshift(getScore());
    	return true;
    }

    	
    function getScore(){
    	localHundreds=document.getElementById("hundredsDropper").value;;
    	localTens=document.getElementById("tensDropper").value;;
    	localUnits=document.getElementById("unitsDropper").value;;
    	return parseInt(localHundreds+localTens+localUnits);
    }
    function resetScoreDroppers(){
    	document.getElementById("hundredsDropper").value=0;
    	document.getElementById("tensDropper").value=0;
    	document.getElementById("unitsDropper").value=0;
    }



    function woodbridgeSurfersTimerSetupSelector(idName, defaultSelected, options){
		var retVal = "";
		retVal = retVal + '<span id="' + idName + 'Span"><select name="' + idName + '" id="' + idName + '"  >';
		optionsCount =options.length;
		for (var i=0 ; i<optionsCount ; i++){
        		retVal = retVal + '<option value="' + options[i] + '"' ;
		    	if (options[i]==defaultSelected){
			    	retVal = retVal+' selected' ;
    			}
                retVal = retVal + '>' + options[i] + '</option>';
		}
		retVal = retVal + '</select></span>';
		return retVal;
	}
    function woodbridgeSurfersTimerSetupSelectorWithFunction(idName, defaultSelected, selectionChangeFunction, options){
    		var retVal = "";
    		retVal = retVal + '<span id="' + idName + 'Span"> <select name="' + idName + '" id="' + idName + '" onchange="' + selectionChangeFunction + '();" >';
    		optionsCount =options.length;
    		for (var i=0 ; i<optionsCount ; i++){
            		retVal = retVal + '<option value="' + options[i] + '"' ;
    		    	if (options[i]==defaultSelected){
    			    	retVal = retVal+' selected' ;
        			}
                    retVal = retVal + '>' + options[i] + '</option>';
    		}
    		retVal = retVal + '</select></span>';
    		return retVal;
   	}
    function debugOut(debugStr){
    	document.getElementById("debug").innerHTML = debugStr + '</br>';
    }	
function getNewPlayers(){
	newNames = window.prompt("Enter new names, seperated by commas:");
	if (newNames == ""){
		return;
	}
	newNameArray = newNames.split(",");
	localStorage.setItem('DartsPlayers', JSON.stringify(newNameArray));
	for (var i = 0 ; i < newNameArray.length ; i++){
		players[i] = newNameArray[i];
	}
    changeGameType();
}

