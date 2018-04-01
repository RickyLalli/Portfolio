
//update about text on small _scrollElement
var x = window.matchMedia("(min-width: 500px)")

function swapText(x) {
	if(x.matches) {
		document.getElementById('about-message').innerHTML = "Hi, I'm &nbsp;Ricky,&nbsp; nice to meet&nbsp; you!";

	} else {
		document.getElementById('about-message').innerHTML = "Hi, I'm &nbsp;Ricky!";

	}
}

swapText(x)
x.addListener(swapText)

/*
// move the location of text box from above to below img in project-2 overview section (not working)

var y = window.matchMedia("(min-width: 767px)")

function moveText(y) {
	if (y.matches) {
		$(".move-text-down").appendTo(".text-moved-bottom");
	} else {
		$(".text-moved-bottom").appendTo(".move-text-down");
	}
}

*/
