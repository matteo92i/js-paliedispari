// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let utentePariDispari = prompt('scegliere pari o dispari')
document.getElementById('pariDispari').innerHTML = 'il giocatore dice' + ' ' + utentePariDispari

let inserireNumero = parseInt(prompt('inserire numero da 1 a 5'))

if(inserireNumero >5){
    alert('da 1 a 5')
}

var max = 5;
var min = 1;

function numeriCasuali(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(numeriCasuali(min,max));

let somma = 0
somma = numeriCasuali(min,max) + inserireNumero
console.log(somma)


     
    





function pariDispari(somma)
{
    if(somma % 2 == 0){
        return 'pari'
    } else {
        return 'dispari'
    }

}
document.getElementById('numero').innerHTML = 'è uscito un numero:' + ' ' + pariDispari(somma)