/* Calcolo costo biglietto del treno */

/* Istruzioni */

// Il programma chiede all'utente i chilometri che vuole percorrere
const kmTraveled = prompt ('Quanti chilometri vuoi percorrere?');
console.log(kmTraveled);
// Il programma chiede l'età del passeggero
const passengerAge = prompt ('Qual`è la tua età?');
console.log(passengerAge);

/* Calcolo prezzo biglietto */

// Calcolsa il prezzo in base ai km (0.21 € al km)
const ticketPrice = (kmTraveled * 0.21);
// Applica il 20% di sconto ai minorenni
if (passengerAge < 18) {
    const underageDiscount = ((passengerAge * 20) /100);
    const underageTicketPrice = (ticketPrice - underageDiscount);
    console.log(underageTicketPrice);
// Applica il 40% di sconto agli over 65
} else if (passengerAge > 65) {
    const over65Discount = ((passengerAge * 40) /100);
    const over65TicketPrice = (ticketPrice - over65Discount);
    console.log(over65TicketPrice);
// Mostra il prezzo del biglietto non scontato
} else {
    console.log(ticketPrice);
}

// L'output del prezzo finale va scritto in forma umana
