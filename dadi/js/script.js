let numeriGiocatore = [];
let numeriComputer = [];

//Math.floor(Math.random() * 10);

let num1Giocatore = Math.floor(Math.random() * 7);
let num2Giocatore = Math.floor(Math.random() * 7);
let num3Giocatore = Math.floor(Math.random() * 7);
let num4Giocatore = Math.floor(Math.random() * 7);
let num5Giocatore = Math.floor(Math.random() * 7);
let num6Giocatore = Math.floor(Math.random() * 7);

let num1Computer = Math.floor(Math.random() * 7);
let num2Computer = Math.floor(Math.random() * 7);
let num3Computer = Math.floor(Math.random() * 7);
let num4Computer = Math.floor(Math.random() * 7);
let num5Computer = Math.floor(Math.random() * 7);
let num6Computer = Math.floor(Math.random() * 7);


numeriGiocatore.push(num1Giocatore, num2Giocatore, num3Giocatore, num4Giocatore, num5Giocatore, num6Giocatore);
console.log(numeriGiocatore);

numeriComputer.push(num1Computer, num2Computer, num3Computer, num4Computer, num5Computer, num6Computer);
console.log(numeriComputer);

let sommaNumeriGiocatore = 0
for (let i = 0; i < numeriGiocatore.length; i++) {
    sommaNumeriGiocatore += numeriGiocatore[i] 
}

console.log("punti giocatore: " + sommaNumeriGiocatore)

let sommaNumeriComputer = 0;
for (let j = 0; j < numeriComputer.length; j++) {
    sommaNumeriComputer += numeriComputer[j]
    
}

console.log("punti computer: " +sommaNumeriComputer)


if (sommaNumeriGiocatore > sommaNumeriComputer) {
    console.log("il Giocatore ha vinto l partita con " + sommaNumeriGiocatore + " punti")
}else if (sommaNumeriGiocatore < sommaNumeriComputer) {
    console.log("il Computer ha vinto la partita con " + sommaNumeriComputer + " punti")
}else{
    console.log("la partita è finita in pareggio, punti giocatore: " + sommaNumeriGiocatore + " punti computer " + sommaNumeriComputer)
}