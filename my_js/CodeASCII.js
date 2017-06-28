function codeChar(e) {
    var charMsg;
    charMsg = document.getElementById('reponse');
    charMsg.innerHTML = "Il codice ASCII di " + String.fromCharCode(e.keyCode) +
        " &egrave: "+ e.keyCode; //inserisci l'output'
}

var elInput = document.getElementById('character');
elInput.addEventListener('keypress', codeChar, false);

