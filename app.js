let score = 0

makeBlock();

function makeBlock() {
	document.getElementById('js-game-place').innerHTML = `<div class="block" id="js-block"></div>`
	document.getElementById('js-block').style.left = ((Math.random()) * 370) + 'px'
	document.getElementById('js-block').style.top = ((Math.random()) * 370) + 'px'
	document.getElementById('js-block').onclick = function p() {
		changeLoc();
	}
}

function changeLoc() {
	score += 10
	document.getElementById('js-block').style.left = ((Math.random()) * 370) + 'px'
	document.getElementById('js-block').style.top = ((Math.random()) * 370) + 'px'
	console.log(document.getElementById('js-block').style.left, document.getElementById('js-block').style.top)
	document.getElementById('score').innerHTML = `Your score: ${score}`
	console.log(score)
}

function restart() {
	// document.location.reload();
	score = 0 
	changeLoc()
}
