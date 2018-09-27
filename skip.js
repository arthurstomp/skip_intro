function lookForSkipCredits() {
	var looking;
	looking = setInterval(function() {
		var elem;
		elem = document.getElementsByClassName('skip-credits')[0]
		if(elem) {
			elem.children[0].click()
		}
	}, 2000)
}

function skipIntro() {
	lookForSkipCredits()
}

skipIntro()
