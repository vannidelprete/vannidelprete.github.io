var thisday = new Date();
var hour = thisday.getHours();
var greet;

if(hour >= 0 && hour <= 12){
    greet ='Buongiorno!';
}else if(hour > 12 && hour < 18){
    greet = 'Buon pomeriggio!';
}else if(hour >= 18 && hour <= 23){
    greet = 'Buona sera!';
}

header = document.getElementById('greeting');

header.innerHTML = '<h2><b>' + greet + ' ' + 'Benvenuto nel sito di Giovanni Del Prete' + 
        '</h2></b>';