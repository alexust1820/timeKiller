// Mainest game`s vars
let GameScore = 0

// init the coolest timeKiller in the world!
makeBlock();

function makeBlock() {
	document.getElementById('js-game-place').innerHTML = `<div class="block" id="js-block"></div>`
	document.getElementById('js-block').style.left = ((Math.random()) * 370) + 'px'
	document.getElementById('js-block').style.top = ((Math.random()) * 370) + 'px'
	document.getElementById('js-block').onclick = function p() {
		changeLoc()
		updateScore()
	}
}

function changeLoc() {
	document.getElementById('js-block').style.left = ((Math.random()) * 370) + 'px'
	document.getElementById('js-block').style.top = ((Math.random()) * 370) + 'px'
	console.log(document.getElementById('js-block').style.left, document.getElementById('js-block').style.top)
}

function updateScore() {
	GameScore += 10
	document.getElementById('score').innerHTML = `Your score: ${GameScore}`
}

function restart() {
	GameScore = 0 
	changeLoc()
}
