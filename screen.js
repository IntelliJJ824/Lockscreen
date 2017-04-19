



$(document).ready(function (){


	$("h1").fadeIn(3000);
	$("img").fadeIn(10000);
	
	$("#topquestion").fadeIn(6000);
	$("#middlequestion").fadeIn(6000);
	$("#number").fadeIn(6000);
	
	$("#lowquestion").fadeIn(10000);
	$("#lowerquestion").fadeIn(10000);
	$("#numbers").fadeIn(10000);

	$("#start").fadeIn(14000);
	$("#end").fadeIn(14000);

	});
 
 















/*change the text*/

function moveOn(){
	
	document.getElementById("start").value="Go!";
	
}


function moveOut(){
	
	document.getElementById("start").value="Ready?";

}


function shiftOn(){
  document.getElementById("end").style.background='#33CCFF'; 
}

function shiftOut(){
  document.getElementById("end").style.background='white';
  
}



/* design a gallery */

var curimg=document.getElementById("imPur");
var preimgs=[];
var t;
var counter=0;
var images=["3lock.jpg","lock4.jpg","lock5.jpg"];
var galleryon=true;


function prepare(){
  for(var i=0; i<images.length;i++){
    preimgs[i]=new Image();
  }
  
  for(var i=0; i<preimgs.length;i++){
    preimgs[i].src = images[i];
  }
 
  if(galleryon===true){
    startGallery();
   } 
  
}

onload=prepare;
   
function startGallery(){
  
  curimg.src= preimgs[counter].src;
  counter++;
  
  if(counter==preimgs.length){
    counter=0;
    
  }
  
  t=setTimeout("startGallery()",2000);
  
}




