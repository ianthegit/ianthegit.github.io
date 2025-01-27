/**
 * 
 */

 //file:///Users/hoppo/Documents/GitHub/ianthegit.github.io/queenBee.html?primaryLetter=t&letter=e&letter=h&letter=y&letter=o&letter=n&letter=n&letter=p&ignoreTime=Yes
 
 function checkForWords () {

	 ignoreTime = getURIString('ignoreTime');
	 
	 const d = new Date();
	let hour = d.getHours();
	if (hour < 21 ) {
		window.alert('Cheeky.  Not until 9pm');
		if ( ignoreTime==null) {
			window.location.href = "https://www.youtube.com/watch?v=IbW5K2F1N28";
			}
	}

	 primaryLetter = getURIString('primaryLetter');
	 secondaryLetters = getURIStrings('letter');
	 
	 letters = [primaryLetter];
	for (var letterIndex=0 ; letterIndex < secondaryLetters.length ; letterIndex++ ) {
		letters.push(secondaryLetters[letterIndex])
	}	 
	 var solvedList= [];
	 
	 document.write("<div id='QueenBeeSolver' >  </div>");
	 for (var wordIndex=0 ; wordIndex<words.length ; wordIndex++){
		 wordIterate: if (words[wordIndex].includes(primaryLetter) && words[wordIndex].length > 3) {
			 for (let i = 0; i < words[wordIndex].length; i++) {
			 	if (!letters.includes( words[wordIndex][i] ) ) {
					 break wordIterate;
				 }
						 
			 }
			 solvedList.push(words[wordIndex])
			 //document.getElementById("QueenBeeSolver").innerHTML = document.getElementById("QueenBeeSolver").innerHTML + words[wordIndex] + '  (' + words[wordIndex].length + ') </BR>';
		 }	 
	 }
	 solvedList.sort();
	 startChar={};
	 solvedList.forEach(element => {
  		if (startChar[element.substring(0,2)] === undefined) {
    		startChar[element.substring(0,2)] = 1;
  		} else {
    		startChar[element.substring(0,2)]++;
  		}
 	})
 	
 	for (let key in startChar) {
		 document.getElementById("QueenBeeSolver").innerHTML = document.getElementById("QueenBeeSolver").innerHTML + "<span id='" + key + "'> </BR></BR>" + key + "</BR></span>";
		 for (var wordIndex=0 ; wordIndex<solvedList.length ; wordIndex++){
			if (solvedList[wordIndex].substring(0,2) == key) {
				document.getElementById(key).innerHTML = document.getElementById(key).innerHTML + solvedList[wordIndex] + "   ";
			}	 
		}
  		//console.log(`Element ${key} occurs ${countMap[key]} times`);
	}
 }
 
 function getURIString(paramName) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	if (urlParams.has(paramName)) {
		return urlParams.get(paramName)
	};
	return ;
}
 function getURIStrings(paramName) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	if (urlParams.has(paramName)) {
		return urlParams.getAll(paramName)
	};
	return ;
}