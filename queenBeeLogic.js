/**
 * 
 */

 var words = ['abcde', 'efghi', 'hijkl'];
 var primaryLetter = 'e';
 const letters = [ 'f', 'g', 'i'];
 
 function checkForWords () {
	 console.log('Start');
	 for (var wordIndex=0 ; wordIndex<words.length ; wordIndex++){
		 wordIterate: if (words[wordIndex].includes(primaryLetter)) {
			 for (let i = 0; i < words[wordIndex].length; i++) {
			 	if (!primaryLetter == words[wordIndex][i]  && !letters.includes( words[wordIndex][i] ) ) {
					 break wordIterate;
				 }
						 
			 }
			 console.log(words[wordIndex]);
		 }	 
	 }
	 
	 
 }