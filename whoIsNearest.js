
teamsData =[]
goButton = "<input type='button' class='userBtnGo' value='Calculate' title='Calculate' id='Go' onclick='runCalculate()' />";

function createScreen() {
	answer = getURIString('answer');
	var teamNameString = getURIString('teamNames');
	mustBeUnder = getURIString('mustBeUnder');
	if (mustBeUnder) {
		document.write("<div id='grader'  ><table border='0' ><tr><td><span id='ControlFunctions' >Closest under " + answer + " wins.  " + goButton + " </span></td></tr><tr><td><span id='data' >Data here</span></td></tr></table></div>");
		
	} else {
		document.write("<div id='grader'  ><table border='0' ><tr><td><span id='ControlFunctions' >Closest to " + answer + " wins.  " + goButton + " </span></td></tr><tr><td><span id='data' >Data here</span></td></tr></table></div>");
	}
	var teams=teamNameString.split(',');
	setupTeams(teams);
	document.getElementById("data").innerHTML = writeTeamsHTML();
}

function runCalculate() {
	teamsData.sort(function(a,b){
		return a.sorter-b.sorter;
	});
	document.getElementById("data").innerHTML = writeTeamsDistanceHTML();
}

function setupTeams(teams) {
	var size = teams.length;
	for (var i = 0 ; i < size ; i++) {
		teamsData.length = teamsData.length+1;
		teamsData[teamsData.length-1] = {teamName: teams[i], answer: 0, distanceFrom:0, sorter:0}
	}
}

function writeTeamsDistanceHTML() {
	var size = teamsData.length;
	teamHTML = "<table border = '1'> ";
	counter=0;
	for (var i = 0 ; i < size ; i++) {
		if (teamsData[i].sorter != null) {
			counter++;
			teamHTML= teamHTML + "<tr><td>" +  counter + "</td><td> " + teamsData[i].teamName + "</td><td> " + teamsData[i].distanceFrom + "</td></tr>"
		}
	}
	teamHTML= teamHTML + "</table>";
	return teamHTML;
}


function writeTeamsHTML() {
	var size = teamsData.length;
	teamHTML = "<table border = '0'> ";
	for (var i = 0 ; i < size ; i++) {
		teamHTML= teamHTML + "<tr><td>" + teamsData[i].teamName + "</td><td><input type='number' id='" + teamsData[i].teamName + "' onchange='dataChangedOnRow(" + i + ", this.value)'> </td></tr>"
	}
	teamHTML= teamHTML + "</table>";
	return teamHTML;
}

function dataChangedOnRow(rowNo, value) {
	teamsData[rowNo].answer=value;
	teamsData[rowNo].distanceFrom = answer - value;
	teamsData[rowNo].sorter = teamsData[rowNo].distanceFrom;
	if (teamsData[rowNo].distanceFrom < 0) {
		teamsData[rowNo].sorter = teamsData[rowNo].distanceFrom *-1;
		if (mustBeUnder) {
			teamsData[rowNo].sorter = null;
		}
	}
}
function getURIString(paramName) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	if (urlParams.has(paramName)) {
		return urlParams.get(paramName)
	};
	return '';
}

function getTeamNames(teamNamesString){

	return decodeURI(teamNamesString);
}
