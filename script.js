function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}



function scrolled () {
	var pos = window.pageYOffset;
    // console.log(pos);

    if(pos>796)
    {
    	document.getElementById("animate_3").style.opacity = "1";
    	document.getElementById("animate_2").style.opacity = "1";
    	document.getElementById("animate_1").style.opacity = "1";

    	document.getElementById("animate_3").style.transform = "translate3d(0,0,0)";
    	document.getElementById("animate_2").style.transform = "translate3d(0,0,0)";    	
    	document.getElementById("animate_1").style.transform = "translate3d(0,0,0)";
    	
    }


    //LOGO ANIMATION
 	var property = "translateY("+ (pos/2.2) +"px)";
 	var theEle_4 = document.getElementById("logo_animate");
    theEle_4.style.transform = property;

    //BIRD_ANIMATION
    var property_2 = "translateY("+ (-pos/5) + "px)";
    document.getElementById('fore-bird').style.transform = property_2;

    //BACK_BIRD ANIMATION
    var property_3 = "translateY("+ (pos/2.5) + "px)";
    document.getElementById('back-bird').style.transform = property_3;


    //TESTIMONIAL ANIMATION
    if (pos>1880) {
    	document.getElementById("box_1").style.opacity = "1";
    	document.getElementById("box_1").style.transform = "translate3d(0,0,0)";

    	document.getElementById("box_2").style.opacity = "1";
    	document.getElementById("box_2").style.transform = "translate3d(0,0,0)";
    }

     if (pos>2035) {
    	document.getElementById("box_3").style.opacity = "1";
    	document.getElementById("box_3").style.transform = "translate3d(0,0,0)";

    	document.getElementById("box_4").style.opacity = "1";
    	document.getElementById("box_4").style.transform = "translate3d(0,0,0)";
    }
}

 window.onscroll = function (){scrolled();};