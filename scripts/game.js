function resetGameStatus(){
    activePlayer = 0;
    currRound = 1;
    gameIsOver = false;
    turnDenotingElement.style.display = 'block';

    gameOverElement.firstElementChild.innerHTML = 'You Won <span id="winning-player-name">PLAYER NAME</span>'
    gameOverElement.style.display = 'none';

    let gameBoardIndex = 0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
            gameBoardItemElement.classList.remove('disabled');
            gameBoardItemElement.textContent = '';
            gameBoardIndex++;
        }
    }
}

function startNewGame() {
    if(players[0].name === '' || players[1].name ===''){
        alert("Please enter a custom Player Name for both the players!");
        return;
    }

    resetGameStatus();

    gameAreaElement.style.display = 'block';
    activePlayerNameElement.textContent = players[activePlayer].name;
}


function switchPlayer() {
    if(players[activePlayer].symbol === 'X')
        activePlayer = 1;
    else
        activePlayer = 0;
        activePlayerNameElement.textContent = players[activePlayer].name;
}


function selectGameField(event) {
    if(gameIsOver){
        return;
    }
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1; //Mathematical operation automatically converts it into a Integer
    const selectedRow = selectedField.dataset.row - 1;
    if(gameData[selectedRow][selectedColumn] != 0)
        return;

    selectedField.textContent = players[activePlayer].symbol;

    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    const winnerPlayer = checkWinner();
    if(winnerPlayer != 0){
        endgame(winnerPlayer);
        gameIsOver = true;
    }

    currRound++;

    switchPlayer();

    selectedField.classList.add('disabled');
}


function checkWinner() {
    for(let i=0;i<3;i++){
        if(gameData[i][0] != 0 && gameData[i][0] === gameData[i][1] && gameData[i][1] ===  gameData[i][2]){
            return gameData[i][0];
        }
    }

    for(let i=0;i<3;i++){
        if(gameData[0][i] !=0 && gameData[0][i] === gameData[1][i] && gameData[1][i] === gameData[2][i]){
            return gameData[0][i];
        }
    }
    //Left to Right diagonal
    if(gameData[0][0] !=0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]){
        return gameData[0][0];
    }
    //Right to Left diagonal
    if(gameData[0][2] !=0 && gameData[0][2] === gameData[1][1] && gameData[1][1] === gameData[2][0]){
        return gameData[0][2];
    }

    if(currRound === 9){
        return -1;
    }
    return 0;
}

function endgame(winnerId) {
    gameOverElement.style.display = 'block';
    turnDenotingElement.style.display = 'none';
    if(winnerId > 0){
        const winnerName = players[winnerId - 1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
    }
    else{
        gameOverElement.firstElementChild.textContent = 'It\'s a Draw';
    }
}