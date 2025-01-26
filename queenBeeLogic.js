/**
 * 
 */

 var words = ['abcde', 'efghi', 'hijkl'];
 var primaryLetter = 't';
 const letters = [ 'e','h','y','o','n','p'];
 
 function checkForWords () {
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