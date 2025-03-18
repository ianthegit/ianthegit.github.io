officePics= new Array();officeViews= new Array();people= new Array();
if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    alert("Are you really doing a code review of me now?  :)"); 
    e.preventDefault(); }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    alert("Are you really doing a code review of me now? :)");
    window.event.returnValue = false;  });}
function createScreen() { 
	setupPhotoArray();
	document.write("<div id='SQQuiz' class='grad' style='font-family:verdana;font-size:15px' ><span border=1 >Some sort of career timeline </BR></BR></span>" + 
	writePhotoStory(officePics) + "</BR></BR> " +  writePhotoList(officeViews) + "</BR></BR> " + 	writePhotoList(people) + "</BR></BR> " + 
	"<table> <tr> <td><a href='mailto:ian" + "@" + "hopgood.uk?subject=This is not about work, I promise&body=Hi, do you want a beer, I will pay all night'>eMail</a> " 
	+"  </td> <td> &nbsp;   </td> <td>  <a href='https://www.instagram.com/" + "ianhoppo/'>Social</a> </td> <td> &nbsp;   </td> <td>  <a href='https://www.strava.com/athletes/" + "awesomest'>Biking</a> </td></tr></table> </div>");	}
function writePhotoStory(pics) {
	retString = "<table border=1 >";
	for (var i = 0 ; i < pics.length ; i++) {
		retString = retString + "<tr><td align='top'>" + pics[i].Dates + "</BR></BR> " + pics[i].Business + "</td><td align='left'>" + pics[i].Role + "</BR></BR><span>";
		writePics(pics, i);	}
	return retString + "<table>";}	
function writePics(pics, i) {
    for (var j = 0; j < pics[i].Pictures.length; j++) {
        retString = retString + ' <a class="userBtnCareer" href="pictures/' + pics[i].Pictures[j] + '" target="_blank"> <img style="height:100%;width:100%;border:0;" src="pictures/' + pics[i].Pictures[j] + '" />  </a> '; }
    retString = retString + "</span> </td>  </tr>"; }
function writePhotoList(pics) {
	retString = " <table border=0 > ";
	for (var i = 0 ; i < pics.length ; i++) {
		retString = retString + " <tr><td align='left'>" + pics[i].Dates + "</BR></BR><span>";
		writePics(pics, i);	}
	return retString + "<table>";}	
function setupPhotoArray(){
	officePics.push({Dates: "1979-1988", Business:"Hopgoods", Role:"Carpet sales, lingerie sales, carpet fitting, deliveries, cashing up, banking", Pictures:new Array("hopgoods2.jpg", "hopgoods1.jpg","hopgoods0.jpg")})
	officePics.push({Dates: "1988-1989", Business:"British Aerospace", Role:"Apprentice riviter, Enemy fire damage application, HQ finance application - Pascal, Fortran, QuickBasic, DB2", Pictures:new Array("brough0.jpg", "brough1.jpg", "brough2.jpg", "BAEtheStrand.jpg")})
	officePics.push({Dates: "1989", Business:"Chappell Farm", Role:"Harrower", Pictures:new Array("harrow.jpg")})
	officePics.push({Dates: "1989-1994", Business:"Suffolk Country Council - Education Department", Role:"Developer, SCO Admin, Informix DBA: Informix4GL, SQL, Shell scripting", Pictures:new Array("countyHall0.jpg")})
	officePics.push({Dates: "1994-2025", Business:"Wellington Underwriting/Catlin/XL Catlin/AXA XL", Role:"Trainee Developer, Technical Architect, Developer, Technical Lead: OpenROAD, ABF, Java", 
		Pictures:new Array("museumSt0.jpg", "mincing0.jpg", "lloyds0.jpg", "mincing1.jpg", "cologne0.jpg", "gracechurch0.jpg", "leadenhallStDungeon.jpg", "ipswich0.jpg", "shed3.jpg")})
	officeViews.push({Dates: "My career has given me the opportunity to see some amazing places and things, sometimes simply out of the window", Business:"", Role:"", 
		Pictures:new Array("bangalore0.jpg", "bangalore2.jpg","ipswich1.jpg","catlin4.jpg","neworleans0.jpg","pune0.jpg","pune3.jpg","sanFrancisco0.jpg","AXAcouer2.jpg","shed0.gif","shed1.jpg","shed2.jpg")})
	people.push({Dates: "Beers and bikes have always managed to make an appearance", Business:"", Role:"", 
		Pictures:new Array("brough3.jpg", "catlin2.jpg", "catlin3.jpg", "catlin5.jpg", "catlin6.jpg", "catlinTri2.jpg", "catlinTri0.jpg", "catlin1.jpg","hac0.jpg","Wellington.jpg","Ipswich2.jpg","ipswich3.jpg","bangalore1.jpg",
		"bangalore6.jpg","bangalore3.jpg","pune1.jpg","visitors0.jpg","visitors1.jpg", "gracechurch1.jpg","axaxl0.jpg","axaxl1.jpg","axaxl2.jpg","axaxl3.jpg","AXAcouer0.jpg","AXAcouer1.jpg","AXAcouer3.png","london2Paris.jpeg")})}