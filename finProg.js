var lumpSumTaken=0;
	  
historicalInflation=[1.0036,3.4475,4.1965,2.0185,3.2816,4.7738,3.9096,2.4821,4.6974,5.4467,6.3666,9.4448,7.0711,9.196,16.044,24.2073,16.5595,15.8403,8.2631,13.4213,17.9659,11.8766,8.5989,4.6093,4.9607,6.0714,3.4276,4.1489,4.1554,5.7602,8.0635,7.4618,4.5915,2.5586,2.219,2.6975,2.8518,2.2011,1.8206,1.753,1.183,1.5323,1.5204,1.3765,1.3904,2.0891,2.4557,2.3866,3.5214,1.9617,2.4927,3.8561,2.5732,2.2917,1.4511,0.368,1.0084,2.5578,2.2928,1.7381,0.9895,2.5184,7.922,6.794];
historicalSPReturns=[-10.46,43.72,12.06,0.34,26.64,-8.81,22.61,16.42,12.4,-9.97,23.8,10.81,-8.24,3.56,14.22,18.76,-14.31,-25.9,37,23.83,-6.98,6.51,18.52,31.74,-4.7,20.42,22.34,6.15,31.24,18.49,5.81,16.54,31.48,-3.06,30.23,7.49,9.97,1.33,37.2,22.68,33.1,28.34,20.89,-9.03,-11.85,-21.97,28.36,10.74,4.83,15.61,5.48,-36.55,25.94,14.82,2.1,15.89,32.15,13.52,1.38,11.77,21.61,-4.23,29.24,18.02,28.47,-18.01]

function createScreen() { 
	yearlyData =[] ; 
	preset = getURIString('preset'); 
	if (!preset) { preset = 'Default'}
	setupBaseScreen();
	setupPresets(preset);	
	recalculate();
}

function setupBaseScreen(){
	tempTaxFreeLumpSum = getURIString('taxFreeLumpSum');
	if (!tempTaxFreeLumpSum) { tempTaxFreeLumpSum = 0};
	if (tempTaxFreeLumpSum > 0) { tempTaxFreeLumpSum = 1};
	
		
 document.write("(WARNING - these calculations DO NOT take any income tax due on income into account) </BR></BR>"+
 "The numbers below are purely indicative, and are absolutely NOT an alternative to a proper Financial Advisor.</BR></BR>"+
 "<input type='button' title='This will create a URL with your own setup values you can use to share your plan securely.  The data is never stored by us.' value='Copy shareable URL to Clipboard' id='C2C' onclick='createURLAndCopyToClipboard()' /> </BR></BR> " +
 "<table border='0' ><tr><td><span id='ControlFunctions' >" + 
 "Basic Details </td> </tr>" +
 
 "<tr><td>Minimum personal pension drawdown age</td><td> <input type='number' id='personalPensionAge' onchange='recalculate()'> </td>  	<td>State pension age</td><td> <input type='number' id='statePensionAge' onchange='recalculate()'> </td> </tr>" +
 "<tr><td>Tax-free yearly amount</td><td> <input type='number' id='taxFreeAmount' onchange='recalculate()'> </td>  	<td>Max lump sum</td><td> <input type='number' id='maxLumpSum' onchange='recalculate()'> </td>  </tr>" +
 "<tr><td>Expected growth rate (pre and post retirement)</td><td>  <table 'border=0'> <tr> <td>  <input maxlength='4' size='4' type='number' id='expectedGrowthRate' onchange='recalculate()'> </td></tr><tr><td>   <input maxlength='4' size='4' type='number' id='expectedGrowthRatePostRetirement' onchange='recalculate()'> </td> </td></tr></table> </td>" +
 "	<td>Expected inflation rate</td><td> <input type='number' id='expectedInflationRate' onchange='recalculate()'> </td> </tr>" +
 "<tr><td>Your specific details</td></tr>" +
 "<tr><td>Age now</td><td> <input type='number' id='ageNow' onchange='recalculate()'> </td>  								<td>Age you intend to stop working</td><td> <input type='number' id='retirementAge' onchange='recalculate()'> </td> </tr>" +
 "<tr><td>ISA now</td><td> <input type='number' id='iSAValueNow' onchange='recalculate()'> </td>  						<td>ISA yearly saving</td><td> <input type='number' id='yearlyISAAddition' onchange='recalculate()'> </td> </tr>" +
 "<tr><td>Pension now</td><td> <input type='number' id='pensionValueNow' onchange='recalculate()'> </td>  			<td>Pension yearly saving</td><td> <input type='number' id='pensionYearlyAddition' onchange='recalculate()'> </td> </tr>" +
 "<tr><td>Expected state pension</td><td> <input type='number' id='expectedStatePension' onchange='recalculate()'> </td>  <td>Other taxable income</td><td> <input type='number' id='otherIncome' onchange='recalculate()'> </td>   </tr>" +
 "<tr><td>Desired yearly income from your estate</td><td> <input type='number' id='desiredYearlyIncome' onchange='recalculate()'> </td>  	<td>Tax-free lump Sum</td><td> " +setupDropdown('taxFreeLumpSumSpan', 'taxFreeLumpSum', 'recalculate' , tempTaxFreeLumpSum, new Array(0, 25 )) + "%</td> </tr>" +
 "<tr><td></td>  <td></td> </tr>" +
 "</table>" +
 "<span id='results'> </span>" +
 "<span id='monteCarlo'> </span>"
  );
 
}

