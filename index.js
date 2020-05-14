const startButton = document.getElementById('start');
const playerInfo = document.getElementById('player-info');
const changePlayerButton = document.getElementById('change-player');

startButton.addEventListener('click', function(){
	let name = playerInfo.elements[0].value;
	let email = playerInfo.elements[1].value;
	window.location.href='./game.html';
});

changePlayerButton.addEventListener('click', function(){
	window.location.href='./index.html';
});

console.log("name");

