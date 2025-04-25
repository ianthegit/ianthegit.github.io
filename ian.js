officePics= new Array();officeViews= new Array();people= new Array();videos= new Array();fam= new Array();
function createScreen() { 
	setupPhotoArray();
	document.write("<div id='SQQuiz' class='grad' style='font-family:verdana;font-size:15px' ><span border=1 >Some sort of career timeline </BR></BR></span>" + 
	writePhotoStory(officePics) + "</BR></BR> " +  writePhotoList(officeViews) + "</BR></BR> " + 	writePhotoList(people) + "</BR></BR> " +
	"As for what next - more of this: </BR></BR>" + writeVideoTabs(videos) + writeVideoDivs(videos) + '</BR></BR>' +writePhotoList(fam) + "</BR></BR> " +
	"<table> <tr> <td><a href='mailto:ian" + "@" + "hopgood.uk?subject=This is not about work, I promise&body=Want a beer, I will pay?'>eMail</a> " 
	+"  </td> <td> &nbsp;   </td> <td>  <a href='https://www.instagram.com/" + "ianhoppo/'>Social</a> </td> <td> &nbsp;   </td> <td>  <a href='https://www.strava.com/athletes/" + "awesomest'>Biking</a> </td></tr></table> </div>");	
	document.getElementById("defaultOpen").click();}
function writePhotoStory(pics) {
	retString = "<table border=1 >";
	for (var i = 0 ; i < pics.length ; i++) {
		retString = retString + "<tr><td align='top'>" + pics[i].Dates + "</BR></BR> " + pics[i].Business + "</td><td align='left'>" + pics[i].Role + "</BR></BR><span>";
		writePics(pics, i);	}
	return retString + "<table>";}	
function writePics(pics, i) {
    for (var j = 0; j < pics[i].Pictures.length; j++) {
        retString = retString + ' <a class="userBtnCareer" href="pictures/' + pics[i].Pictures[j] + '" target="_blank"> <img loading="lazy" style="height:100%;width:100%;border:0;" src="pictures/' + pics[i].Pictures[j] + '" />  </a> '; }
    retString = retString + "</span> </td>  </tr>"; }
function writePhotoList(pics) {
	retString = " <table border=0 > ";
	for (var i = 0 ; i < pics.length ; i++) {
		retString = retString + " <tr><td align='left'>" + pics[i].Dates + "</BR></BR><span>";
		writePics(pics, i);	}
	return retString + "<table>";}	
function openRide(evt, rideName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");  }
  document.getElementById(rideName).style.display = "block";
  evt.currentTarget.className += " active";}
function writeVideoTabs(videos) {
	retString = '<div class="tab">';
	for (var j = 0 ; j < videos.length ; j++) {
		retString = retString + '<button class="tablinks" onclick="openRide(event, \'' + videos[j].Description + '\')" ';
		if (j==0) {	retString = retString + ' id="defaultOpen"'; }
		retString = retString + '>' + videos[j].Description + '</button>';	}
	return retString + "</div>";}	
function writeVideoDivs(videos) {
	tabDivString = '';
	for (var i = 0 ; i < videos.length ; i++) {
		tabDivString = tabDivString + '<div id="' + videos[i].Description + '" class="tabcontent">  <iframe src="https://www.youtube.com/embed/' + videos[i].EmbedCode +
		'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'	}
	return tabDivString ;}	
