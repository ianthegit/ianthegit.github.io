officePics= new Array();officeViews= new Array();people= new Array();videos= new Array();
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
	writePhotoStory(officePics) + "</BR></BR> " +  writePhotoList(officeViews) + "</BR></BR> " + 	writePhotoList(people) + "</BR></BR> " +	//writeVideoTabs(videos) + 	writeVideoDivs(videos) +
	"<table> <tr> <td><a href='mailto:ian" + "@" + "hopgood.uk?subject=This is not about work, I promise&body=Want a beer, I will pay?'>eMail</a> " 
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
	
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function writeVideoTabs(videos) {
	retString = "<div class='tab'>";
	for (var i = 0 ; i < videos.length ; i++) {
		retString = retString + "<button class='tablinks' onclick='openCity(event, '" + videos[i].Description + "')' ";
		if (i=1) {
			retString = retString + ' id="defaultOpen "';
		}
		retString = retString + '>' + videos[i].Description + '</button>';
	}

	return retString + "</div>";}	
	
function writeVideoDivs(videos) {
	tabDivString = '';
	for (var i = 0 ; i < videos.length ; i++) {
		tabDivString = tabDivString + "<div id='" + videos[i].Description + '" class="tabcontent">  <iframe width="1120" height="630" src="https://www.youtube.com/embed/' + videos[i].EmbedCode +
		'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
	}

	return tabDivString ;}	
	
	
/*


<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'Reel 1')" id="defaultOpen">Reels 1 - 6</button>
  <button class="tablinks" onclick="openCity(event, 'Reel 2')">Reels 7 - 14</button>
  <button class="tablinks" onclick="openCity(event, 'Reel 3')">Reels 15 - 25</button>
</div>

<!-- Tab content -->
<div id="Reel 1" class="tabcontent">
  <iframe width="1120" height="630" src="https://www.youtube.com/embed/axGs4Q4QAg0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div id="Reel 2" class="tabcontent">
  <iframe width="1120" height="630" src="https://www.youtube.com/embed/g-aKfVh_gz4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div id="Reel 3" class="tabcontent">
  <iframe width="1120" height="630" src="https://www.youtube.com/embed/Gyxzd1q2-Jw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

*/




function setupPhotoArray(){
	officePics.push({Dates: "1979-1988", Business:"Hopgoods", Role:"Carpet sales, lingerie sales, carpet fitting, deliveries, cashing up, banking", Pictures:new Array("hopgoods2.jpg", "hopgoods1.jpg","hopgoods0.jpg")})
	officePics.push({Dates: "1988-1989", Business:"British Aerospace", Role:"Apprentice riviter, Enemy fire damage application, HQ finance application - Pascal, Fortran, QuickBasic, DB2", Pictures:new Array("brough0.jpg", "brough1.jpg", "brough2.jpg", "BAEtheStrand.jpg")})
	officePics.push({Dates: "1989", Business:"Chappell Farm", Role:"Harrower", Pictures:new Array("harrow.jpg")})
	officePics.push({Dates: "1989-1994", Business:"Suffolk Country Council - Education Department", Role:"Developer, SCO Admin, Informix DBA: Informix4GL, SQL, Shell scripting", Pictures:new Array("countyHall0.jpg")})
	officePics.push({Dates: "1994-2025", Business:"Wellington Underwriting/Catlin/XL Catlin/AXA XL", Role:"Trainee Developer, Technical Architect, Developer, Technical Lead: OpenROAD, ABF, Java", 
		Pictures:new Array("museumSt0.jpg", "mincing0.jpg", "lloyds0.jpg", "mincing1.jpg", "cologne0.jpg", "gracechurch0.jpg", "leadenhallStDungeon.jpg", "ipswich0.jpg", "shed3.jpg")})
	officeViews.push({Dates: "My career has given me the opportunity to travel on 3 continents, see some amazing places and things, sometimes simply out of the window", Business:"", Role:"", 
		Pictures:new Array("bangalore0.jpg", "bangalore2.jpg","ipswich1.jpg","catlin4.jpg","neworleans0.jpg","pune3.jpg","sanFrancisco0.jpg","AXAcouer2.jpg","pune0.jpg","shed0.gif","shed1.jpg","shed2.jpg")})
	people.push({Dates: "Beers and bikes have always managed to make an appearance", Business:"", Role:"", 
		Pictures:new Array("brough3.jpg", "catlin2.jpg", "catlin3.jpg", "catlin5.jpg", "catlin6.jpg", "catlinTri2.jpg", "catlinTri0.jpg", "catlin1.jpg","hac0.jpg","Wellington.jpg","Ipswich2.jpg","ipswich3.jpg","bangalore1.jpg",
		"bangalore6.jpg","bangalore3.jpg","pune1.jpg","visitors0.jpg","visitors1.jpg", "gracechurch1.jpg","AXAcouer0.jpg","AXAcouer1.jpg","axaxl0.jpg","axaxl1.jpg","axaxl2.jpg","axaxl3.jpg","AXAcouer3.png","london2Paris.jpeg")})
	videos.push({Description:"Reel1", EmbedCode:"axGs4Q4QAg0"})
	videos.push({Description:"Reel2", EmbedCode:"g-aKfVh_gz4"})
	videos.push({Description:"Reel3", EmbedCode:"Gyxzd1q2-Jw"})
	}