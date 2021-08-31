function isPalindroma(nome) {
    var nomeContrario = '';
    for (var i = nome.length - 1; i >= 0; i--) {
        nomeContrario += nome[i];
    }

    
    if (nome === nomeContrario) {
        return true;
    } else {
        return false;
    }
}

var inserisciNome = prompt('Inserisci una parola');




if (isPalindroma(inserisciNome)) {
    console.log('la parola è palindroma')
} else {
   console.log('non è palindroma')
}
