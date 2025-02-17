
pics= new Array();

function createScreen() { 
	setupPhotoArray();
	document.write("<div id='workstuff' class='grad' ></BR></BR> <a href='mailto:ianWho" + "@hopgood.uk?subject=This is not about work, I promise&body=Hi, do you want a beer, I will pay all night'>email</a> " 
	+"</BR></BR><a href='https://www.instagram.com/" + "ianhoppo/'>More pictures</a></div>");
	}
	
	//document.getElementById('a').style.backgroundImage="url(images/img.jpg)";
function setupPhotoArray(){
	photoSubjectIndex=0;
	
	
	pics.push({Dates: "1980-1988", Business:"Hopgoods", Role:"Lingere sales, carpet fitting, deliveries, cashing up, banking", Pictures:new Array(".\pictures\hopgood0.jpg", ".\pictures\hopgood1.jpg",".\pictures\hopgood2.jpg")})
	pics.push({Dates: "1988-1989", Business:"British Aerospace", Role:"Apprentice riviter, Enemy fire damage application, HQ finance application", Pictures:new Array(".\pictures\brough0.jpg", ".\pictures\brough1.jpg")})
	
	
}