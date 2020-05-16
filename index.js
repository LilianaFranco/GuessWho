const startButton = document.getElementById('start');
const playerInfo = document.getElementById('player-info');
const changePlayerButton = document.getElementById('change-player');
const guessButton = document.getElementById('guess');
let modal = document.getElementById('modal');

startButton.addEventListener('click', function(){
	let name = playerInfo.elements[0].value;
	let email = playerInfo.elements[1].value;
	window.location.href= './game.html';
});


changePlayerButton.addEventListener('click', function(){
	window.location.href='./index.html';
});

guessButton.addEventListener('click', function(){
	console.log("abrir modal");
	modalStyle.removeProperty("display");
});

guessButton.addEventListener('click', function(){
	console.log('cerrar modal');
	modal.style.removeProperty('display');	
});