

questIndexBuilder = -1;
quests = new Array();

quests[++questIndexBuilder] = { 
		name : "Planets ", //+getAndIncrementCounterForType("Alphabet"),
		hoverover : "Name all non-dwarf planets in our Solar System",
		timeToCompleteFirstAnswer : 30,
		tags : "2023-4-2,Planets", 
		questInfo: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'] };

function createCounter() {
var countDownDate = new Date("April 3, 2023 17:48:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = minutes + ":" + seconds ;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
}

function createScreen() { teamsData =[] ; answer = getURIString('answer'); mustBeUnder = getURIString('mustBeUnder'); snippit= ' to ';
 setupTeams(getURIString('teamNames').split(','));
 if (mustBeUnder) {snippit = ' under or equal' + snippit;} 
 document.write("<div id='grader'  ><table border='0' ><tr><td><span id='ControlFunctions' >Closest" + snippit + answer + " wins.</td></tr><tr><td><input type='button' class='userBtnGo' value='Calculate' title='Calculate' id='Go' onclick='runCalculate()' /> </span></td></tr><tr><td><span id='data' >" + writeTeamsHTML(false) +"</span></td></tr></table></div>");}
function runCalculate() { teamsData.sort(function(a,b){return a.sorter-b.sorter;});
 document.getElementById("data").innerHTML = writeTeamsHTML(true);}
function setupTeams(teams) { teamsData.length = teams.length;
 for (var i = 0 ; i < teams.length ; i++) { teamsData[i] = {teamName: teams[i], answer: 0, distanceFrom:0, sorter:0}}}
function writeTeamsHTML(calculated) { teamHTML = "";	counter=0; previous = 100000000000000;
 for (var i = 0 ; i < teamsData.length ; i++) {
  if (calculated) {
   if (teamsData[i].sorter != null) {
    if (teamsData[i].sorter != previous) {(counter++) ; previous=teamsData[i].sorter;};
    teamHTML= teamHTML + "<tr><td>" +  counter + "     </td><td> " + teamsData[i].teamName + "</td><td>    their answer was " + teamsData[i].sorter + " away</td></tr>";}
  } else { teamHTML= teamHTML + "<tr><td>" + teamsData[i].teamName + "</td><td><input type='number' id='" + teamsData[i].teamName + "' onchange='dataChangedOnRow(" + i + ", this.value)'> </td></tr>";}}
 return  "<table border = '0'> " + teamHTML + "</table>";}
function dataChangedOnRow(rowNo, value) { teamsData[rowNo].answer=value; teamsData[rowNo].distanceFrom = answer - value; teamsData[rowNo].sorter = teamsData[rowNo].distanceFrom;
 if (teamsData[rowNo].distanceFrom < 0) {
  teamsData[rowNo].sorter = teamsData[rowNo].distanceFrom *-1;
  if (mustBeUnder) {teamsData[rowNo].sorter = null;}}}
function getURIString(paramName) { const urlParams = new URLSearchParams(window.location.search);
 if (urlParams.has(paramName)) {return urlParams.get(paramName);}; return null;}
function getTeamNames(teamNamesString){	return decodeURI(teamNamesString);}