function recalculate() {
	recalculateOptionToReDraw(1);
	
	countMap={};
	for (var monteCarloCount=1 ; monteCarloCount < 100000 ; monteCarloCount++) {
		ageMoneyRunsOut=recalculateOptionToReDraw(0);
		
		if (countMap[ageMoneyRunsOut] === undefined) {
    		countMap[ageMoneyRunsOut] = 1;
  		} else {
    		countMap[ageMoneyRunsOut]++;
  		}
	}
	
	drawMonteCarlo(countMap);
}
function recalculateOptionToReDraw(redraw) {
	lumpSumTaken=0;

	personalPensionAge=document.getElementById('personalPensionAge').value; 
	statePensionAge=document.getElementById('statePensionAge').value; 
	taxFreeAmount=document.getElementById('taxFreeAmount').value; 
	maxLumpSum=document.getElementById('maxLumpSum').value; 
	ageNow=document.getElementById('ageNow').value; 
	retirementAge=document.getElementById('retirementAge').value; 
	iSAValueNow=document.getElementById('iSAValueNow').value; 
	yearlyISAAddition=document.getElementById('yearlyISAAddition').value; 
	pensionValueNow=document.getElementById('pensionValueNow').value; 
	pensionYearlyAddition=document.getElementById('pensionYearlyAddition').value; 
	expectedStatePension=document.getElementById('expectedStatePension').value; 
	desiredYearlyIncome=document.getElementById('desiredYearlyIncome').value; 
	expectedGrowthRate=document.getElementById('expectedGrowthRate').value; 
	expectedGrowthRatePostRetirement=document.getElementById('expectedGrowthRatePostRetirement').value; 
	expectedInflationRate=document.getElementById('expectedInflationRate').value; 
	otherIncome=document.getElementById('otherIncome').value; 
	taxFreeLumpSum=document.getElementById('taxFreeLumpSum').value; 


	startAge=document.getElementById('ageNow').value;
	yearlyData=[];
	rowNumber = 0;
	for (var i=startAge ; i<100 ; i++){
		rowNumber++;
		if (i==startAge) {
			yearlyData[rowNumber] = {age:i, ISA:iSAValueNow, pension:pensionValueNow, iSAWithdrawl:0, pensionWithdrawl:0, desiredYearlyIncome:desiredYearlyIncome, expectedStatePension:expectedStatePension, usedStatePension:0, otherIncome:otherIncome};
		}
		if (i!=startAge) {
			growthRateToUse=expectedGrowthRatePostRetirement;
			if (i < retirementAge) {
				growthRateToUse=expectedGrowthRate;
			}
			if (redraw==0) {
				growthRateToUse = historicalSPReturns[Math.floor(Math.random() * historicalSPReturns.length)];
				
				expectedInflationRate= historicalInflation[Math.floor(Math.random() * historicalInflation.length)];
			}
			otherIncome=calculateOtherIncome(expectedInflationRate,yearlyData[rowNumber-1].otherIncome );
			expectedStatePension=calculateExpectedStatePension(expectedInflationRate,yearlyData[rowNumber-1].expectedStatePension );
			usedStatePension=calculateUsedStatePension(i, statePensionAge, expectedStatePension );
			desiredYearlyIncome = recalculateDesiredYearyIncome(expectedInflationRate,yearlyData[rowNumber-1].desiredYearlyIncome );
			iSAWithdrawl = calculateISAWithdrawl(i,desiredYearlyIncome, retirementAge, yearlyData[rowNumber-1].ISA, personalPensionAge, taxFreeAmount, otherIncome);
			iSAValue = recalculateISA(i,retirementAge, yearlyData[rowNumber-1].ISA, growthRateToUse,personalPensionAge, iSAWithdrawl,yearlyISAAddition);
			pensionWithdrawl = calculatePensionWithdrawl(i, desiredYearlyIncome, retirementAge, yearlyData[rowNumber-1].pension, personalPensionAge, iSAWithdrawl,usedStatePension, statePensionAge, otherIncome, taxFreeLumpSum,maxLumpSum);
			pensionValue = recalculatePension(i, retirementAge, yearlyData[rowNumber-1].pension, growthRateToUse,pensionWithdrawl,pensionYearlyAddition);
			if (pensionValue==0){
				pensionWithdrawl=yearlyData[rowNumber-1].pension;
				if (redraw==0){
					return i;				
				}
			}
			yearlyData[rowNumber] = {	age:i, 
										ISA: iSAValue, 
										pension:pensionValue,
										iSAWithdrawl:iSAWithdrawl,
										pensionWithdrawl:pensionWithdrawl,
										desiredYearlyIncome:desiredYearlyIncome,
										expectedStatePension:expectedStatePension,
										usedStatePension:usedStatePension,
										otherIncome:otherIncome
									};
		}	
	}
	if (redraw==0){
		return 100;				
	}

	if (redraw==1) {
		redrawScreen();
	}
}
	
