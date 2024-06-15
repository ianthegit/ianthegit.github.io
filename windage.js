function createScreen() { 

	document.write("<div id='windage'  ><table border='0' >" +
	
	"<tr><td><span id='areaSpan' >"+
 
 	"</span></td></tr>" +
 
 	"<tr>  <td>Area </td><td>  <input type='number' id='totalArea' onchange='areaDataChanged(this.value)'> </td>  </tr> " +
 	
 	
	"<tr><td><span id='speedSpan' >"+
 	"<tr>  <td>Windspeed </td><td>  <input type='number' id='windspeed' onchange='windspeedDataChanged(this.value)'> </td>  </tr> " +
 
 	"</span></td></tr>" +
 
 
 	
 	
	"<tr><td><span id='calculationSpan' >"+
 	"<tr>  <td>Windage is </td><td> <span id='windageCalculated'> </span> </td>  </tr> " +
 
 	"</span></td></tr>" +

 	
 	"</table></div>");}
 	
 	
 function areaDataChanged(areaData) {
	 runCalculateWithAreaAndWindspeed(areaData, document.getElementById('windspeed').value)
 }	


 function windspeedDataChanged(windspeedData) {
	 runCalculateWithAreaAndWindspeed(document.getElementById('totalArea').value, windspeedData)
 }	


function runCalculateWithAreaAndWindspeed(areaData, windspeedData) {
	
	windage = ( ( (windspeedData * windspeedData) / 18 ) * areaData ) / 1000;
	
	document.getElementById("windageCalculated").innerHTML =  parseFloat(windage.toFixed(1));
}

/*

setupDropdown('tempPub', 'pubRange', 'setPubRange' , 0, 
									new Array('Hell yes', 'Only for a couple', 'Not tonight Josephine' ))


function setupDropdown(spanName, id, functionName, defaultSelected, options){
	  var retVal = "<br/>";
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
	 
	 */