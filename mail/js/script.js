// creo array si utenti
const users = ["mario@gmail.com", "luca@gmail.com", "nando@alice.it", "rita@tiscali.com", "ludovica@tiscali.it"]

// prendo input scritto dall utente
let emailFromInput = document.querySelector("#email")

//prendo il bottone per controllare se l email è tra quelli degli utenti
let buttonSubmit = document.querySelector(".button-submit")

// prendo div per inserire un messaggio 
let message = document.querySelector(".message")

// creo avento al clik del bottone controlla
buttonSubmit.addEventListener("click", function() {
    // ciclo sul mio array utenti
    for (let i = 0; i < users.length; i++) {
        // salvo ogni singlo utente in una variabile
        let user = users[i]
        // controllo ogni volta se l email inserita dall utente è uguale a una di quelle che si trovano all interno dell array
        if (emailFromInput.value === user) {
            message.innerHTML = `${emailFromInput.value} può accedere`
        }else{
            message.innerHTML = `${emailFromInput.value} non può accedere, insrisci una nuova email`
        }
    
    }

})