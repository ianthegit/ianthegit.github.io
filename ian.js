
officePics= new Array();
officeViews= new Array();
people= new Array();

function createScreen() { 
	setupPhotoArray();
	document.write("<div id='SQQuiz' class='grad' style='font-family:verdana;font-size:15px' ><span border=1 >Some sort of career timeline </BR></BR></span>" + 
	writePhotoStory(officePics) + "</BR></BR> " + 
	writePhotoStory(officeViews) + "</BR></BR> " + 
	writePhotoStory(people) + "</BR></BR> " + 
	
	"<table> <tr> <td><a href='mailto:ian" + 
	"@hopgood.uk?subject=This is not about work, I promise&body=Hi, do you want a beer, I will pay all night'>eMail</a> " 
	+"  </td> <td> &nbsp;   </td> <td>  <a href='https://www.instagram.com/" + "ianhoppo/'>Social</a> </rd></tr></table> </div>");
	}
	
function writePhotoStory(pics) {
	retString = "<table border=1 >";
	for (var i = 0 ; i < pics.length ; i++) {
	retString = retString + "<tr><td align='top'>" + pics[i].Dates + "</BR></BR> " + pics[i].Business + "</td><td align='right'>" + pics[i].Role + "</BR></BR><table>";
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
	
	
	officePics.push({Dates: "1979-1988", Business:"Hopgoods", Role:"Lingerie sales, carpet fitting, deliveries, cashing up, banking", Pictures:new Array("pictures/hopgoods2.jpg", "pictures/hopgoods1.jpg","pictures/hopgoods0.jpg")})
	officePics.push({Dates: "1988-1989", Business:"British Aerospace", Role:"Apprentice riviter, Enemy fire damage application, HQ finance application", Pictures:new Array("pictures/brough0.jpg", "pictures/brough1.jpg", "pictures/brough2.jpg")})
	officePics.push({Dates: "1989", Business:"Chappell Farm", Role:"Harrower", Pictures:new Array("pictures/harrow.jpg")})
	officePics.push({Dates: "1989-1994", Business:"Suffolk Country Council - Education Department", Role:"Developer, SCO Admin, Informix DBA", Pictures:new Array("pictures/countyHall0.jpg")})
	officePics.push({Dates: "1994-2025", Business:"Wellington Underwriting/Catlin/XL Catlin/AXA XL", Role:"Trainee Developer, Technical Architect, Developer, Technical Lead", 
		Pictures:new Array("pictures/museumSt0.jpg", "pictures/mincing0.jpg", "pictures/lloyds0.jpg", "pictures/mincing1.jpg", "pictures/cologne0.jpg", "pictures/gracechurch0.jpg", "pictures/ipswich0.jpg", "pictures/shed3.jpg")})

	officeViews.push({Dates: "My career has given me the </BR>opportunity to see some amazing places,", Business:" sometimes out of the window", Role:"", 
		Pictures:new Array("pictures/bangalore0.jpg", "pictures/bangalore2.jpg","pictures/ipswich1.jpg","pictures/neworleans0.jpg","pictures/pune0.jpg","pictures/pune3.jpg","pictures/sanFrancisco0.jpg","pictures/shed0.gif","pictures/shed1.jpg","pictures/shed2.jpg")})

	people.push({Dates: "Social events have changed ", Business:" over the years", Role:"", 
		Pictures:new Array("pictures/brough3.jpg", "pictures/catlin0.jpg", "pictures/catlinTri0.jpg", "pictures/catlinTri1.jpg", "pictures/catlin1.jpg","pictures/hac0.jpg","pictures/Wellington.jpg","pictures/ipswich2.jpg","pictures/ipswich3.jpg","pictures/bangalore1.jpg","pictures/bangalore3.jpg","pictures/pune2.jpg","pictures/visitors0.jpg","pictures/visitors1.jpg")})

/*
	pics.push({Dates: "", Business:"", Role:"", Pictures:new Array("pictures/0.jpg", "pictures/1.jpg")})
	pics.push({Dates: "", Business:"", Role:"", Pictures:new Array("pictures/0.jpg", "pictures/1.jpg")})
	pics.push({Dates: "", Business:"", Role:"", Pictures:new Array("pictures/0.jpg", "pictures/1.jpg")})
	pics.push({Dates: "", Business:"", Role:"", Pictures:new Array("pictures/0.jpg", "pictures/1.jpg")})
	pics.push({Dates: "", Business:"", Role:"", Pictures:new Array("pictures/0.jpg", "pictures/1.jpg")})
*/	
	
}