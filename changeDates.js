timezones = new Array(); // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones 
timezones.push({type : 'AEST',	localeName : "Australia, Sydney" , 		typeName : "Australia/Sydney"});
timezones.push({type : 'AEST',	localeName : "Australia, Melbourne" , 	typeName : "Australia/Melbourne"});
timezones.push({type : 'HK',	localeName : "Hong Kong" , 				typeName : "Asia/Hong_Kong"});
timezones.push({type : 'IST',	localeName : "India" , 					typeName : "Asia/Kolkata"});
timezones.push({type : 'CET',	localeName : "Central Europe" , 		typeName : "Europe/Paris" });
timezones.push({type : 'GMT',	localeName : "United Kingdom" , 		typeName : "Europe/London"});
timezones.push({type : 'EST',	localeName : "America Atlantic Coast",	typeName : "America/New_York" });
timezones.push({type : 'CST',	localeName : "America Central" , 		typeName : "America/Winnipeg" });
timezones.push({type : 'MST',	localeName : "America Mountains" , 		typeName : "America/Denver" });
timezones.push({type : 'PST',	localeName : "America Pacific Coast",	typeName : "America/Los_Angeles" });
hours=new Array (1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,8,9,10,12,15,20,24,36,48,'Custom');    
mList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
frenchMList = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
dList = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
frenchDList = ["dimanche", "lundi" , "mardi", "mercredi","jeudi","vendredi","samedi"];
function createScreen(){
	document.write("<div id='SQQuiz' class='grad' ><table border='0' ><tr>"+
 		"<td> Duration  <span id='durationOuter'>" +setupSelector('duration', 5, 'runCalculateFromDuration', hours)+
 		" </span>hours.</td></tr><tr><td>Start Date and Time (use your locale time) " +
 		" <input type='datetime-local' value=" + new Date().toLocaleString("en-US") + " title='changeStart' id='startTime' onfocusout='runCalculate(this.value)' /> </td> </tr>" + 
 		"<tr><td> </td></tr><tr><td>All dates and times reflect Daylight Savings as appropriate for the individual regions on the date(s) used</td></tr><tr><td> </td></tr>" +
 		"<tr><td><span id='data' >" + writeTeamsHTML("UK", "to") +"</span></td></tr>"+
 		"<tr><td><span id='data' >" + writeTeamsHTML("Fr", "à") +"</span></td></tr>"+
 		"</table></div>");}
function runCalculateFromDuration() {	
	if (document.getElementById('duration').value == 'Custom') {
		customDuration = prompt("Enter your custom Duration in hours", "21");
		if (customDuration != null && customDuration != "") {
  			hours.push(customDuration);
  			document.getElementById('durationSpan').innerHTML = setupSelector('duration', customDuration, 'runCalculateFromDuration', hours)}	}	
	runCalculate(document.getElementById('startTime').value)}
function runCalculate(pickedDate) {
	endDate = addHours(pickedDate, document.getElementById('duration').value);
	for (var i = 0 ; i < timezones.length ; i++) {
		document.getElementById(timezones[i].type+'UKStart').innerHTML = formatDate('UK', new Date((new Date(pickedDate) ).toLocaleString("en-US", {timeZone: timezones[i].typeName})));   ;	
		document.getElementById(timezones[i].type+'FrStart').innerHTML = formatDate('Fr', new Date((new Date(pickedDate) ).toLocaleString("en-US", {timeZone: timezones[i].typeName})));   ;	
		document.getElementById(timezones[i].type+'UKEnd').innerHTML = formatDate('UK', new Date((endDate ).toLocaleString("en-US", {timeZone: timezones[i].typeName}))) + '</BR>'; 
		document.getElementById(timezones[i].type+'FrEnd').innerHTML = formatDate('Fr', new Date((endDate ).toLocaleString("en-US", {timeZone: timezones[i].typeName}))) + '</BR>'; } }
function formatDate(country, date) {
	var strHours =  ( date.getHours() < 10) ? '0' + date.getHours() : date.getHours()  ;
	var strMinutes =  ( date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()  ;
	if (country === 'UK') {
		return   (dList[date.getDay()]) + " "  + date.getDate() + " " + (mList[date.getMonth()]) + " " + date.getFullYear() + "  " + strHours + ':' + strMinutes;;
	} else {
		return   (frenchDList[date.getDay()]) + " "  + date.getDate() + " " + (frenchMList[date.getMonth()]) + " " + date.getFullYear() + "  " + strHours + ':' + strMinutes;};}
function addHours(date, hours) {	return new Date(new Date(date).setTime(new Date(date).getTime() + (hours*60*60*1000)));}
function writeTeamsHTML(country, toRepresentation) { teamHTML = "";	
	for (var i = 0 ; i < timezones.length ; i++) {
		teamHTML= teamHTML + "<tr><td>" + timezones[i].localeName + "</td><td> <span id = " + timezones[i].type + country +"Start> </span></td><td> " + toRepresentation + " </td><td> <span id = " + timezones[i].type + country + "End> </span></td></tr>";}
 	return  "<table border = '0'> " + teamHTML + "</table>";}
function setupSelector(idName, defaultSelected, selectionChangeFunction, options){
	var retVal =  '<span id="' + idName + 'Span"> <select name="' + idName + '" id="' + idName + '" onchange="' + selectionChangeFunction + '();" >';
	optionsCount =options.length;
	for (var i=0 ; i<optionsCount ; i++){
		retVal = retVal + '<option value="' + options[i] + '"' ;
		if (options[i]==defaultSelected){ retVal = retVal+' selected' ; }
		retVal = retVal + '>' + options[i] + '</option>';}
	return retVal + '</select></span>';}
// Developed by Ian H January 2024.  Free to use, but if it's saved you time, buy me a beer when you see me: Adnams Ghostship, or Guinness.