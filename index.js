const startButton = document.getElementById('start');
const playerInfo = document.getElementById('player-info');

startButton.addEventListener('click', function(){
	let name = playerInfo.elements[0].value;
	let email = playerInfo.elements[1].value;
	window.location.href='file:///C:/Users/lfranco/Desktop/GuessWho/game.html';
});

let characters = document.createElement("TABLE");


console.log("name");