function redrawScreen() {
	resultsData="<table border='1'> <tr> <td> Age</td><td>Desired Yearly Income</td> <td>Expected State Pension</td><td>Used State Pension</td> <td>Other Income</td> " + 
	"<td>ISA</td><td>ISA Withdrawl</td><td>Personal Pension</td><td>PensionWithdrawl</td><td>Total Withdrawls</td><td>Total Income</td></tr> " 
	
		startAge=document.getElementById('ageNow').value;
	
		for (var i=1 ; i<yearlyData.length ; i++){
			//parseFloat(doubleNumber).toLocaleString()
				resultsData=resultsData+"<tr><td>" + yearlyData[i].age + "</td>"
				+"<td align='right'>" + parseFloat(yearlyData[i].desiredYearlyIncome).toLocaleString() + "</td>"
				+"<td align='right'>" + parseFloat(yearlyData[i].expectedStatePension).toLocaleString() + "</td>"
				+"<td align='right'>" + parseFloat(yearlyData[i].usedStatePension).toLocaleString() + "</td>"
				+"<td align='right'>" + parseFloat(yearlyData[i].otherIncome).toLocaleString() + "</td>"
				+"<td align='right'>" + parseFloat(yearlyData[i].ISA).toLocaleString() + "</td>"
				+"<td align='right'>" + parseFloat(yearlyData[i].iSAWithdrawl).toLocaleString() + "</td>"
				+"<td align='right'>" + parseFloat(yearlyData[i].pension).toLocaleString() + "</td>"
				+"<td align='right'>" + parseFloat(yearlyData[i].pensionWithdrawl).toLocaleString() + "</td>"
				+"<td align='right'>" + parseFloat(parseInt(+yearlyData[i].iSAWithdrawl + +yearlyData[i].pensionWithdrawl)).toLocaleString() + "</td>"
				+"<td align='right'>" + parseFloat(parseInt(+yearlyData[i].iSAWithdrawl + +yearlyData[i].pensionWithdrawl + +yearlyData[i].usedStatePension + +yearlyData[i].otherIncome )).toLocaleString() + "</td>"
				+"</tr>"

		}	

	ageNow=ageNow+"</table>" ;
	document.getElementById('results').innerHTML=resultsData;
	
}

