gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let editedPlayer = 0;
let activePlayer = 0;
let currRound = 1;
let gameIsOver = false;
const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
]

const playerConfigOverlayElement = document.getElementById('modal-config');
const backdropElement = document.getElementById('backdrop');

const startGameBtnElement = document.getElementById('start-game-btn');
const gameAreaElement = document.getElementById('active-game');

const errorMessageParaElement = document.getElementById('error-message');

const editPlayer1BtnElement = document.getElementById('edit-player1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player2-btn');
const turnDenotingElement = document.getElementById('turn-denoter');
const cancelButtonElement = document.getElementById('cancel-button');
const gameOverElement = document.getElementById('game-over');

const gameBoardElement = document.getElementById('game-board');
const gameFieldElements = document.querySelectorAll('#game-board li');

const activePlayerNameElement = document.getElementById('active-player-name');

editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);
backdropElement.addEventListener('click', closeOverlay);
cancelButtonElement.addEventListener('click', closeOverlay);

const formElement = document.querySelector('form');

formElement.addEventListener('submit', getFormInput);

startGameBtnElement.addEventListener('click',startNewGame);

for(gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener('click', selectGameField);
}