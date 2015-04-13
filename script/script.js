$(document).ready( function() {
var xy;
eqS = 0;
action = false;

function setConts() { 
	bodyW = $(window).width();
	bodyH = $(window).height();
	xy = $("#xy");
	xyR = xy.width()/2;
	arN = xy.children("article").length; 
	arL = Math.floor(2 * Math.PI / arN * 1000 ) / 1000; 
	ar = [];
	for ( i = 0; i < arN; i++) {
		ar[i] = [];
		ar[i][1] = xy.children("article:eq("+i+")").width();
		ar[i][2] = xy.children("article:eq("+i+")").height();
	}
}

function setArPos() {
	xy.css({
		 top: Math.floor( bodyH/2 - xyR + Math.sin(arL*eqS) * xyR) ,
		 left: Math.floor( bodyW/2 - xyR + Math.cos(arL*eqS) * xyR)
	});
	for ( i = 0; i < arN; i++ ) {
		arX = Math.floor(Math.cos(arL*i - Math.PI)* xyR) + xyR - ar[i][1]/2; 
		arY = Math.floor(Math.sin(arL*i - Math.PI)* xyR) + xyR - ar[i][2]/2; 
		xy.children("article:eq("+i+")").css({top: arY, left: arX });
	}
	xy.children("article:eq("+eqS+")").addClass("active");
}

function twistPos(eq) {
	eqS = xy.children(".active").index();
	direction = 1;
	degree = arL*eqS;
	degreeEnd = arL*eq;
	if ( degreeEnd > degree) {
		if ((degreeEnd - degree) > Math.PI ) {
			direction = -1;
			degreeEnd = arL*eq - 2 * Math.PI;
		}
	} else {
		direction = -1;
		if ((degree - degreeEnd) > Math.PI ) {
			direction = 1;
			degreeEnd = arL*eq + 2 * Math.PI;
		}
	}
}

function twist(eq, t) {
	if (!this.x) { this.x = 1; } else { this.x= this.x + 2; }
	action = true;
	degree = Math.floor((arL*(eqS) + Math.PI/t*x*direction)*1000)/1000;
	xyX = Math.floor( bodyW/2 - xyR + Math.cos(degree) * xyR);
	xyY = Math.floor( bodyH/2 - xyR + Math.sin(degree) * xyR);
	xy.css({ top:xyY, left: xyX });
	if (degree*direction > degreeEnd*direction) {
		clearInterval(twistAnim);
		x = 0;
		xy.children(".active").removeClass("active");
		xy.children("article:eq("+eq+")").addClass("active");
		action = false;
	}
}

function twistXY(eq, t) {
	if (action) { return false; }
	twistPos(eq);
	if (eq == eqS) { return false; }
	twistAnim = setInterval(function() { twist(eq, t);}, 20);
}

$("#nav a").click( function() {
	index = $(this).parent("li").index();
	twistXY(index,250);
	return false;
});










function startJs() {
	setConts();
	setArPos();
}
startJs();
							
$(window).resize(function() {
	eqS = xy.children(".active").index();
	startJs();
});


});
