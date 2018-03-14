
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
