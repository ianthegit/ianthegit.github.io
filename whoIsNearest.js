teamsData =[]
function createScreen() {
 answer = getURIString('answer');
 mustBeUnder = getURIString('mustBeUnder');
 snippit= ' to ';
 if (mustBeUnder) {snippit = 'under or equal' + snippit;} 
 document.write("<div id='grader'  ><table border='0' ><tr><td><span id='ControlFunctions' >Closest " + snippit + answer + " wins.</td></tr><tr><td><input type='button' class='userBtnGo' value='Calculate' title='Calculate' id='Go' onclick='runCalculate()' /> </span></td></tr><tr><td><span id='data' >Data here</span></td></tr></table></div>");
 setupTeams(getURIString('teamNames').split(','));
 document.getElementById("data").innerHTML = writeTeamsHTML(false);}
function runCalculate() {
 teamsData.sort(function(a,b){return a.sorter-b.sorter;});
 document.getElementById("data").innerHTML = writeTeamsHTML(true);}
function setupTeams(teams) {
 teamsData.length = teams.length;
 for (var i = 0 ; i < teams.length ; i++) { teamsData[i] = {teamName: teams[i], answer: 0, distanceFrom:0, sorter:0}}}
function writeTeamsHTML(calculated) {
 teamHTML = "";	counter=0; previous = 1000000;
 for (var i = 0 ; i < teamsData.length ; i++) {
  if (calculated) {
   if (teamsData[i].sorter != null) {
    if (teamsData[i].sorter != previous) {(counter++) ; previous=teamsData[i].sorter;};
    teamHTML= teamHTML + "<tr><td>" +  counter + "     </td><td> " + teamsData[i].teamName + "</td><td>    their answer was " + teamsData[i].sorter + " away</td></tr>";}
  } else { teamHTML= teamHTML + "<tr><td>" + teamsData[i].teamName + "</td><td><input type='number' id='" + teamsData[i].teamName + "' onchange='dataChangedOnRow(" + i + ", this.value)'> </td></tr>";}}
 return  "<table border = '0'> " + teamHTML + "</table>";}
function dataChangedOnRow(rowNo, value) {
 teamsData[rowNo].answer=value; teamsData[rowNo].distanceFrom = answer - value; teamsData[rowNo].sorter = teamsData[rowNo].distanceFrom;
 if (teamsData[rowNo].distanceFrom < 0) {
  teamsData[rowNo].sorter = teamsData[rowNo].distanceFrom *-1;
  if (mustBeUnder) {teamsData[rowNo].sorter = null;}}}
function getURIString(paramName) {
 const urlParams = new URLSearchParams(window.location.search);
 if (urlParams.has(paramName)) {return urlParams.get(paramName);};
 return '';}
function getTeamNames(teamNamesString){	return decodeURI(teamNamesString);}
