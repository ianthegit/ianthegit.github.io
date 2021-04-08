/**
 * 
 */

function cleanUpBloggerCrap() {
	document.getElementsByClassName("header-outer")[0].innerHTML='';
    //document.getElementsByClassName("footer-outer")[0].innerHTML='';

	document.getElementsByClassName("post-title entry-title")[0].innerHTML='';

	document.getElementsByName("Navbar")[0].innerHTML='';
  
	var element = document.getElementById("navbar");
    element.parentNode.removeChild(element);
};
