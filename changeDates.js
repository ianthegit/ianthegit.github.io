timezones = new Array(); ///  / https://en.wikipedia.org/wiki/List_of_tz_database_time_zones 
timezones.push({type : 'AEST',	localeName : "Australia, Sydney" , 		typeName : "Australia/Sydney"});
timezones.push({type : 'IST',	localeName : "India" , 					typeName : "Asia/Kolkata"});
timezones.push({type : 'CET',	localeName : "Central Europe" , 		typeName : "Europe/Paris" });
timezones.push({type : 'GMT',	localeName : "United Kingdom" , 		typeName : "Europe/London"});
timezones.push({type : 'EST',	localeName : "America Atlantic Coast" ,	typeName : "America/New_York" });
timezones.push({type : 'CST',	localeName : "America Central" , 		typeName : "America/Winnipeg" });
timezones.push({type : 'PST',	localeName : "America Pacific Coast" ,	typeName : "America/Los_Angeles" });
hours=new Array (1,2,3,4,4.5,5,5.5,6,6.5,8,10,12,15,20,24,36,48);    
mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
dlist = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
function createScreen(){
	document.write("<div id='changeSetOrganiser'  ><table border='0' ><tr>"+
 		"<td> Duration  " +setupSelector('duration', 5, 'runCalculateFromDuration', hours)+
 		" hours.</td></tr><tr><td>Start Date and Time (UK Local time) " +
 		" <input type='datetime-local'  value=" + new Date().toLocaleString("en-US") + " title='changeStart' id='startTime' onfocusout='runCalculate(this.value)' /> </td> </tr>" + 
 		"<tr><td> </td></tr><tr><td>All dates and times reflect Daylight Savings as appropriate for the individual regions on the date(s) used</td></tr><tr><td> </td></tr>" +
 		"<tr><td><span id='data' >" + writeTeamsHTML() +"</span></td></tr></table></div>");}
function runCalculateFromDuration() {	runCalculate(document.getElementById('startTime').value)}
function runCalculate(pickedDate) {
	for (var i = 0 ; i < timezones.length ; i++) {
		document.getElementById(timezones[i].type+'Start').innerHTML = formatDate(new Date((new Date(pickedDate) ).toLocaleString("en-US", {timeZone: timezones[i].typeName})));   ;	
		endDate = addHours(pickedDate, document.getElementById('duration').value);
		document.getElementById(timezones[i].type+'End').innerHTML = formatDate(new Date((endDate ).toLocaleString("en-US", {timeZone: timezones[i].typeName}))); } }
function formatDate(date) {
	hours = ''+ date.getHours();
	minutes = ''+ date.getMinutes();
	var strHours =  ( hours < 10) ? '0' + hours : hours  ;
	var strMinutes =  ( minutes < 10) ? '0' + minutes : minutes  ;
	return   (dlist[date.getDay()]) + " "  + date.getDate() + " " + (mlist[date.getMonth()]) + " " + date.getFullYear() + "  " + strHours + ':' + strMinutes;}
function addHours(date, hours) {	return new Date(new Date(date).setTime(new Date(date).getTime() + (hours*60*60*1000)));}
function writeTeamsHTML() { teamHTML = "";	
	for (var i = 0 ; i < timezones.length ; i++) {
		teamHTML= teamHTML + "<tr><td>" + timezones[i].localeName + "</td><td> <span id = " + timezones[i].type + "Start> </span></td><td> to </td><td> <span id = " + timezones[i].type + "End> </span></td></tr>";
 	}
 	return  "<table border = '0'> " + teamHTML + "</table>";}
function setupSelector(idName, defaultSelected, selectionChangeFunction, options){
	var retVal =  '<span id="' + idName + 'Span"> <select name="' + idName + '" id="' + idName + '" onchange="' + selectionChangeFunction + '();" >';
	optionsCount =options.length;
	for (var i=0 ; i<optionsCount ; i++){
		retVal = retVal + '<option value="' + options[i] + '"' ;
		if (options[i]==defaultSelected){ retVal = retVal+' selected' ; }
		retVal = retVal + '>' + options[i] + '</option>';
	}
	return retVal + '</select></span>';}