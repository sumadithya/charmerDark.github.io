var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/travel.jpg') {
      	myImage.setAttribute ('src','images/travel2.jpg');
    	} 
    else {
      	myImage.setAttribute ('src','images/travel.jpg');
    	}
    }
var myHeading=document.querySelector('h2');
var myButton=document.querySelector('button');
function setUserName(){
	var myName=prompt('Enter Your Name Seeker') || "anon";
	localStorage.setItem('name',myName);
	myHeading.textContent='It\'s your chance to lose yourself '+myName;
}
if(!localStorage.getItem('name')){
	setUserName();
}
else{
	var storedName=localStorage.getItem('name');
	myHeading.textContent='It\'s your chance to lose yourself '+storedName;
}
myButton.onclick=function(){
	setUserName();
}
