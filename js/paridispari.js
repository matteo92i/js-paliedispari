// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let utentePariDispari = prompt('scegliere pari o dispari')

let inserireNumero = parseInt(prompt('inserire numero da 1 a 5'))

if(inserireNumero >5){
    alert('da 1 a 5')
}


function numeriCasuali()
{
    return Math.floor(Math.random * 5)
    
}




function pariDispari(somma)
{
    if(somma % 2 == 0){
        return 'pari'
    } else {
        return 'dispari'
    }

}