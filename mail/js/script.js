// creo array di utenti
const users = ["mario@gmail.com", "luca@gmail.com", "nando@alice.it", "rita@tiscali.com", "ludovica@tiscali.it"]

// prendo input scritto dall utente
let emailFromInput = document.querySelector("#email")

//prendo il bottone per controllare se l email è tra quelli degli utenti
let buttonSubmit = document.querySelector(".button-submit")

// prendo div per inserire un messaggio 
let message = document.querySelector(".message")



// creo avento al clik del bottone controlla
buttonSubmit.addEventListener("click", function() {
    // creo variabile utente trovato = false
    let userFound = false;
    //creo variabile user
    let user;
    // ciclo sul mio array utenti
    for (let i = 0; i < users.length; i++) {
        
        // se userFound è diverso da true 
        if (userFound != true) {
            // salvo ogni singlo elemento dell array in una variabile
            user = users[i]
            // controllo se emailFromInput corrisponde a un elemento dell array
            if (emailFromInput.value === user) {
                console.log("email trovata")
                userFound = true;
            }else{
                console.log("email non trovata")
            }
        }
        
    }

})