function setupPhotoArray(){
	officePics.push({Dates: "1979-1988", Business:"Hopgoods </BR></BR>Stowmarket", Role:"Carpet sales, lingerie sales, furniture sales, homeware sales, lino cutting, deliveries, data entry, cashing up, banking", Pictures:new Array("horseAndCart.jpg", "hopgoods2.jpg", "hopgoods1.jpg","hopgoods0.jpg")})
	officePics.push({Dates: "1988-1989", Business:"British Aerospace </BR></BR>Brough, The Strand", Role:"Apprentice riviter, Enemy fire damage application, HQ finance application - Pascal, Fortran, QuickBasic, DB2", Pictures:new Array("brough0.jpg", "brough1.jpg", "brough2.jpg", "BAEtheStrand.jpg")})
	officePics.push({Dates: "1989", Business:"Chappell Farm </BR></BR> Stowupland", Role:"Harrower", Pictures:new Array("harrow.jpg")})
	officePics.push({Dates: "1989-1994", Business:"Suffolk Country Council - Education Department </BR></BR>Ipswich", Role:"Developer, SCO Admin, Informix DBA: Informix4GL, SQL, Shell scripting", Pictures:new Array("countyHall0.jpg")})
	officePics.push({Dates: "1994-2007", Business:"Wellington Underwriting </BR></BR>Ipswich, London, San Francisco, Oakland, New Orleans", Role:"Trainee Developer, Technical Architect: OpenROAD, ABF", 
		Pictures:new Array("museumSt0.jpg", "mincing0.jpg", "lloyds0.jpg", "leadenhallSt.png", "sanFran1.png")})
	officePics.push({Dates: "2007-2025", Business:"Catlin/XL Catlin/AXA XL </BR></BR> London, Köln, Pune, Bengaluru, Ipswich, The VeloDrone", Role:"Developer, Technical Lead: Java", 
		Pictures:new Array("mincing1.jpg", "cologne0.jpg", "lloyds1.jpg", "gracechurch0.jpg", "pune5.png", "TCSBangalore.png", "leadenhallStDungeon.jpg", "ipswich0.jpg", "shed3.jpg")})
	officeViews.push({Dates: "My career has given me the opportunity to travel on 3 continents, see some amazing places and things, sometimes simply out of the window", Business:"", Role:"", 
		Pictures:new Array("bangalore0.jpg", "bangalore2.jpg","ipswich1.jpg","catlin4.jpg","neworleans0.jpg","pune3.jpg","sanFrancisco0.jpg","AXAcouer2.jpg","pune0.jpg","shed0.gif","shed1.jpg","shed2.jpg")})
	people.push({Dates: "Beers and bikes have always managed to make an appearance", Business:"", Role:"", 
		Pictures:new Array("brough3.jpg", "catlin2.jpg", "catlin3.jpg", "catlin5.jpg", "catlin6.jpg", "catlinTri2.jpg", "catlinTri0.jpg", "catlin1.jpg","hac0.jpg","Wellington.jpg","Ipswich2.jpg","ipswich3.jpg","bangalore1.jpg",
		"bangalore6.jpg","bangalore3.jpg","pune1.jpg","visitors0.jpg","visitors1.jpg", "gracechurch1.jpg","AXAcouer0.jpg","AXAcouer1.jpg","axaxl0.jpg","axaxl1.jpg","axaxl2.jpg","axaxl3.jpg","london2Paris.jpeg")}) //,"AXAcouer3.png"
	videos.push({Description:"Forest", EmbedCode:"kVP7jAZxz6Q?"})
	videos.push({Description:"Woodbridge 2 Lowestoft", EmbedCode:"e2xMkQb-etI?"})
	videos.push({Description:"Roubaix", EmbedCode:"es6G5W97hUk?"})
	videos.push({Description:"Box Hill off-road", EmbedCode:"1kg8muJIOH8?si=ayhnrRHNQ9AA_xOQ&amp;start=66"})
	videos.push({Description:"Sunset", EmbedCode:"HvyJTo40BhM?"})
	videos.push({Description:"Coast", EmbedCode:"3qMy0uIAQsU?"})
	videos.push({Description:"Rendo", EmbedCode:"z-juTg5Ednk?"})
	videos.push({Description:"Debenham", EmbedCode:"f20-aiGl1oQ?"})
	videos.push({Description:"Halesworth", EmbedCode:"BcQ68U1zskg?"})
	videos.push({Description:"Night", EmbedCode:"0FFiyXiGDLE?"})
	videos.push({Description:"Green Lanes", EmbedCode:"s7ZmRPLqspY?"})
	videos.push({Description:"Ruff Stuff", EmbedCode:"h92l9AlTh0E?"})
	videos.push({Description:"RSPB", EmbedCode:"J4bl5RQ8Tsg?"})
	videos.push({Description:"Forest Explore", EmbedCode:"JHTkmXW_0Hw?"})
	videos.push({Description:"Commute no more", EmbedCode:"kCkA7Ofdd4k?"})
	videos.push({Description:"Rooley Moor", EmbedCode:"KTsNVflnd08?"})
	fam.push({Dates: "And a lot more time with this bunch", Business:"", Role:"", Pictures:new Array("fam1.jpg","famSinging.gif","fam3.jpg","fam4.jpg","fam5.jpg","fam6.jpg","fam7.jpg","fam0.jpg","fam2.jpg")})}
	
