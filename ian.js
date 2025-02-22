
pics= new Array();

function createScreen() { 
	setupPhotoArray();
	document.write("<div id='SQQuiz' class='grad' >" + writePhotoStory() + "</BR></BR> <a href='mailto:ian" + "@hopgood.uk?subject=This is not about work, I promise&body=Hi, do you want a beer, I will pay all night'>email</a> " 
	+"</BR></BR><a href='https://www.instagram.com/" + "ianhoppo/'>More pictures</a></div>");
	}
	
function writePhotoStory() {
	retString = "<table border=1 style='font-family:'Verdana''>";
	for (var i = 0 ; i < pics.length ; i++) {
	retString = retString + "<tr><td align='top'>" + pics[i].Dates + "</td><td align='right'>" + pics[i].Role + "</BR></BR><table>";
		for (var j = 0 ; j < pics[i].Pictures.length ; j++) {
	
			retString = retString + '<tr><td align="right"> <a class="userBtnCareer" href="' + pics[i].Pictures[j] + '" target="_blank"> <img style="height:100%;width:100%;border:0;" src="' + pics[i].Pictures[j] + '" />  </a> </td></tr>' 
		}
	retString = retString + "</table> </td>  </tr>"
	}
	retString = retString + "<table>";
	
	return retString;
	
}	
	//document.getElementById('a').style.backgroundImage="url(images/img.jpg)";
function setupPhotoArray(){
	photoSubjectIndex=0;
	
	
	pics.push({Dates: "1979-1988", Business:"Hopgoods", Role:"Lingere sales, carpet fitting, deliveries, cashing up, banking", Pictures:new Array("pictures/hopgoods2.jpg", "pictures/hopgoods1.jpg","pictures/hopgoods0.jpg")})
	pics.push({Dates: "1988-1989", Business:"British Aerospace", Role:"Apprentice riviter, Enemy fire damage application, HQ finance application", Pictures:new Array("pictures/brough0.jpg", "pictures/brough1.jpg")})
	pics.push({Dates: "1989", Business:"Chappell Farm", Role:"Harrower", Pictures:new Array("pictures/harrow.jpg")})
	pics.push({Dates: "1989-1994", Business:"Suffolk Country COuncil - Education Department", Role:"Developer, SCO Admin, Informix DBA", Pictures:new Array("pictures/countyHall0.jpg")})
	pics.push({Dates: "1994-2025", Business:"Wellington Underwriting/Catlin/XL Catlin/AXA XL", Role:"Trainee Developer, Technical Architect, Developer, Technical Lead", Pictures:new Array("pictures/museumSt0.jpg", "pictures/mincing0.jpg", "pictures/mincing1.jpg", "pictures/gracechurch0.jpg")})
/*
	pics.push({Dates: "", Business:"", Role:"", Pictures:new Array("pictures/0.jpg", "pictures/1.jpg")})
	pics.push({Dates: "", Business:"", Role:"", Pictures:new Array("pictures/0.jpg", "pictures/1.jpg")})
	pics.push({Dates: "", Business:"", Role:"", Pictures:new Array("pictures/0.jpg", "pictures/1.jpg")})
	pics.push({Dates: "", Business:"", Role:"", Pictures:new Array("pictures/0.jpg", "pictures/1.jpg")})
	pics.push({Dates: "", Business:"", Role:"", Pictures:new Array("pictures/0.jpg", "pictures/1.jpg")})
*/	
	
}