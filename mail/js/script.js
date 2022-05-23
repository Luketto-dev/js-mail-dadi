const users = ["mario@gmail.com", "luca@gmail.com", "nando@alice.it", "rita@tiscali.com", "ludovica@tiscali.it"]

let emailFromInput = document.querySelector("#email")

let buttonSubmit = document.querySelector(".button-submit")

let message = document.querySelector(".message")

buttonSubmit.addEventListener("click", function() {
    for (let i = 0; i < users.length; i++) {
        let user = users[i]
        if (emailFromInput.value === user) {
            message.innerHTML = `${emailFromInput.value} può accedere`
        }else{
            message.innerHTML = `${emailFromInput.value} non può accedere, insrisci una nuova email`
        }
        
    }
})