function drawMonteCarlo(countMap) {

	resultsData="</BR></BR>MonteCarlo Results - run using S&P and historical UK inflation data run 100,000 times </BR> </BR> <table border='1'> <tr> <td> Age</td><td>Number of times money runs out</td> </tr> " 
	
	startAge=document.getElementById('ageNow').value;
	
	for (let key in countMap) {
		resultsData=resultsData+"<tr><td>" + key + "</td>"
		+"<td align='right'>" + parseFloat(countMap[key]).toLocaleString() + "</td>"
		+"</tr>"
	}	

	ageNow=ageNow+"</table>" ;
	document.getElementById('monteCarlo').innerHTML=resultsData;
	

}
function recalculateDesiredYearyIncome(expectedInflationRate, desiredYearlyIncome ) {
	return parseInt( +desiredYearlyIncome + +(desiredYearlyIncome * (expectedInflationRate /100) ) );
}
function calculateExpectedStatePension(expectedInflationRate, expectedStatePension ) {
	return parseInt( +expectedStatePension + +(expectedStatePension * (expectedInflationRate /100) ) );
}
function calculateUsedStatePension(age, statePensionAge, expectedStatePension ) {
	if (age < statePensionAge) {
		return 0; }
	return expectedStatePension;	
}
function calculateOtherIncome(expectedInflationRate, otherIncome ) {
	return parseInt( +otherIncome + +(otherIncome * (expectedInflationRate /100) ) );
}


function recalculatePension(age, retirementAge, lastYearsPension, expectedGrowthRate, pensionWithdrawl, pensionYearlyAddition) {
		recalculatedPension=recalculatePensionStep1(age, retirementAge, lastYearsPension, expectedGrowthRate, pensionWithdrawl, pensionYearlyAddition);
		if (recalculatedPension < 0){
			return 0;
		}
		return recalculatedPension;
	}
function recalculatePensionStep1(age, retirementAge, lastYearsPension, expectedGrowthRate, pensionWithdrawl, pensionYearlyAddition) {
	if (age < retirementAge) {
		return parseInt( +lastYearsPension + +(lastYearsPension * (expectedGrowthRate /100) ) - +pensionWithdrawl + +pensionYearlyAddition);
	}
	return parseInt( +lastYearsPension + +(lastYearsPension * (expectedGrowthRate /100) ) - +pensionWithdrawl);
}

function calculateISAWithdrawl(age, desiredYearlyIncome, retirementAge, lastYearsISA, personalPensionAge, taxFreeAmount, otherIncome) {
	if (age < retirementAge) {
		return 0;
	}
	if (age < personalPensionAge) {
		if (lastYearsISA > desiredYearlyIncome) {
			return desiredYearlyIncome;
		}
		return lastYearsISA;
	}
	if (lastYearsISA> (+desiredYearlyIncome - +taxFreeAmount -+otherIncome)) {
			return parseInt(+desiredYearlyIncome - +taxFreeAmount - +otherIncome);
	}
	
	return lastYearsISA;

}

