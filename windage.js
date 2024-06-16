function createScreen() { 
	document.write("<div id='windage' class='grad' ><table border='0' >" +
	"<tr><span id='areaCalcSpan'>"+  	"</span></tr>" +	"<tr><td><span id='areaSpan'>"+  	"</span></td></tr>" +
  	"<tr>  <td>" +
 	setupDropdown('areaTypeCalcSpan', 'areaCalcType', 'setAreaTypeCalc' , 0, 	new Array('Total Area', 'Calculate Area' )) +
 	" </td><td>  <input type='number' id='totalArea' onchange='areaDataChanged(this.value)'> </td>  <td>M<sup>2</sup></rd> </tr> " +
	"<tr><td><span id='speedSpan' >"+ 	"<tr>  <td>Windspeed </td>" + 
 	" <td> " + 	setupDropdown('windspeedTypeSpan', 'windspeedType', 'setWindspeedType' , 0, 	new Array('Knots', 'MPH', 'Metres/second' )) + " </td>" + 
 	"<td>  <input type='number' id='windspeed' onchange='windspeedDataChanged(this.value)'> </td>" + 
 	" </tr> </span></td></tr>" +	"<tr><td><span id='calculationSpan' >"+
 	"<tr>  <td>Windage is </td><td> <span id='windageCalculated'> </span> </td>  </tr> " +
 	"</span></td></tr>" + 	"</table></div>");}
function setAreaTypeCalc() {
	if (document.getElementById('areaCalcType').value == 'Total Area') {
		document.getElementById("areaCalcSpan").innerHTML = "";
	}
	if (document.getElementById('areaCalcType').value == 'Calculate Area') {
		document.getElementById("areaCalcSpan").innerHTML = 
		"<table><tr><td>Number of 2.4M containers</br> stacked above deck</td> <td><input type='number' id='numberOfContainersHigh' onchange='calculateArea()'> </td> </tr>" +
		"<tr><td>Deck height in M</td> <td><input type='number' id='deckHeight' onchange='calculateArea()'> </td> </tr>" +
		"<tr><td>Vessel length in M</td> <td><input type='number' id='vesselLength' onchange='calculateArea()'> </td> </tr></table>"
		;
	}
 }
function calculateArea() {
	numberOfContainersHighData = document.getElementById('numberOfContainersHigh').value;
	deckHeightData = document.getElementById('deckHeight').value;
	vesselLengthData = document.getElementById('vesselLength').value;
	calculatedTotalArea = (deckHeightData + (numberOfContainersHighData * 2.4) ) * vesselLengthData;
	document.getElementById('totalArea').value = calculatedTotalArea;
	runCalculateWithAreaAndWindspeed(calculatedTotalArea, document.getElementById('windspeed').value)
}
 function setWindspeedType(windspeedType) {
	 runCalculateWithAreaAndWindspeed(document.getElementById('totalArea').value, document.getElementById('windspeed').value) }
 function areaDataChanged(areaData) {
	 runCalculateWithAreaAndWindspeed(areaData, document.getElementById('windspeed').value) }	
 function windspeedDataChanged(windspeedData) {
	 runCalculateWithAreaAndWindspeed(document.getElementById('totalArea').value, windspeedData) }	
function runCalculateWithAreaAndWindspeed(areaData, windspeedData) {
	windspeedType = document.getElementById('windspeedType').value;
	if (windspeedType == 'MPH') {
		windspeedData = windspeedData / 1.151;
	}
	if (windspeedType == 'Metres/second') {
		windspeedData = windspeedData * 1.94384;
	}
	windage = ( ( (windspeedData * windspeedData) / 18 ) * areaData ) / 1000;
	document.getElementById("windageCalculated").innerHTML =  parseFloat(windage.toFixed(1));
}
function setupDropdown(spanName, id, functionName, defaultSelected, options){
	  var retVal = "";
	  retVal = retVal + '<span id="' + spanName + '"> <select name="' + id + '" id="' + id + '" onchange="'+ functionName + '();" >';
	  lapIdCount =options.length;
	  for (var i=0 ; i<lapIdCount ; i++){
	   if (options[i]=='-') {
	                retVal = retVal + '<optgroup label="----------"></optgroup>';   
	            } else {
	          retVal = retVal + '<option value="' + options[i] + '"' ;
	       if (i==defaultSelected){
	        retVal = retVal+' selected' ;
	       }
	       retVal = retVal + '>' + options[i] + '</option>';
	    }
	  }
	  retVal = retVal + '</select></span>';
	  return retVal;
 }