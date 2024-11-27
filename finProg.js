function createScreen() { 
	yearlyData =[] ; 
	preset = getURIString('preset'); 
	if (!preset) { preset = 'Default'}
	setupBaseScreen();
	setupPresets(preset);	
	recalculate();
}

function setupBaseScreen(){
	
 document.write("<div id='setupData'  ><table border='0' ><tr><td><span id='ControlFunctions' >" + 
 " </td></tr>" +
 
 "<tr><td>Personal Pension drawdown age</td><td> <input type='number' id='personalPensionAge' onchange='recalculate()'> </td>  	<td>State pension age</td><td> <input type='number' id='statePensionAge' onchange='recalculate()'> </td> </tr>" +
 "<tr><td>Tax-free yearly amount</td><td> <input type='number' id='taxFreeAmount' onchange='recalculate()'> </td>  	 </tr>" +
 "<tr><td>Age now</td><td> <input type='number' id='ageNow' onchange='recalculate()'> </td>  								<td>Retirement age</td><td> <input type='number' id='retirementAge' onchange='recalculate()'> </td> </tr>" +
 "<tr><td>ISA now</td><td> <input type='number' id='iSAValueNow' onchange='recalculate()'> </td>  						<td>ISA yearly saving</td><td> <input type='number' id='yearlyISAAddition' onchange='recalculate()'> </td> </tr>" +
 "<tr><td>Pension now</td><td> <input type='number' id='pensionValueNow' onchange='recalculate()'> </td>  			<td>Pension yearly saving</td><td> <input type='number' id='pensionYearlyAddition' onchange='recalculate()'> </td> </tr>" +
 "<tr><td>Expected state pension</td><td> <input type='number' id='expectedStatePension' onchange='recalculate()'> </td>  </tr>" + //<td>Other taxable income</td><td> <input type='number' id='otherIncome' onchange='recalculate()'> </td>   </tr>" +
 "<tr><td>Desired yearly income</td><td> <input type='number' id='desiredYearlyIncome' onchange='recalculate()'> </td>  	<td></td> </tr>" +
 "<tr><td>Expected growth rate</td><td> <input type='number' id='expectedGrowthRate' onchange='recalculate()'> </td>	<td>Expected inflation rate</td><td> <input type='number' id='expectedInflationRate' onchange='recalculate()'> </td> </tr>" +
 "<tr><td></td>  <td></td> </tr>" +
 "</table>" +
 "<span id='results'> </span>"
  );
 
  
 
 //"<tr><td><input type='button' class='userBtnGo' value='Calculate' title='Calculate' id='Go' onclick='runCalculate()' /> </span></td></tr><tr><td><span id='data' >" + writeTeamsHTML(false) +"</span></td></tr></table></div>");
	
}

function recalculate() {


	personalPensionAge=document.getElementById('personalPensionAge').value; 
	statePensionAge=document.getElementById('statePensionAge').value; 
	taxFreeAmount=document.getElementById('taxFreeAmount').value; 
	ageNow=document.getElementById('ageNow').value; 
	retirementAge=document.getElementById('retirementAge').value; 
	iSAValueNow=document.getElementById('iSAValueNow').value; 
	yearlyISAAddition=document.getElementById('yearlyISAAddition').value; 
	pensionValueNow=document.getElementById('pensionValueNow').value; 
	pensionYearlyAddition=document.getElementById('pensionYearlyAddition').value; 
	expectedStatePension=document.getElementById('expectedStatePension').value; 
	desiredYearlyIncome=document.getElementById('desiredYearlyIncome').value; 
	expectedGrowthRate=document.getElementById('expectedGrowthRate').value; 
	expectedInflationRate=document.getElementById('expectedInflationRate').value; 
//	otherIncome=document.getElementById('otherIncome').value; 
	otherIncome=0; 

	startAge=document.getElementById('ageNow').value;
		rowNumber = 0;
		for (var i=startAge ; i<100 ; i++){
			rowNumber++;
			if (i==startAge) {
				yearlyData[rowNumber] = {age:i, ISA:iSAValueNow, pension:pensionValueNow, iSAWithdrawl:0, pensionWithdrawl:0, desiredYearlyIncome:desiredYearlyIncome, expectedStatePension:expectedStatePension, usedStatePension:0};
			}
			if (i!=startAge) {
				expectedStatePension=calculateExpectedStatePention(expectedInflationRate,yearlyData[rowNumber-1].expectedStatePension );
				usedStatePension=calculateUsedStatePension(i, statePensionAge, expectedStatePension );
				desiredYearlyIncome = recalculateDesiredYearyIncome(expectedInflationRate,yearlyData[rowNumber-1].desiredYearlyIncome );
				iSAWithdrawl = calculateISAWithdrawl(i,desiredYearlyIncome, retirementAge, yearlyData[rowNumber-1].ISA, personalPensionAge, taxFreeAmount);
				iSAValue = recalculateISA(i,retirementAge, yearlyData[rowNumber-1].ISA, expectedGrowthRate,personalPensionAge, iSAWithdrawl,yearlyISAAddition);
				pensionWithdrawl = calculatePensionWithdrawl(i, desiredYearlyIncome, retirementAge, yearlyData[rowNumber-1].pension, personalPensionAge, taxFreeAmount, iSAWithdrawl,usedStatePension, statePensionAge);
				pensionValue = recalculatePension(i, retirementAge, yearlyData[rowNumber-1].pension, expectedGrowthRate,pensionWithdrawl,pensionYearlyAddition);
				yearlyData[rowNumber] = {	age:i, 
											ISA: iSAValue, 
											pension:pensionValue,
											iSAWithdrawl:iSAWithdrawl,
											pensionWithdrawl:pensionWithdrawl,
											desiredYearlyIncome:desiredYearlyIncome,
											expectedStatePension:expectedStatePension,
											usedStatePension:usedStatePension
										};
			}	
	}
	redrawScreen();

}
	
