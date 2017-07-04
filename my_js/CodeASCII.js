$(function() {
    var $inputChar = $('input:text');           //puntatore al nodo di testo del tag input
    var $startConvert = $('#startConvert');     //puntatore al form
    var $reponse = $('ul#reponse');             //puntatore al risultato del convertitore
   

    $startConvert.on('submit', function(e) {   //evento: pressione sul tasto Convert!, invio della stringa
        $charConverted = $('li#converted');     //puntatore del risultato precedente
        $charConverted.remove();                //elimina il risultato precedente
        e.preventDefault();                     
        var inputForm = $inputChar.val();       //stringa inserita nell'input
        var len = inputForm.length;             
        $reponse.prepend('<li id = "converted">il codice ASCII di ' + inputForm.charAt(0) + ' &egrave : '
            + inputForm.charCodeAt(0) + '</li>'); //inserisci la conversione del primo carattere
        for (var i = 1; i < len; i++) {           //se ci sono altri caratteri estraine uno ad uno
            var $lastChar = $('li:last');
            $lastChar.after('<li id = "converted">il codice ASCII di ' + inputForm.charAt(i) + ' &egrave : '
                + inputForm.charCodeAt(i) + '</li>');   //e fornisci il codice ASCII di ognuno in una lista
        }
    });
});