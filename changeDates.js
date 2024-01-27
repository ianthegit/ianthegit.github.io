// https://en.wikipedia.org/wiki/List_of_tz_database_time_zones  
timezones = new Array();
hours=new Array (5,6,8, 10, 12, 15, 20, 24, 36, 48);    
    
function createScreen(){
		timezones.push({type : 'AEST',	localeName : "Australia, Sydney" , typeName : "Australia/Sydney"});
		timezones.push({type : 'IST',	localeName : "India" , typeName : "Asia/Kolkata"});
		timezones.push({type : 'CET',	localeName : "Central Europe" , typeName : "Europe/Paris" });
		timezones.push({type : 'GMT',	localeName : "United Kingdom" , typeName : "Europe/London"});
		timezones.push({type : 'EST',	localeName : "Eastern Standard Time" , typeName : "America/New_York" });
		timezones.push({type : 'CST',	localeName : "Central Standard Time" , typeName : "America/Winnipeg" });
		timezones.push({type : 'PST',	localeName : "Pacific Standard Time" , typeName : "America/Los_Angeles" });

 		document.write("<div id='changeSetOrganiser'  ><table border='0' ><tr>"+
 		"<td> Duration  " +setupSelector('duration', 5, 'runCalculateFromDuration', hours)+
 		" hours.</td></tr><tr><td>Start Date and Time (UK Local time) " +
 		" <input type='datetime-local'  value=" + new Date().toLocaleString("en-US") + " title='changeStart' id='startTime' onfocusout='runCalculate(this.value)' /> </td> </tr><tr><td></td></tr><tr><td>" +
 		 "<span id='data' >" + writeTeamsHTML() +"</span></td></tr></table></div>");
}

function runCalculateFromDuration() {
	runCalculate(document.getElementById('startTime').value)
}

function runCalculate(pickedDate) {
 for (var i = 0 ; i < timezones.length ; i++) {
    document.getElementById(timezones[i].type+'Start').innerHTML = 
	     formatDate(new Date((new Date(pickedDate) ).toLocaleString("en-US", {timeZone: timezones[i].typeName})));   ;
	
  	endDate = addHours(pickedDate, document.getElementById('duration').value);
    document.getElementById(timezones[i].type+'End').innerHTML = 
	     formatDate(new Date((endDate ).toLocaleString("en-US", {timeZone: timezones[i].typeName})));   ;
    }
}

function formatDate(date) {
  hours = ''+ date.getHours();
  minutes = ''+ date.getMinutes();
  var strHours =  ( hours < 10) ? '0' + hours : hours  ;
  var strMinutes =  ( minutes < 10) ? '0' + minutes : minutes  ;
  var strTime = strHours + ':' + strMinutes ; 
  return   date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + "  " + strTime;
}

function addHours(date, hours) {
  return new Date(new Date(date).setTime(new Date(date).getTime() + (hours*60*60*1000)));
}

function writeTeamsHTML() { teamHTML = "";	
 for (var i = 0 ; i < timezones.length ; i++) {
    teamHTML= teamHTML + "<tr><td>" + timezones[i].localeName + "</td><td> <span id = " + timezones[i].type + "Start> </span></td><td> to </td><td> <span id = " + timezones[i].type + "End> </span></td></tr>";
    }
 return  "<table border = '0'> " + teamHTML + "</table>";}

function setupSelector(idName, defaultSelected, selectionChangeFunction, options){
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