function redrawScreen() {
	resultsData="<table border='1'> <tr> <td> Age</td> <td>Expected State Pension</td><td>Used State Pension</td><td>Desired Yearly Income</td> <td>ISA</td><td>ISA Withdrawl</td><td>Pension</td><td>PensionWithdrawl</td></tr> " 
	
		startAge=document.getElementById('ageNow').value;
	
		for (var i=1 ; i<yearlyData.length ; i++){
			
				resultsData=resultsData+"<tr><td>" + yearlyData[i].age + "</td>"
				+"<td>" + yearlyData[i].expectedStatePension + "</td>"
				+"<td>" + yearlyData[i].usedStatePension + "</td>"
				+"<td>" + yearlyData[i].desiredYearlyIncome + "</td>"
				+"<td>" + yearlyData[i].ISA + "</td>"
				+"<td>" + yearlyData[i].iSAWithdrawl + "</td>"
				+"<td>" + yearlyData[i].pension + "</td>"
				+"<td>" + yearlyData[i].pensionWithdrawl + "</td>"
				/*
				+"<td>" + "</td>"
				+"<td>" + "</td>"
				+"<td>" + "</td>"
				+"<td>" + "</td>"
				*/
				+"</tr>"

		}	

	ageNow=ageNow+"</table>" ;
	document.getElementById('results').innerHTML=resultsData;
	
}

function recalculateDesiredYearyIncome(expectedInflationRate, desiredYearlyIncome ) {
	return parseInt( +desiredYearlyIncome + +(desiredYearlyIncome * (expectedInflationRate /100) ) );
	
}
function calculateExpectedStatePention(expectedInflationRate, expectedStatePension ) {
	return parseInt( +expectedStatePension + +(expectedStatePension * (expectedInflationRate /100) ) );
	
}
function calculateUsedStatePension(age, statePensionAge, expectedStatePension ) {
	if (age < statePensionAge) {
		return 0; }
	return expectedStatePension;	
	
}

function recalculatePension(age, retirementAge, lastYearsPension, expectedGrowthRate, pensionWithdrawl, pensionYearlyAddition) {
	if (age < retirementAge) {
		return parseInt( +lastYearsPension + +(lastYearsPension * (expectedGrowthRate /100) ) - +pensionWithdrawl + +pensionYearlyAddition);
	}
	return parseInt( +lastYearsPension + +(lastYearsPension * (expectedGrowthRate /100) ) - +pensionWithdrawl);
}

function calculateISAWithdrawl(age, desiredYearlyIncome, retirementAge, lastYearsISA, personalPensionAge, taxFreeAmount) {
	if (age < retirementAge) {
		return 0;
	}
	if (age < personalPensionAge) {
		if (lastYearsISA > desiredYearlyIncome) {
			return desiredYearlyIncome;
		}
		return lastYearsISA;
	}
	if (lastYearsISA> (+desiredYearlyIncome - +taxFreeAmount)) {
			return parseInt(+desiredYearlyIncome - +taxFreeAmount);
	}
	
	return lastYearsISA;

}

function calculatePensionWithdrawl(age, desiredYearlyIncome, retirementAge, lastYearsPension, personalPensionAge, taxFreeAmount, iSAWithdrawl, expectedStatePension, statePensionAge){
	if (age < retirementAge) {
		return 0;
	}
	if (age < personalPensionAge) {
		return 0;
	}	
	if (desiredYearlyIncome == iSAWithdrawl ) {
		return 0;
	}
	if (desiredYearlyIncome > parseInt(+iSAWithdrawl + +lastYearsPension) ) {
		if (age < statePensionAge) {
			return parseInt(+desiredYearlyIncome - +iSAWithdrawl);
		}
		return parseInt(+desiredYearlyIncome - +iSAWithdrawl - +expectedStatePension);
	}
	
	return parseInt(+desiredYearlyIncome - +iSAWithdrawl - +expectedStatePension);
	
	
}