function calculatePensionWithdrawl(age, desiredYearlyIncome, retirementAge, lastYearsPension, personalPensionAge, iSAWithdrawl, usedStatePension, statePensionAge, otherIncome, taxFreeLumpSum,maxLumpSum){

	taxFreeLumpSumAmount=0;
	if (lastYearsPension == 0) {
		return 0;
	}
	if ((age == personalPensionAge  || personalPensionAge < retirementAge && age == retirementAge  ) && lumpSumTaken==0 ) {
		if (taxFreeLumpSum != '0') {
			taxFreeLumpSumAmount = parseInt(+lastYearsPension * +(+taxFreeLumpSum/100));
			if (taxFreeLumpSumAmount > maxLumpSum) {
				taxFreeLumpSumAmount = maxLumpSum;
			}
			lumpSumTaken=1;
		}
	}

	if (age < retirementAge) {
		return taxFreeLumpSumAmount;
	}
	if (age < personalPensionAge) {
		return 0;
	}	


	if (desiredYearlyIncome == iSAWithdrawl ) {
		return taxFreeLumpSumAmount;
	}

	if (desiredYearlyIncome > parseInt(+iSAWithdrawl + +lastYearsPension + +otherIncome) ) {
		if (age < statePensionAge) {
			return parseInt(+desiredYearlyIncome - +iSAWithdrawl - +otherIncome + +taxFreeLumpSumAmount);
		}
		return parseInt(+desiredYearlyIncome - +iSAWithdrawl - +usedStatePension - +otherIncome + +taxFreeLumpSumAmount);
	}
	
	return parseInt(+desiredYearlyIncome - +iSAWithdrawl - +usedStatePension - +otherIncome + +taxFreeLumpSumAmount);
	
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
	document.getElementById('maxLumpSum').value=268275; 

	
	if (preset == 'me') {
		document.getElementById('ageNow').value=56; 
		document.getElementById('retirementAge').value=57; 
		document.getElementById('iSAValueNow').value=202000; 
		document.getElementById('yearlyISAAddition').value=10000; 
		document.getElementById('pensionValueNow').value=1100000; 
		document.getElementById('pensionYearlyAddition').value=60000; 
		document.getElementById('expectedStatePension').value=12407; 
		document.getElementById('desiredYearlyIncome').value=52000; 
		document.getElementById('expectedGrowthRate').value=4; 
		document.getElementById('expectedGrowthRatePostRetirement').value=4; 
		document.getElementById('expectedInflationRate').value=2.5; 
		document.getElementById('otherIncome').value=0; 
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
		document.getElementById('expectedGrowthRatePostRetirement').value=4; 
		document.getElementById('expectedInflationRate').value=2.5; 
		document.getElementById('personalPensionAge').value=57; 
		document.getElementById('otherIncome').value=0; 
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
	document.getElementById('expectedGrowthRate').value=8; 
	document.getElementById('expectedGrowthRatePostRetirement').value=4; 
	document.getElementById('expectedInflationRate').value=2.5; 
	document.getElementById('otherIncome').value=0; 

		
		
	personalPensionAge = getURIString('personalPensionAge'); 
	if (personalPensionAge) { document.getElementById('personalPensionAge').value=personalPensionAge}

	statePensionAge = getURIString('statePensionAge'); 
	if (statePensionAge) { document.getElementById('statePensionAge').value=statePensionAge}

	taxFreeAmount = getURIString('taxFreeAmount'); 
	if (taxFreeAmount) { document.getElementById('taxFreeAmount').value=taxFreeAmount}

	maxLumpSum = getURIString('maxLumpSum'); 
	if (maxLumpSum) { document.getElementById('maxLumpSum').value=maxLumpSum}

	ageNow = getURIString('ageNow'); 
	if (ageNow) { document.getElementById('ageNow').value=ageNow}

	retirementAge = getURIString('retirementAge'); 
	if (retirementAge) { document.getElementById('retirementAge').value=retirementAge}

	iSAValueNow = getURIString('iSAValueNow'); 
	if (iSAValueNow) { document.getElementById('iSAValueNow').value=iSAValueNow}

	yearlyISAAddition = getURIString('yearlyISAAddition'); 
	if (yearlyISAAddition) { document.getElementById('yearlyISAAddition').value=yearlyISAAddition}

	pensionValueNow = getURIString('pensionValueNow'); 
	if (pensionValueNow) { document.getElementById('pensionValueNow').value=pensionValueNow}

	pensionYearlyAddition = getURIString('pensionYearlyAddition'); 
	if (pensionYearlyAddition) { document.getElementById('pensionYearlyAddition').value=pensionYearlyAddition}

	expectedStatePension = getURIString('expectedStatePension'); 
	if (expectedStatePension) { document.getElementById('expectedStatePension').value=expectedStatePension}

	desiredYearlyIncome = getURIString('desiredYearlyIncome'); 
	if (desiredYearlyIncome) { document.getElementById('desiredYearlyIncome').value=desiredYearlyIncome}

	expectedGrowthRate = getURIString('expectedGrowthRate'); 
	if (expectedGrowthRate) { document.getElementById('expectedGrowthRate').value=expectedGrowthRate}

	expectedGrowthRatePostRetirement = getURIString('expectedGrowthRatePostRetirement'); 
	if (expectedGrowthRatePostRetirement) { document.getElementById('expectedGrowthRatePostRetirement').value=expectedGrowthRatePostRetirement}

	expectedInflationRate = getURIString('expectedInflationRate'); 
	if (expectedInflationRate) { document.getElementById('expectedInflationRate').value=expectedInflationRate}

	otherIncome = getURIString('otherIncome'); 
	if (otherIncome) { document.getElementById('otherIncome').value=otherIncome}

}


function getURIString(paramName) { const urlParams = new URLSearchParams(window.location.search);
 if (urlParams.has(paramName)) {return urlParams.get(paramName);}; return null;}
 
 function createURLAndCopyToClipboard(){
	 newURL = window.location.hostname + '/finProg.html?' ;
	 
	 newURL = newURL.concat('personalPensionAge=' + document.getElementById('personalPensionAge').value + '&' );
	 newURL = newURL.concat( 'statePensionAge=' + document.getElementById('statePensionAge').value + '&' );
	 newURL = newURL.concat('taxFreeAmount=' + document.getElementById('taxFreeAmount').value + '&' );
	 newURL = newURL.concat( 'maxLumpSum=' + document.getElementById('maxLumpSum').value + '&' );
	 newURL = newURL.concat('ageNow=' + document.getElementById('ageNow').value + '&' );
	 newURL = newURL.concat( 'retirementAge=' + document.getElementById('retirementAge').value + '&' );
	 newURL = newURL.concat( 'iSAValueNow=' + document.getElementById('iSAValueNow').value + '&' );
	 newURL = newURL.concat( 'yearlyISAAddition=' + document.getElementById('yearlyISAAddition').value + '&' );
	 newURL = newURL.concat( 'pensionValueNow=' + document.getElementById('pensionValueNow').value + '&' );
	 newURL = newURL.concat( 'pensionYearlyAddition=' + document.getElementById('pensionYearlyAddition').value + '&' );
	 newURL = newURL.concat( 'expectedStatePension=' + document.getElementById('expectedStatePension').value + '&' );
	 newURL = newURL.concat( 'desiredYearlyIncome=' + document.getElementById('desiredYearlyIncome').value + '&' );
	 newURL = newURL.concat( 'expectedGrowthRate=' + document.getElementById('expectedGrowthRate').value + '&' );
	 newURL = newURL.concat( 'expectedGrowthRatePostRetirement=' + document.getElementById('expectedGrowthRatePostRetirement').value + '&' );
	 newURL = newURL.concat( 'expectedInflationRate=' + document.getElementById('expectedInflationRate').value + '&' );
	 newURL = newURL.concat( 'otherIncome=' + document.getElementById('otherIncome').value + '&' );
	 newURL = newURL.concat( 'taxFreeLumpSum=' + document.getElementById('taxFreeLumpSum').value + '&') ;
//	 + ' =' + document.getElementById('').value + ','
	 ;
	
	navigator.clipboard.writeText(newURL);
	alert("Your individual URL has been created and copied to the clipboard");
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
	        retVal = retVal+' selected' ;	       }
	       retVal = retVal + '>' + options[i] + '</option>';
	    }
	  }
	  retVal = retVal + '</select></span>';
	  return retVal; }

	  