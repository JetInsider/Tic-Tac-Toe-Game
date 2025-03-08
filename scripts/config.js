function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;  //+'1' => 1(int)
    backdropElement.style.display = 'block';
    playerConfigOverlayElement.style.display = 'block';
}

function closeOverlay() {
    backdropElement.style.display = 'none';
    playerConfigOverlayElement.style.display = 'none';
    errorMessageParaElement.textContent = ''
    formElement.firstElementChild.classList.remove('error');

    //Clear the input field
    formElement.firstElementChild.lastElementChild.value = ''
}

function getFormInput(event) {
    event.preventDefault();
    const formObject = new FormData(event.target);
    let enteredPlayername = formObject.get('playername').trim();
    if(!enteredPlayername){
        errorMessageParaElement.textContent = 'Please enter a valid Name!';
        event.target.firstElementChild.classList.add('error');

        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    players[editedPlayer - 1].name = enteredPlayername;

    closeOverlay();
}