function recalculateISA(age, retirementAge, lastYearsISA, expectedGrowthRate, personalPensionAge, iSAWithdrawl,yearlyISAAddition) {
	if (age < retirementAge) {
		return parseInt( +lastYearsISA + +(lastYearsISA * (expectedGrowthRate /100)) + +yearlyISAAddition );
	}
	if (age < personalPensionAge) {
		if (lastYearsISA > desiredYearlyIncome) {
			return parseInt( +lastYearsISA + +(lastYearsISA * (expectedGrowthRate /100)) - +iSAWithdrawl );
		}
		return 0;
	}
	if (lastYearsISA>= iSAWithdrawl) {
			return parseInt( +lastYearsISA + +(lastYearsISA * (expectedGrowthRate /100)) - iSAWithdrawl);
	}
	
	return lastYearsISA;
}
function setupRow1(startAge, iSAValueNow, pensionValueNow) {
	return "<tr><td>" + startAge + "</td>"
			+"<td id='iSA"+startAge+"'>" + iSAValueNow+ "</td>"
			+"<td id='pension"+startAge+"'>" + pensionValueNow+ "</td>";

}
function setupPresets(preset) {
	document.getElementById('personalPensionAge').value=55; 
	document.getElementById('statePensionAge').value=67; 
	document.getElementById('taxFreeAmount').value=12580; 

	
	if (preset == 'me') {
		document.getElementById('ageNow').value=56; 
		document.getElementById('retirementAge').value=57; 
		document.getElementById('iSAValueNow').value=197000; 
		document.getElementById('yearlyISAAddition').value=10000; 
		document.getElementById('pensionValueNow').value=1002500; 
		document.getElementById('pensionYearlyAddition').value=40000; 
		document.getElementById('expectedStatePension').value=12407; 
		document.getElementById('desiredYearlyIncome').value=40000; 
		document.getElementById('expectedGrowthRate').value=4; 
		document.getElementById('expectedInflationRate').value=2.5; 
		//document.getElementById('otherIncome').value=8000; 
		return;
	}
	if (preset == 'Reddit') {
		document.getElementById('ageNow').value=33; 
		document.getElementById('retirementAge').value=40; 
		document.getElementById('iSAValueNow').value=120000; 
		document.getElementById('yearlyISAAddition').value=20000; 
		document.getElementById('pensionValueNow').value=80000; 
		document.getElementById('pensionYearlyAddition').value=60000; 
		document.getElementById('expectedStatePension').value=12407; 
		document.getElementById('desiredYearlyIncome').value=30000; 
		document.getElementById('expectedGrowthRate').value=8.5; 
		document.getElementById('expectedInflationRate').value=2.5; 
		document.getElementById('personalPensionAge').value=57; 
		//document.getElementById('otherIncome').value=0; 
		return;
		}
		
	document.getElementById('ageNow').value=56; 
	document.getElementById('retirementAge').value=57; 
	document.getElementById('iSAValueNow').value=20000; 
	document.getElementById('yearlyISAAddition').value=10000; 
	document.getElementById('pensionValueNow').value=50000; 
	document.getElementById('pensionYearlyAddition').value=10000; 
	document.getElementById('expectedStatePension').value=12407; 
	document.getElementById('desiredYearlyIncome').value=30000; 
	document.getElementById('expectedGrowthRate').value=4; 
	document.getElementById('expectedInflationRate').value=2.5; 
	//document.getElementById('otherIncome').value=0; 

}


function getURIString(paramName) { const urlParams = new URLSearchParams(window.location.search);
 if (urlParams.has(paramName)) {return urlParams.get(paramName);}; return null;}
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
	        retVal = retVal+' selected' ;	       }
	       retVal = retVal + '>' + options[i] + '</option>';
	    }
	  }
	  retVal = retVal + '</select></span>';
	  return retVal; }
	  
/*
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
    teamHTML= teamHTML + "<tr><td>" +  counter + "     </td><td> " + teamsData[i].teamName + "</td><td>    their answer (" + teamsData[i].answer + ") was " + teamsData[i].sorter + " away</td></tr>";}
  } else { teamHTML= teamHTML + "<tr><td>" + teamsData[i].teamName + "</td><td><input type='number' id='" + teamsData[i].teamName + "' onchange='dataChangedOnRow(" + i + ", this.value)'> </td></tr>";}}
 return  "<table border = '0'> " + teamHTML + "</table>";}
function dataChangedOnRow(rowNo, value) { teamsData[rowNo].answer=value; teamsData[rowNo].distanceFrom = answer - value; teamsData[rowNo].sorter = teamsData[rowNo].distanceFrom;
 if (teamsData[rowNo].distanceFrom < 0) {
  teamsData[rowNo].sorter = teamsData[rowNo].distanceFrom *-1;
  if (mustBeUnder) {teamsData[rowNo].sorter = null;}}}
function getURIString(paramName) { const urlParams = new URLSearchParams(window.location.search);
 if (urlParams.has(paramName)) {return urlParams.get(paramName);}; return null;}
function getTeamNames(teamNamesString){	return decodeURI(teamNamesString);}

*/